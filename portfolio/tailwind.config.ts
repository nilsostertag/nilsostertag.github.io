import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		typography,
		skeleton({
			themes: {
				// Register each theme within this array:
				preset: [ "skeleton", "modern", "crimson" ] 
			}
		})
	]
} satisfies Config;
