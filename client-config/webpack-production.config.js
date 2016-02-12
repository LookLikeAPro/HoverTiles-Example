module.exports = [
	require("./webpack-config")({
		longTermCaching: true,
		separateStylesheet: true,
		minimize: true,
		devtool: "source-map"
	})
];
