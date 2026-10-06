export interface NavigationItem {
  label: string;
  href: string;
}

export const whatsappChatUrl = "https://wa.me/8801515656269";
export const calendlyBookingUrl = "https://calendly.com/workwitharahim/30min";

export interface CtaLink {
  label: string;
  href: string;
  icon: `/icons/${string}.svg`;
  external: boolean;
}

export interface SectionCopy {
  id: string;
  badge: string;
  heading: string;
  description?: string;
}

export interface ClientLogo {
  name: string;
  src: `/images/clients/${string}.svg`;
  /** Figma logo box in px: desktop width/height, and height in the mobile tile. */
  width: number;
  height: number;
  mobileHeight: number;
}

export interface WhyStat {
  value: string;
  label: string;
}

export interface WhyPrinciple {
  title: string;
  description: string;
  icon: `/icons/${string}.svg`;
}

export interface PortfolioProject {
  title: string;
  image: `/images/work/${string}.png`;
  alt: string;
  tags: readonly string[];
  slug?: string;
}

export interface ServiceCard {
  title: string;
  titleLines?: readonly string[];
  description: string;
  items: readonly string[];
  icon: `/icons/service-${string}.svg`;
}

export interface Testimonial {
  name: string;
  quote: string;
  avatar: `/images/testimonials/${string}.png`;
  height: number;
  avatarWidth?: number;
  avatarLeft?: number;
  avatarTop?: number;
  avatarOverflow?: "visible";
  quoteGap?: number;
}

export interface ProcessStep {
  number: `0${number}.`;
  title: string;
  titleLines: readonly string[];
  description: string;
  extraBottomPadding?: boolean;
}

export interface ContactField {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  required: boolean;
  autocomplete?: string;
  multiline?: boolean;
}

export const portfolio = {
  meta: {
    name: "Abdur Rahim",
    title: "Abdur Rahim — UI/UX & Product Designer",
    description:
      "Abdur Rahim is a UI/UX and product designer with 12+ years of experience designing SaaS products, websites, and mobile apps.",
    email: "workwitharahim@gmail.com",
  },
  navigation: [
    { label: "Works", href: "/works" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  worksPage: {
    title: "Selected Works — Abdur Rahim",
    headingParts: ["Selected work,", "built to", "solve"],
    headingAccent: "real problems",
    description:
      "Explore a selection of projects where strategy, UX, and visual design come together to turn complex ideas into clear, useful digital experiences.",
  },
  availability: "Available for new project",
  hero: {
    eyebrow: "Not a designer-for-hire.",
    heading: "A partner in the problem",
    headingLines: ["A partner in", "the problem"],
    introStart: "Hi, I'm Abdur Rahim, ",
    introHighlight: "a UI/UX & Product Designer with 12+ years of experience",
    introEnd:
      " designing SaaS products, websites, and mobile apps for growing businesses. A senior partner, not another freelancer.",
    primaryCta: {
      label: "Book a Free Call",
      href: calendlyBookingUrl,
      icon: "/icons/calendar.svg",
      external: true,
    } satisfies CtaLink,
    secondaryCta: {
      label: "Chat with me",
      href: whatsappChatUrl,
      icon: "/icons/whatsapp.svg",
      external: true,
    } satisfies CtaLink,
    trustCopy: "Trusted by 120+ founders & startups",
    trustedFounderImages: [
      "/images/trusted-founder-1.png",
      "/images/trusted-founder-2.png",
      "/images/trusted-founder-3.png",
      "/images/trusted-founder-4.png",
    ],
  },
  clients: [
    {
      name: "Directorist",
      src: "/images/clients/directorist.svg",
      width: 132,
      height: 40,
      mobileHeight: 32,
    },
    {
      name: "Reborn",
      src: "/images/clients/reborn.svg",
      width: 102,
      height: 60,
      mobileHeight: 40,
    },
    {
      name: "FormGent",
      src: "/images/clients/formgent.svg",
      width: 136,
      height: 32,
      mobileHeight: 24,
    },
    {
      name: "LeadFex",
      src: "/images/clients/leadfex.svg",
      width: 132,
      height: 32,
      mobileHeight: 24,
    },
    {
      name: "HelpGent",
      src: "/images/clients/helpgent.svg",
      width: 132,
      height: 31,
      mobileHeight: 24,
    },
    {
      name: "Leanier",
      src: "/images/clients/leanier.svg",
      width: 140,
      height: 34,
      mobileHeight: 32,
    },
    {
      name: "OneListing",
      src: "/images/clients/oneListing.svg",
      width: 147,
      height: 42,
      mobileHeight: 18,
    },
    {
      name: "Offcoustic",
      src: "/images/clients/offcoustic.svg",
      width: 148,
      height: 24,
      mobileHeight: 18,
    },
    {
      name: "Al Quran",
      src: "/images/clients/alQuran.svg",
      width: 141,
      height: 40,
      mobileHeight: 18,
    },
    {
      name: "Lendflow",
      src: "/images/clients/lendflow.svg",
      width: 140,
      height: 22,
      mobileHeight: 16,
    },
    {
      name: "Pentillo",
      src: "/images/clients/pentillo.svg",
      width: 132,
      height: 33,
      mobileHeight: 24,
    },
    {
      name: "Riptide",
      src: "/images/clients/riptide.svg",
      width: 100,
      height: 28,
      mobileHeight: 20,
    },
  ] satisfies ClientLogo[],
  whyChoose: {
    id: "about",
    badge: "Why work with me",
    heading: "I don't just design.",
    headingAccent: "I think product",
    description:
      "I'm a UI/UX & Product Designer with 12+ years of turning messy product problems into experiences people actually want to use.",
    featured: {
      title: "AI-native. Human-directed",
      icon: "/icons/why-ai.svg",
      paragraphs: [
        "AI made everything faster, not better. Anyone can prompt a logo or a landing page now and most of it looks the same.",
        "I use AI to move fast and explore wide. But every final call what to keep, what to cut still comes from experience, not a prompt.",
      ],
    },
    stats: [
      { value: "12+", label: "Years designing digital experiences" },
      { value: "210+", label: "Projects shipped" },
      { value: "120+", label: "Global clients" },
    ] satisfies WhyStat[],
    principles: [
      {
        title: "Product Thinking",
        description:
          "I don't decorate screens, I architect outcomes. Every decision is traced back to a business metric, a user need, and a release plan.",
        icon: "/icons/why-product-thinking.svg",
      },
      {
        title: "UX Architecture",
        description:
          "I design the structure before styling the surface flows, states, systems, and interactions that keep complex products simple.",
        icon: "/icons/why-ux-architecture.svg",
      },
      {
        title: "User Psychology",
        description:
          "Good UX starts with how people think, hesitate, decide, and act. I design around those moments, not idealized user journeys.",
        icon: "/icons/why-user-psychology.svg",
      },
      {
        title: "Design With Momentum",
        description:
          "From first flow to final handoff, I keep decisions moving. Fast exploration, focused iteration, and less time lost in the process.",
        icon: "/icons/why-design-momentum.svg",
      },
      {
        title: "Open & Honest Communication",
        description:
          "When I work on digital projects, everything is out in the open. I build trust from day one and always say things as they are.",
        icon: "/icons/why-communication.svg",
      },
      {
        title: "Unlimited Revisions",
        description:
          "Refine every detail until it feels right, with unlimited revisions and ongoing support throughout the entire design process.",
        icon: "/icons/why-revisions.svg",
      },
    ] satisfies WhyPrinciple[],
  },
  selectedWorks: {
    id: "works",
    badge: "Selected Works",
    heading: "A glimpse of my",
    headingAccent: "best work",
    projects: [
      {
        title: "Reborn Packaging — Ecommerce Mobile App UI/UX Design",
        image: "/images/work/Reborn packaging.png",
        alt: "Three Reborn Packaging ecommerce app screens on a mint background",
        tags: [
          "Mobile App Design",
          "UI/UX Design",
          "Ecommerce App",
          "Shopify App",
        ],
        slug: "reborn-packaging",
      },
      {
        title: "HelpGent — Wordpress Form Builder Plugin UI/UX Design",
        image: "/images/work/HelpGent 1.png",
        alt: "HelpGent form builder with a customer-support chat preview",
        slug: "helpgent",
        tags: [
          "UI/UX Design",
          "SaaS Design",
          "Product Design",
          "WordPress Plugin",
        ],
      },
      {
        title: "Leanier — Productivity Mobile App UI/UX Design",
        image: "/images/work/Leanier app.png",
        alt: "Two Leanier productivity app screens on a green background",
        slug: "leanier",
        tags: [
          "Mobile App Design",
          "UI/UX Design",
          "SaaS Design",
          "Productivity App",
        ],
      },
      {
        title: "Directorist — Directory Listing Mobile App Design",
        image: "/images/work/Directorist App 2.png",
        alt: "Directorist directory listing app displayed on two phones",
        slug: "directorist-mobile-app",
        tags: [
          "Mobile App Design",
          "UI/UX Design",
          "SaaS Design",
          "Directory App",
        ],
      },
      {
        title: "Al Quran — Quran Reading Mobile App UI/UX Design",
        image: "/images/work/Quran_App 1.png",
        alt: "Al Quran reading app displayed on a phone held in hand",
        tags: [
          "Mobile App Design",
          "UI/UX Design",
          "Product Design",
          "Religious App",
        ],
        slug: "al-quran",
      },
      {
        title: "FormGent — WordPress Form Builder Plugin Design",
        image: "/images/work/FormGent 1.png",
        alt: "FormGent drag-and-drop form builder interface",
        tags: [
          "UI/UX Design",
          "SaaS Design",
          "Product Design",
          "WordPress Plugin",
        ],
        slug: "formgent",
      },
      {
        title: "Directorist — Directory Plugin UI/UX Design",
        image: "/images/work/Directorist Plugin 3.png",
        alt: "Directorist listing form builder interface",
        tags: [
          "UI/UX Design",
          "SaaS Design",
          "WordPress Plugin",
          "Builder Design",
        ],
      },
      {
        title: "EmLock — EMI Mobile Shopping App UI/UX Design",
        image: "/images/work/01_Project_EmLock 3.png",
        alt: "EmLock shopping app displayed on a phone held in hand",
        tags: [
          "Mobile App Design",
          "UI/UX Design",
          "Fintech App",
          "Ecommerce App",
        ],
      },
      {
        title: "HRM — Workforce Management Platform UI/UX Design",
        image: "/images/work/Sovware_HRM.png",
        alt: "HRM workforce management and attendance dashboard",
        tags: [
          "UI/UX Design",
          "SaaS Design",
          "Product Design",
          "Dashboard Design",
        ],
      },
      {
        title: "LeadFex — B2B Lead Generation Website Design",
        image: "/images/work/Leadfex.png",
        alt: "LeadFex lead generation website displayed on a laptop",
        tags: [
          "UI/UX Design",
          "Website Design",
          "Landing Page Design",
          "SaaS Website",
        ],
      },
    ] satisfies PortfolioProject[],
    worksOnlyProjects: [
      {
        title: "OneListing — Directory Listing Website UI/UX Design",
        image: "/images/work/OneListing.png",
        alt: "OneListing directory website showing listing categories, properties, and featured cards",
        tags: [
          "UI/UX Design",
          "Website Design",
          "Landing Page Design",
          "SaaS Website",
        ],
      },
      {
        title: "Templatiq — Template Marketplace Plugin UI/UX Design",
        image: "/images/work/Templatiq.png",
        alt: "Templatiq template marketplace interface with template cards and plugin details",
        tags: [
          "UI/UX Design",
          "SaaS Design",
          "Product Design",
          "Dashboard Design",
        ],
      },
    ] satisfies PortfolioProject[],
    viewMoreLabel: "View more works",
  },
  services: {
    id: "services",
    badge: "My Services",
    heading: "Design that solves the",
    headingAccent: "right problems",
    description:
      "I design digital products around real users, real business goals, and the problems that matter, not just what looks good on screen.",
    cards: [
      {
        title: "SaaS & Product Design",
        description:
          "I turn complex workflows and product ideas into intuitive experiences that are easier to understand, use, and scale.",
        items: [
          "Product Strategy & UX",
          "User Flows & Information Architecture",
          "SaaS & Web App UI",
          "Design Systems",
          "Prototyping & Usability",
        ],
        icon: "/icons/service-saas-product.svg",
      },
      {
        title: "Mobile App Design",
        titleLines: ["Mobile App", "Design"],
        description:
          "From early concepts to production-ready screens, I design mobile experiences that feel simple, natural, and effortless.",
        items: [
          "UX Strategy & User Flows",
          "App Architecture",
          "iOS & Android UI",
          "Prototyping",
          "Design Systems",
        ],
        icon: "/icons/service-mobile-app.svg",
      },
      {
        title: "Website Design",
        titleLines: ["Website", "Design"],
        description:
          "I design strategic websites that make your value clear, guide visitors naturally, and turn attention into action.",
        items: [
          "UX & Content Structure",
          "Landing Pages",
          "SaaS & Business Websites",
          "Conversion-focused UI",
          "Responsive Design",
        ],
        icon: "/icons/service-website.svg",
      },
      {
        title: "UX Audit & Improvement",
        description:
          "I uncover usability problems, confusing flows, and missed opportunities and turn them into clearer, more effective experiences.",
        items: [
          "UX & Usability Audit",
          "User Journey Review",
          "Information Architecture",
          "UI/UX Improvements",
          "Accessibility & Interaction Review",
        ],
        icon: "/icons/service-ux-audit.svg",
      },
    ] satisfies ServiceCard[],
  },
  testimonials: {
    id: "testimonials",
    badge: "Wall of Trust",
    heading: "What founders say after",
    headingAccent: "we work together",
    description:
      "Real words from founders and teams I’ve had the opportunity to work with.",
    columns: [
      [
        {
          name: "Bob Taylor",
          quote:
            "Abdur was great to work with - asked the right questions, made all the revisions asked in good time and had the work done. Would highly recommend. Will be working with him again in the future.",
          avatar: "/images/testimonials/bob-taylor.png",
          height: 264,
        },
        {
          name: "John Wright",
          quote:
            "Alone we can do so much little, together we can do so much. Your dedication and service is appreciated Abdur, I shared my requirement but was not clear to you and you conversed with me and output was simply amazing, thank you Sir.",
          avatar: "/images/testimonials/john-wright.png",
          height: 264,
          avatarWidth: 133,
          avatarLeft: -16,
        },
        {
          name: "Assaf Ohana",
          quote:
            "Excellent work.. I will definitely use him again for the rest of my screens.. very professional and gets the job done..\nMore screens will be required and I know he is the man for the job",
          avatar: "/images/testimonials/assaf-ohana.png",
          height: 238,
          avatarWidth: 133,
          avatarLeft: -14,
        },
        {
          name: "Christopher Ball",
          quote:
            "Very fast and professional, understands your requirements well and puts in the extra effort to give you exactly what you are looking for.",
          avatar: "/images/testimonials/christopher-ball.png",
          height: 212,
          avatarWidth: 120,
          avatarLeft: -10,
          avatarTop: -10,
          avatarOverflow: "visible",
        },
        {
          name: "Angelo Bonorino",
          quote:
            "Abdur goes out of his way to produce top notch, high quality designs each and every time. Highly recommended!",
          avatar: "/images/testimonials/angelo-bonorino.png",
          height: 186,
        },
        {
          name: "Scott Graham",
          quote:
            "Very talented designer. He does great work & is very affordable.",
          avatar: "/images/testimonials/scott-graham.png",
          height: 160,
          avatarWidth: 120,
          avatarLeft: -10,
          avatarTop: -10,
          avatarOverflow: "visible",
        },
        {
          name: "SM Haque",
          quote:
            "This guy is the best of the best. Very creative and quick. We will continue to use this tech for all of our upcoming work. He is very talented and creative.",
          avatar: "/images/testimonials/sm-haque.png",
          height: 212,
          avatarWidth: 133,
          avatarLeft: -16,
        },
        {
          name: "Angel Gonzalez",
          quote:
            "Another successful project completed and always a pleasure working with Abdur.. Highly recommended for Creative designs",
          avatar: "/images/testimonials/angel-gonzalez.png",
          height: 212,
          avatarWidth: 133,
        },
        {
          name: "Aimee Vo",
          quote:
            "Thanks Abdur! Great UI skills and attention to detail Abdur. Best of luck!",
          avatar: "/images/testimonials/aimee-vo.png",
          height: 160,
          avatarWidth: 133,
          avatarLeft: -16,
        },
      ],
      [
        {
          name: "Michelle Sjögren Leong",
          quote:
            "I’d be very happy to recommend Adbur. I brought him in to create mock-up screens for our MVP Leanier app so we could visually show the concept and user journey more clearly. The original task was to take simulation mock-ups and turn them into more polished Figma versions, but he contributed much more than that. He was flexible, accommodating, and proactive from the start. He didn’t just follow the brief mechanically; he researched similar apps and brought in ideas that helped improve the overall quality and consistency of the mock-ups. He helped standardise and elevate the work while still being very respectful of the vision behind it. He also took feedback extremely well. He was open to changes, quick to make amendments, and easy to work with throughout. That combination of responsiveness and initiative made a real difference.\nHe delivered a great result at great value, and I appreciated the fact that he added genuine thought and effort rather than simply executing instructions. I would definitely recommend & use him again.",
          avatar: "/images/testimonials/michelle-sjogren-leong.png",
          height: 904,
        },
        {
          name: "Andy Moore",
          quote:
            "Freelancer revised the designs several times with no complaints. End result was superb, highly recommended!",
          avatar: "/images/testimonials/andy-moore.png",
          height: 186,
        },
        {
          name: "Michael O'Callaghan",
          quote:
            "AMAZING DESIGNER!!!!!!! We are more than satisfied with his work...so much so, we have more designs needed from this tech. very creative",
          avatar: "/images/testimonials/michael-ocallaghan.png",
          height: 246,
          avatarWidth: 133,
          avatarLeft: -28,
        },
        {
          name: "Martin Bell",
          quote:
            "Great freelancer, have used Abdur previously, and always great to work with. Does what I need with very little guidance.",
          avatar: "/images/testimonials/martin-bell.png",
          height: 212,
          avatarWidth: 133,
          avatarLeft: -10,
        },
        {
          name: "Liam O' Boyle",
          quote:
            "Abdur was great UI/UX designer, and able to provide what I needed. Always a pleasure working with him.",
          avatar: "/images/testimonials/liam-oboyle.png",
          height: 186,
          avatarWidth: 133,
          avatarLeft: -6,
        },
        {
          name: "Gurvann Saintot",
          quote:
            "Abdur is a very good designer, and the communication was perfect. I'll definitely hire him again in the future.",
          avatar: "/images/testimonials/gurvann-saintot.png",
          height: 186,
          avatarWidth: 133,
          avatarLeft: -17,
        },
      ],
      [
        {
          name: "Rodney Hall",
          quote:
            "Another excellent work of Abdur, always available and quick respon, Thank you for the good job done. Looking forward to work with you on our new coming project. Thanks!!!",
          avatar: "/images/testimonials/rodney-hall.png",
          height: 242,
          avatarWidth: 133,
          avatarLeft: -17,
          quoteGap: 24,
        },
        {
          name: "Kamel Fawaz",
          quote:
            "Abdur goes out of his way to produce top notch, high quality designs each and every time. Highly recommended!",
          avatar: "/images/testimonials/top-rank.png",
          height: 186,
          avatarWidth: 133,
          avatarLeft: -10,
        },
        {
          name: "Italos Marios",
          quote:
            "Doing a good job is not always about impressive innovation. Sometimes it is only about doing something with plain dedication. Well done Abdur.",
          avatar: "/images/testimonials/italos-marios.png",
          height: 212,
        },
        {
          name: "Mohammad Shir",
          quote:
            "Abdur is a talented and hardworking designer. He delivered an excellent set of application screens for me, and his response time with communication was very quick. I will definitely use his services again.",
          avatar: "/images/testimonials/mohammad-shir.png",
          height: 264,
          avatarWidth: 133,
          avatarLeft: -17,
        },
        {
          name: "Andrew Seymour",
          quote:
            "Abdur and I have worked together on many different design projects. He is very easy to work with and also very accommodating when it comes to revisions and requests. From logos to mobile apps design, his design work is excellent! We have been thrilled by Abdur's work and I highly recommend him.",
          avatar: "/images/testimonials/andrew-seymour.png",
          height: 342,
        },
        {
          name: "Jacqui Aby",
          quote:
            "Abdur provided quality work and was able to meet deadlines. Abdur is great to work with and I will be happy to work with him again.",
          avatar: "/images/testimonials/jacqui-aby.png",
          height: 212,
        },
        {
          name: "Tomislav M",
          quote:
            "It's always a pleasure working with Abdur Rahim. He is one of the best UI/UX designers we have here on Upwork. Will definitely hire again.",
          avatar: "/images/testimonials/tomislav-m.png",
          height: 212,
        },
        {
          name: "Ksquare Technologies Ltd",
          quote:
            "Abdur was great to work with! He responded extremely quickly to all of my messages and was very accommodating with the changes I requested.",
          avatar: "/images/testimonials/ksquare-technologies.png",
          height: 238,
        },
      ],
      [
        {
          name: "Ankit K.",
          quote:
            "Great job from Abdur. Understood requirements and made changes to design as needed. Will work with him again.",
          avatar: "/images/testimonials/ankit-k.png",
          height: 212,
        },
        {
          name: "Augustine Ikekhuah",
          quote:
            "Abdur is one of the best graphic designers I have worked with and I highly recommend him. Great service and will definitely buy again.",
          avatar: "/images/testimonials/augustine-ikekhuah.png",
          height: 212,
          avatarWidth: 120,
          avatarLeft: -10,
          avatarTop: -10,
          avatarOverflow: "visible",
        },
        {
          name: "Mitchell B",
          quote:
            "More than only a designer, Abdur Rahim go deeply in requirement and get out of there an amazing design for our Mobile App.\nHighly Highly Recommand him!!!!\nThank you sir for your inspiration.",
          avatar: "/images/testimonials/mitchell-b.png",
          height: 264,
        },
        {
          name: "Social Gains Limited",
          quote:
            "Another successful experience with Abdur and looking forward to working with him on my future designs. Highly recommended!",
          avatar: "/images/testimonials/social-gains-limited.png",
          height: 212,
        },
        {
          name: "Tariq Jalil",
          quote: "Abdur was responsive and really cares about his work.",
          avatar: "/images/testimonials/shared-client-avatar.png",
          height: 160,
        },
        {
          name: "Matthew Ebersole",
          quote:
            "This tech has to be one of the best Upwork has to offer. We are very excited to see the final results and has plenty of remaining more work for this tech. Its affordable for small business on limited budget",
          avatar: "/images/testimonials/matthew-ebersole.png",
          height: 264,
          avatarWidth: 133,
          avatarLeft: -33,
        },
        {
          name: "Ven Grollmus",
          quote:
            "We have been on Upwork for a few years now. Not only is this tech reliable but he is quick and very creative . I truly believe this guy is the best upwork has to offer. He has always been available and the quality of work is the best of the best. If you are looking for someone who is adherence to schedule with skills, then Abdur Rahim is the person.",
          avatar: "/images/testimonials/ven-grollmus.png",
          height: 342,
          avatarWidth: 120,
          avatarLeft: -10,
          avatarTop: -10,
          avatarOverflow: "visible",
        },
        {
          name: "Pankaj Yadav",
          quote:
            "Abdur is always pleasant, and gets the job done quickly and to my satisfaction. Comes up with good designs when I all I have is an idea, without any conceptual designs",
          avatar: "/images/testimonials/shared-client-avatar.png",
          height: 238,
        },
      ],
    ] satisfies Testimonial[][],
  },
  process: {
    id: "process",
    badge: "My Process",
    heading: "A system, not a",
    headingAccent: "stroke of luck",
    description:
      "Every project starts by understanding the problem, aligning on what matters, and creating the right path forward. No surprises, no scope drift.",
    steps: [
      {
        number: "01.",
        title: "Discovery Call",
        titleLines: ["Discovery", "Call"],
        description: "Understand the product, goals, and project needs.",
      },
      {
        number: "02.",
        title: "Research & Planning",
        titleLines: ["Research &", "Planning"],
        description: "Gather insights and define the right direction.",
      },
      {
        number: "03.",
        title: "UX & Wireframing",
        titleLines: ["UX &", "Wireframing"],
        description: "Map user flows and structure the experience.",
      },
      {
        number: "04.",
        title: "UI & Visual Design",
        titleLines: ["UI &", "Visual Design"],
        description: "Create a clear, polished, and consistent interface.",
      },
      {
        number: "05.",
        title: "Feedback & Revisions",
        titleLines: ["Feedback &", "Revisions"],
        description: "Review the design, gather feedback, and refine.",
        extraBottomPadding: true,
      },
      {
        number: "06.",
        title: "Handoff & Support",
        titleLines: ["Handoff &", "Support"],
        description:
          "Deliver organized Figma files and support the next steps.",
        extraBottomPadding: true,
      },
    ] satisfies ProcessStep[],
  },
  contact: {
    id: "contact",
    badge: "Contact",
    heading: "Let's build the product",
    headingAccent: "people remember",
    description:
      "Schedule a free 30-minute discovery call. No pitch, no pressure, just an honest conversation about your mission and how I can support it.",
    primaryCta: {
      label: "Book a Free Call",
      href: calendlyBookingUrl,
      icon: "/icons/cta-calendar.svg",
      external: true,
    } satisfies CtaLink,
    secondaryCta: {
      label: "Chat with me",
      href: whatsappChatUrl,
      icon: "/icons/cta-whatsapp.svg",
      external: true,
    } satisfies CtaLink,
    email: "workwitharahim@gmail.com",
    form: {
      heading: "Hello, I’d love to hear from you!",
      fields: [
        {
          label: "Name*",
          name: "name",
          type: "text",
          placeholder: "Your full name",
          required: true,
          autocomplete: "name",
        },
        {
          label: "Email*",
          name: "email",
          type: "email",
          placeholder: "Your email",
          required: true,
          autocomplete: "email",
        },
        {
          label: "Phone (Whatsapp)",
          name: "phone",
          type: "tel",
          placeholder: "Phone number",
          required: false,
          autocomplete: "tel",
        },
        {
          label: "How can I help you?*",
          name: "message",
          type: "text",
          placeholder:
            "Briefly describe your project, goals, challenges, and expected timeline",
          required: true,
          multiline: true,
        },
      ] satisfies ContactField[],
      submitLabel: "Send Message",
      submitIcon: "/icons/cta-send.svg",
    },
    socialLabel: "Follow me on socials",
    socials: [
      { name: "LinkedIn", icon: "/icons/cta-linkedin.svg" },
      { name: "YouTube", icon: "/icons/cta-youtube.svg" },
      { name: "Dribbble", icon: "/icons/cta-dribbble.svg" },
    ],
    copyright: "© 2026 Abdur Rahim. All Rights Reserved",
  },
};
