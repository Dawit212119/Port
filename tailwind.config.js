/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./data/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#0F172A",
				accent: "#22D3EE",
				text: "#E2E8F0",
			},
		},
	},
	plugins: [],
}

