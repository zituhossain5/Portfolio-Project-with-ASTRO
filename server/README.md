# cPanel contact form setup

The Astro site stays static. PHP runs only on cPanel after `dist/` is uploaded to `public_html/`. Astro's local dev server does not execute PHP.

1. In cPanel, enable PHP 8.0+ with OpenSSL for the domain. Confirm `mail.arahim.work:465` is reachable from the hosting account.
2. Upload the contents of `dist/` to `~/public_html/`. Confirm `~/public_html/api/contact.php` exists and PHP files execute there.
3. Create `~/contact-backend/` **outside** `public_html/`, copy `server/composer.json` there, and run `composer install --no-dev --optimize-autoloader` inside `~/contact-backend/`. If cPanel has no Composer terminal, run Composer elsewhere with a compatible PHP version and upload the resulting `vendor/` directory to `~/contact-backend/vendor/`. Do not upload `vendor/` into `public_html/`.
4. Copy `server/contact-config.example.php` to `~/contact-config.php` (also **outside** `public_html/`). Set `smtp_password` to the password for `contact@arahim.work`. Set `token_secret` to at least 32 random characters; for example, generate one with `php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"`. Do not place either secret in Git, Astro variables prefixed `PUBLIC_`, or `public_html/`.
5. Restrict `~/contact-config.php` to the account owner (for example, `chmod 600 ~/contact-config.php`) and make sure PHP can read it. The endpoint creates `~/contact-backend/rate-limits/` outside the web root; PHP must be able to write there. If needed, create it with owner-only permissions (`chmod 700`).
6. Test a real submission from the production site, then verify delivery to `workwitharahim@gmail.com` and that **Reply** targets the visitor's address. Test invalid fields, honeypot, too-fast submission, and 429 rate limiting without repeatedly sending real mail.

The endpoint uses authenticated SMTPS at `mail.arahim.work:465`, with `From: contact@arahim.work` and `To: workwitharahim@gmail.com`. It reads the two secrets from the private config file. For hosts that provide private environment variables, `CONTACT_SMTP_PASS` and `CONTACT_TOKEN_SECRET` override those config values. `CONTACT_CONFIG_PATH`, `CONTACT_VENDOR_AUTOLOAD`, and `CONTACT_RATE_DIR` may override the default private paths for nonstandard cPanel layouts.

Only `public/api/contact.php` belongs in the deployed web root. The `server/` directory, Composer files, private config, and rate-limit files stay outside it.
