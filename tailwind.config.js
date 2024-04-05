/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#282828",
				blue: {
					primary: "#3500D3",
					secondary: "#240090",
					tertiary: "#190061",
					quartiary: "#0C0032",
				},
			},
		},
	},
	plugins: [],
};
