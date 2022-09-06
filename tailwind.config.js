/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
	theme: {
		container: {
			padding: "15px",
			center: true,
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			green: "#7cb24a",
			blue: "#083d5f",
			black: "#0a0a0a",
			gray: "#696969",
			light_gray: "#ececec",
			white: "#ffffff",
			red: {
				300: "#fca5a5",
				900: "#7f1d1d",
			},
		},
		fontFamily: {
			sans: ["InterVariable", "sans-serif"],
		},
		extend: {
			maxWidth: {
				"1/12": "8.333334%",
				"2/12": "16.666667%",
				"3/12": "25%",
				"4/12": "33.333334%",
				"5/12": "41.666667%",
				"6/12": "50%",
				"7/12": "58.333334%",
				"8/12": "66.666667%",
				"9/12": "75%",
				"10/12": "83.333334%",
				"11/12": "91.666667%",
				"12/12": "100%",
			},
			borderRadius: {
				"10xl": "100px",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
};
