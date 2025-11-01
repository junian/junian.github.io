// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://www.junian.dev/';
const githubAvatar = 'https://github.com/junian.png';

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Junian.dev',
			logo: {
				src: '/public/favicon-96x96.png',
				alt: 'Junian.Dev GitHub Avatar',
				replacesTitle: false,
			},
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/junian/junian.github.io/edit/raw/',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/junian' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@JunianDev' },
				{ icon: 'seti:firefox', label: 'Tech Blog', href: 'https://www.junian.net/' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
