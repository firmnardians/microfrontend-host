const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
	entry: './src/index',
	mode: 'development',
	output: {
		filename: `host_project.js`,
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'http://localhost:8085',
		asyncChunks: true,
	},
	devServer: {
		port: 8085,
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.css', '.scss', '.js', '.jsx'],
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: {
								filter: (url) => {
									if (url.startsWith('data:')) {
										return false;
									}
									return true;
								},
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new ModuleFederationPlugin({
			name: 'HOST',
			remotes: {
				TEAM_ONE: `TEAM_ONE@http://localhost:8086/moduleEntry.js`,
				TEAM_TWO: `TEAM_TWO@http://localhost:8087/moduleEntry.js`,
			},
		}),
	],
};
