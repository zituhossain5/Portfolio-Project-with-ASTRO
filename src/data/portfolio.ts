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

export interface WorkMarqueeItem {
	src: `/images/work/${string}`;
	alt: string;
}

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
	sections: {
		whyChoose: {
			id: "about",
			badge: "Why work with me",
			heading: "I don't just design. I think product",
			description: "I'm a UI/UX & Product Designer with 12+ years of turning messy product problems into experiences people actually want to use.",
		},
		portfolio: { id: "works", badge: "Selected Works", heading: "A glimpse of my best work" },
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
