module.exports = {
	siteMetadata: {
		title: `R Wadhwa & Associates`,
		description: `A 360 degree financial solution!`,
		image: `/logo-icon.jpg`,
		siteUrl: `https://www.rwadhwaandassociates.com`,
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/favicon.jpg",
			},
		},
	],
};
