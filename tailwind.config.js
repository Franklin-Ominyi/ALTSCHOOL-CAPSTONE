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
				primaryColor: "#071c59",
				primaryBlue: "#eef3ff",
				primaryBorder: "#eeeeee",
				secondaryColor: "#90ecc2",
				secondaryBlue: "#3e72d7",
				grayBackground: "#f9f9f9",
				grayText: "#888888",
				blackText: "#2c2c2c",
				lightGreen: "#f2fff9",
				lightBlue: "#eef3ff",
				infoBlue: "#5e9ce4",
				successGreen: "#27ae60",
				errorRed: "#ec5533",
				primary300: "rgba(0, 101, 254, 1)",
				primary400: "rgba(0, 90, 226, 1)",
				textColorMain: "rgba(20, 20, 20, 1)",
				neutral: "rgba(17, 34, 50, 1)",
			},
		},
	},
	plugins: [],
};
