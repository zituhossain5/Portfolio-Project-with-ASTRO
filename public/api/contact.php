<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

// This file is copied unchanged into dist/api by Astro. Secrets and Composer's
// vendor directory must be installed outside public_html on the PHP server.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function contactRespond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function contactConfig(string $privateRoot): array
{
    $path = getenv('CONTACT_CONFIG_PATH') ?: $privateRoot . '/contact-config.php';
    $config = is_file($path) ? require $path : [];
    if (!is_array($config)) {
        throw new RuntimeException('Invalid contact configuration');
    }
    return $config;
}

function contactSetting(array $config, string $key, string $environment): string
{
    $value = getenv($environment);
    return is_string($value) && $value !== '' ? $value : (string) ($config[$key] ?? '');
}

function contactLength(string $value): int
{
    $length = preg_match_all('/./us', $value);
    return $length === false ? -1 : $length;
}

function contactToken(string $secret, string $ip): string
{
    $payload = rtrim(strtr(base64_encode(json_encode([
        'time' => time(),
        'nonce' => bin2hex(random_bytes(16)),
    ], JSON_THROW_ON_ERROR)), '+/', '-_'), '=');
    $signature = hash_hmac('sha256', $payload . '.' . $ip, $secret);
    return $payload . '.' . $signature;
}

function contactTokenAge(string $token, string $secret, string $ip): ?int
{
    if (strlen($token) > 256 || !preg_match('/\A([A-Za-z0-9_-]+)\.([a-f0-9]{64})\z/D', $token, $parts)) {
        return null;
    }
    $expected = hash_hmac('sha256', $parts[1] . '.' . $ip, $secret);
    if (!hash_equals($expected, $parts[2])) {
        return null;
    }
    $decoded = base64_decode(strtr($parts[1], '-_', '+/'), true);
    $payload = $decoded === false ? null : json_decode($decoded, true);
    if (!is_array($payload) || !isset($payload['time'], $payload['nonce']) ||
        !is_int($payload['time']) || !is_string($payload['nonce']) ||
        !preg_match('/\A[a-f0-9]{32}\z/D', $payload['nonce'])) {
        return null;
    }
    $age = time() - $payload['time'];
    return $age >= 0 && $age <= 14400 ? $age : null;
}

function contactRateAllowed(string $directory, string $ip): bool
{
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Contact rate directory unavailable');
    }
    $documentRoot = realpath((string) ($_SERVER['DOCUMENT_ROOT'] ?? ''));
    $realDirectory = realpath($directory);
    if ($realDirectory === false || ($documentRoot !== false &&
        ($realDirectory === $documentRoot || str_starts_with($realDirectory, $documentRoot . DIRECTORY_SEPARATOR)))) {
        throw new RuntimeException('Contact rate directory must be private');
    }

    $path = $realDirectory . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        throw new RuntimeException('Contact rate file unavailable');
    }
    try {
        @chmod($path, 0600);
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Contact rate lock unavailable');
        }
        $stored = json_decode(stream_get_contents($handle) ?: '[]', true);
        $now = time();
        $recent = array_values(array_filter(is_array($stored) ? $stored : [],
            static fn ($stamp): bool => is_int($stamp) && $stamp > $now - 900 && $stamp <= $now));
        $allowed = count($recent) < 3;
        if ($allowed) {
            $recent[] = $now;
        }
        rewind($handle);
        if (!ftruncate($handle, 0) || fwrite($handle, json_encode($recent, JSON_THROW_ON_ERROR)) === false || !fflush($handle)) {
            throw new RuntimeException('Contact rate write failed');
        }
        flock($handle, LOCK_UN);
        return $allowed;
    } finally {
        fclose($handle);
    }
}

try {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        contactRespond(405, ['ok' => false, 'message' => 'Method not allowed.']);
    }
    $type = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
    $length = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
    if (!preg_match('~\A(?:application/x-www-form-urlencoded|multipart/form-data)\b~i', $type) ||
        $length < 1 || $length > 12000 || !empty($_FILES)) {
        contactRespond($length > 12000 ? 413 : 400, ['ok' => false, 'message' => 'Invalid request.']);
    }
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
    if (!filter_var($ip, FILTER_VALIDATE_IP)) {
        contactRespond(400, ['ok' => false, 'message' => 'Invalid request.']);
    }
    $action = $_POST['action'] ?? null;
    if (!is_string($action)) {
        contactRespond(400, ['ok' => false, 'message' => 'Invalid request.']);
    }
    $allowedFields = $action === 'init' ? ['action'] :
        ['action', 'name', 'email', 'phone', 'message', 'website', 'token'];
    if (array_diff(array_keys($_POST), $allowedFields) ||
        count(array_filter($_POST, 'is_string')) !== count($_POST)) {
        contactRespond(400, ['ok' => false, 'message' => 'Invalid request.']);
    }

    $privateRoot = dirname(__DIR__, 2);
    $config = contactConfig($privateRoot);
    $secret = contactSetting($config, 'token_secret', 'CONTACT_TOKEN_SECRET');
    if (strlen($secret) < 32) {
        contactRespond(503, ['ok' => false, 'message' => 'The contact form is unavailable. Please try again later.']);
    }

    if ($action === 'init') {
        contactRespond(200, ['ok' => true, 'token' => contactToken($secret, $ip)]);
    }
    if ($action !== 'submit') {
        contactRespond(400, ['ok' => false, 'message' => 'Invalid request.']);
    }
    foreach (['name', 'email', 'message', 'website', 'token'] as $field) {
        if (!isset($_POST[$field])) {
            contactRespond(422, ['ok' => false, 'message' => 'Please check the form and try again.']);
        }
    }
    if (trim($_POST['website']) !== '') {
        contactRespond(422, ['ok' => false, 'message' => 'Please check the form and try again.']);
    }
    $age = contactTokenAge($_POST['token'], $secret, $ip);
    if ($age === null || $age < 3) {
        contactRespond(422, ['ok' => false, 'message' => 'Please wait a moment and try again.']);
    }

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone'] ?? '');
    $message = trim($_POST['message']);
    if (contactLength($name) < 2 || contactLength($name) > 80 ||
        contactLength($email) < 3 || strlen($email) > 254 ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        contactLength($phone) > 30 ||
        ($phone !== '' && !preg_match('/\A[0-9+(). \-]+\z/D', $phone)) ||
        contactLength($message) < 25 || contactLength($message) > 4000 ||
        preg_match('/[\x00-\x1F\x7F]/', $name . $email . $phone) ||
        preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $message) ||
        preg_match_all('~(?:https?://|www\.)[^\s<>]+~iu', $message) > 2 ||
        preg_match('/(.)\1{24,}/u', $message) ||
        preg_match('/\b(\p{L}[\p{L}\p{N}]*)\b(?:\W+\1\b){9,}/iu', $message)) {
        contactRespond(422, ['ok' => false, 'message' => 'Please check the form and try again.']);
    }

    $rateDirectory = getenv('CONTACT_RATE_DIR') ?: $privateRoot . '/contact-backend/rate-limits';
    if (!contactRateAllowed($rateDirectory, $ip)) {
        contactRespond(429, ['ok' => false, 'message' => 'Too many attempts. Please try again in 15 minutes.']);
    }

    $password = contactSetting($config, 'smtp_password', 'CONTACT_SMTP_PASS');
    $autoload = getenv('CONTACT_VENDOR_AUTOLOAD') ?: $privateRoot . '/contact-backend/vendor/autoload.php';
    if ($password === '' || !is_file($autoload)) {
        contactRespond(503, ['ok' => false, 'message' => 'The contact form is unavailable. Please try again later.']);
    }
    require $autoload;

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = 'mail.arahim.work';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@arahim.work';
    $mail->Password = $password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->setFrom('contact@arahim.work', 'Abdur Rahim Portfolio');
    $mail->addAddress('workwitharahim@gmail.com');
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'New Portfolio Inquiry — ' . $name;
    $mail->isHTML(true);

    $escape = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $sentAt = gmdate('Y-m-d H:i:s') . ' UTC';
    $mail->Body = '<h1>New portfolio inquiry</h1>' .
        '<p><strong>Name:</strong> ' . $escape($name) . '</p>' .
        '<p><strong>Email:</strong> ' . $escape($email) . '</p>' .
        '<p><strong>Phone / WhatsApp:</strong> ' . $escape($phone !== '' ? $phone : 'Not provided') . '</p>' .
        '<p><strong>Message:</strong><br>' . nl2br($escape($message), false) . '</p>' .
        '<p><strong>Submitted:</strong> ' . $escape($sentAt) . '</p>';
    $mail->AltBody = "New portfolio inquiry\n\n" .
        "Name: {$name}\nEmail: {$email}\nPhone / WhatsApp: " . ($phone !== '' ? $phone : 'Not provided') .
        "\n\nMessage:\n{$message}\n\nSubmitted: {$sentAt}\n";
    $mail->send();
    contactRespond(200, ['ok' => true, 'message' => 'Thanks! Your message has been sent. I’ll get back to you soon.']);
} catch (Throwable $error) {
    error_log('Contact form delivery failed: ' . get_class($error));
    contactRespond(503, ['ok' => false, 'message' => 'Sorry, your message could not be sent. Please try again.']);
}
