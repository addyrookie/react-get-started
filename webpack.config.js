const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "app", "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}
		]
	}
};
