const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		flowbite.content(),
	],
	theme: {
		extend: {},
	},
	plugins: [flowbite.plugin()],
}
