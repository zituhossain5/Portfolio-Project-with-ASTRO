export interface NavigationItem {
	label: string;
	href: `#${string}`;
}

export interface CtaLink {
	label: string;
	href: string;
	icon: "/icons/calendar.svg" | "/icons/whatsapp.svg";
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

export interface WorkMarqueeItem {
	src: `/images/work/${string}`;
	alt: string;
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
}

const portfolioProjectTitle = "EmLock — EMI-Based Mobile App Development";
const portfolioProjectTags = ["Mobile Application", "App Development", "SaaS Development", "UI/UX Design"] as const;

export const portfolio = {
	meta: {
		name: "Abdur Rahim",
		title: "Abdur Rahim — UI/UX & Product Designer",
		description: "Abdur Rahim is a UI/UX and product designer with 12+ years of experience designing SaaS products, websites, and mobile apps.",
		email: "workwitharahim@gmail.com",
	},
	navigation: [
		{ label: "Works", href: "#works" },
		{ label: "Services", href: "#services" },
		{ label: "Testimonials", href: "#testimonials" },
		{ label: "Contact", href: "#contact" },
	] satisfies NavigationItem[],
	availability: "Available for new project",
	hero: {
		eyebrow: "Not a designer-for-hire.",
		heading: "A partner in the problem",
		headingLines: ["A partner in", "the problem"],
		introStart: "Hi, I'm Abdur Rahim, ",
		introHighlight: "a UI/UX & Product Designer with 12+ years of experience",
		introEnd: " designing SaaS products, websites, and mobile apps for growing businesses. A senior partner, not another freelancer.",
		primaryCta: { label: "Book a Free Call", href: "#contact", icon: "/icons/calendar.svg", external: false } satisfies CtaLink,
		secondaryCta: { label: "Chat with me", href: "#contact", icon: "/icons/whatsapp.svg", external: false } satisfies CtaLink,
		trustCopy: "Trusted by 120+ founders & startups",
		trustedFounderImages: [
			"/images/trusted-founder-1.png",
			"/images/trusted-founder-2.png",
			"/images/trusted-founder-3.png",
			"/images/trusted-founder-4.png",
		],
	},
	workMarquee: {
		firstRow: [
			{ src: "/images/work/HelpGent 1.png", alt: "HelpGent customer-support product interface" },
			{ src: "/images/work/Directorist App 2.png", alt: "Directorist mobile directory application" },
			{ src: "/images/work/FormGent 1.png", alt: "FormGent visual form builder interface" },
			{ src: "/images/work/Quran_App 1.png", alt: "Quran learning mobile application" },
		] satisfies WorkMarqueeItem[],
		secondRow: [
			{ src: "/images/work/01_Project_EmLock 3.png", alt: "EmLock local shopping mobile application" },
			{ src: "/images/work/Quran_App 1.png", alt: "Quran learning mobile application" },
			{ src: "/images/work/Directorist Plugin 3.png", alt: "Directorist directory plugin settings interface" },
			{ src: "/images/work/Directorist App 2.png", alt: "Directorist mobile directory application" },
		] satisfies WorkMarqueeItem[],
	},
	clients: [
		{ name: "Directorist", src: "/images/clients/directorist.svg", width: 132, height: 40, mobileHeight: 32 },
		{ name: "Reborn", src: "/images/clients/reborn.svg", width: 102, height: 60, mobileHeight: 40 },
		{ name: "FormGent", src: "/images/clients/formgent.svg", width: 136, height: 32, mobileHeight: 24 },
		{ name: "LeadFex", src: "/images/clients/leadfex.svg", width: 132, height: 32, mobileHeight: 24 },
		{ name: "HelpGent", src: "/images/clients/helpgent.svg", width: 132, height: 31, mobileHeight: 24 },
		{ name: "Cultural Sponge", src: "/images/clients/cultural-sponge.svg", width: 94, height: 44, mobileHeight: 32 },
		{ name: "Synthesia", src: "/images/clients/synthesia.svg", width: 140, height: 23, mobileHeight: 18 },
		{ name: "Offcoustic", src: "/images/clients/offcoustic.svg", width: 148, height: 24, mobileHeight: 18 },
		{ name: "Waymark", src: "/images/clients/waymark.svg", width: 140, height: 26.8874, mobileHeight: 18 },
		{ name: "Lendflow", src: "/images/clients/lendflow.svg", width: 140, height: 22, mobileHeight: 16 },
		{ name: "Pentillo", src: "/images/clients/pentillo.svg", width: 132, height: 33, mobileHeight: 24 },
		{ name: "Riptide", src: "/images/clients/riptide.svg", width: 100, height: 28, mobileHeight: 20 },
	] satisfies ClientLogo[],
	whyChoose: {
		id: "about",
		badge: "Why work with me",
		heading: "I don't just design.",
		headingAccent: "I think product",
		description: "I'm a UI/UX & Product Designer with 12+ years of turning messy product problems into experiences people actually want to use.",
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
				description: "I don't decorate screens, I architect outcomes. Every decision is traced back to a business metric, a user need, and a release plan.",
				icon: "/icons/why-product-thinking.svg",
			},
			{
				title: "UX Architecture",
				description: "I design the structure before styling the surface flows, states, systems, and interactions that keep complex products simple.",
				icon: "/icons/why-ux-architecture.svg",
			},
			{
				title: "User Psychology",
				description: "Good UX starts with how people think, hesitate, decide, and act. I design around those moments, not idealized user journeys.",
				icon: "/icons/why-user-psychology.svg",
			},
			{
				title: "Design With Momentum",
				description: "From first flow to final handoff, I keep decisions moving. Fast exploration, focused iteration, and less time lost in the process.",
				icon: "/icons/why-design-momentum.svg",
			},
			{
				title: "Open & Honest Communication",
				description: "When I work on digital projects, everything is out in the open. I build trust from day one and always say things as they are.",
				icon: "/icons/why-communication.svg",
			},
			{
				title: "Unlimited Revisions",
				description: "Refine every detail until it feels right, with unlimited revisions and ongoing support throughout the entire design process.",
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
				title: "EmLock — EMI-Based Mobile App",
				image: "/images/work/FormGent 1.png",
				alt: "FormGent visual form builder interface",
				tags: ["Mobile App Design", "SaaS Design", "UI/UX Design"],
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/HelpGent 1.png",
				alt: "HelpGent customer-support flow builder interface",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/Directorist App 2.png",
				alt: "Directorist mobile directory application shown on two phones",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/Directorist Plugin 3.png",
				alt: "Directorist listing-form builder interface",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/Quran_App 1.png",
				alt: "Quran reading mobile application shown in hand",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/01_Project_EmLock 3.png",
				alt: "EmLock local shopping mobile application shown in hand",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/Quran_App 1.png",
				alt: "Quran reading mobile application shown in hand",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/01_Project_EmLock 3.png",
				alt: "EmLock local shopping mobile application shown in hand",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/Quran_App 1.png",
				alt: "Quran reading mobile application shown in hand",
				tags: portfolioProjectTags,
			},
			{
				title: portfolioProjectTitle,
				image: "/images/work/01_Project_EmLock 3.png",
				alt: "EmLock local shopping mobile application shown in hand",
				tags: portfolioProjectTags,
			},
		] satisfies PortfolioProject[],
		viewMoreLabel: "View more works",
	},
	sections: {
		services: {
			id: "services",
			badge: "My Services",
			heading: "Design that solves the right problems",
			description: "I design digital products around real users, real business goals, and the problems that matter, not just what looks good on screen.",
		},
		testimonials: {
			id: "testimonials",
			badge: "Wall of Trust",
			heading: "What founders say after we work together",
			description: "Real words from founders and teams I've had the opportunity to work with.",
		},
		process: {
			id: "process",
			badge: "My Process",
			heading: "A system, not a stroke of luck",
			description: "Every project starts by understanding the problem, aligning on what matters, and creating the right path forward. No surprises, no scope drift.",
		},
		contact: {
			id: "contact",
			badge: "Contact",
			heading: "Let's build the product people remember",
			description: "Schedule a free 30-minute discovery call. No pitch, no pressure, just an honest conversation about your mission and how I can support it.",
		},
	} satisfies Record<string, SectionCopy>,
};
