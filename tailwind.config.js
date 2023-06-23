/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary300: "rgba(0, 101, 254, 1)",
				primary400: "rgba(0, 90, 226, 1)",
				secondaryBlue: "#3e72d7",
				grayText: "#888888",
				lightBlue: "#eef3ff",
				infoBlue: "#5e9ce4",
				errorRed: "#ec5533",
				neutral: "rgba(17, 34, 50, 1)",
			},
		},
	},
	plugins: [],
};
