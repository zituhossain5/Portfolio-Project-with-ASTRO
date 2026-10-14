import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localImage = z.object({
	src: z.string().startsWith("/images/work_details/"),
	alt: z.string().min(1),
	width: z.number().int().positive(),
	height: z.number().int().positive(),
});

const works = defineCollection({
	loader: glob({ base: "./src/content/works", pattern: "*.json" }),
	schema: z.object({
		title: z.string().min(1),
		intro: z.string().min(1),
		showIntro: z.boolean().optional(),
		tightSectionHeadings: z.boolean().optional(),
		wideMetadata: z.boolean().optional(),
		imageFolder: z.string().min(1),
		card: z.object({
			title: z.string().min(1),
			image: z.string().startsWith("/images/"),
			alt: z.string().min(1),
			tags: z.array(z.string().min(1)),
		}),
		metadata: z.array(z.object({
			label: z.string().min(1),
			values: z.array(z.union([
				z.string().min(1),
				z.object({ text: z.string().min(1), href: z.string().url().optional() }),
			])).min(1),
			href: z.string().url().optional(),
			inline: z.boolean().optional(),
		})),
		coverImage: localImage,
		sections: z.array(z.object({
			id: z.string().min(1),
			title: z.string().min(1),
			blocks: z.array(z.discriminatedUnion("type", [
				z.object({ type: z.literal("paragraph"), text: z.string().min(1) }),
				z.object({ type: z.literal("paragraphs"), paragraphs: z.array(z.string().min(1)).min(1) }),
				z.object({ type: z.literal("subheading"), text: z.string().min(1) }),
				z.object({ type: z.literal("list"), items: z.array(z.object({
					lead: z.string().optional(),
					text: z.string().min(1),
				})).min(1) }),
			])).min(1),
			imageAfter: localImage.optional(),
		})).min(1),
		gallery: z.array(localImage.extend({ heading: z.string().min(1).optional() })),
	}),
});

export const collections = { works };
