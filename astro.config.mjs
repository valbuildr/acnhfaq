// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import remarkHeadingId from 'remark-custom-heading-id';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Animal Crossing: New Horizons FAQ',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/chibisnorlax/acnhfaq' }],
			sidebar: [
				{ label: "Home", slug: "" },
				{
					label: "Beginner's Guide",
					items: [
						{ slug: "beginners" },
						{
							label: "Walkthrough",
							items: [
								{ slug: "beginners/walkthrough/day-1" },
								{ slug: "beginners/walkthrough/day-2" },
								{ slug: "beginners/walkthrough/day-3" },
								{ slug: "beginners/walkthrough/day-4" },
								{ slug: "beginners/walkthrough/day-5-7" },
								{ slug: "beginners/walkthrough/conclusion" },
							]
						},
						{ slug: "beginners/tips-and-tricks" },
					],
					collapsed: true
				},
				{
					label: "FAQ",
					items: [

						{
							label: "Island Life",
							items: [
								{ slug: "island-life" },
								{ slug: "island-life/stars" },
								{
									label: "Gardening",
									items: [
										{ slug: "island-life/gardening" },
										{ slug: "island-life/gardening/flowers" },
										{ slug: "island-life/gardening/breeding" },
										{ slug: "island-life/gardening/others" },
									]
								},
								{ slug: "island-life/turnips" },
							],
						},
						{
							label: "Island Development",
							items: [
								{ slug: "island-dev" },
								{ slug: "island-dev/rating" },
								{ slug: "island-dev/hha" },
								{ slug: "island-dev/harveyisland" },
								{ slug: "island-dev/music" },
							],
						},
						{ slug: "unlocks" },
						{
							label: "Villagers",
							items: [
								{ slug: "villagers" },
								{ slug: "villagers/amiibo" },
								{ slug: "villagers/friendship" },
								{ slug: "villagers/gifting" },
								{ slug: "villagers/mi-mo" },
							],
						},
						{
							label: "NPC Visitors & Special Characters",
							items: [
								{ slug: "npc/permanent" },
								{ slug: "npc/visiting" },
								{ slug: "npc/event" },
							],
						},
						{ slug: "events" },
						{ slug: "tt" },
						{ slug: "glitches" },
						{ slug: "misc" },
						{ slug: "new" },
						{
							label: "Happy Home Paradise",
							items: [
								{ slug: "hhp" },
								{ slug: "hhp/unlocks" },
							],
						},
					]
				}
			],
			customCss: ['./src/styles/global.css'],
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets/favicon.png',
			},
			editLink: {
				baseUrl: "https://github.com/chibisnorlax/acnhfaq/edit/master/",
			}
		}),
	],
	markdown: {
		remarkPlugins: [remarkHeadingId]
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
