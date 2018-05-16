//webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: path.resolve(__dirname, "app", "app.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
