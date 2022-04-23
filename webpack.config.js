
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const project = require('./package.json');

module.exports = {
	entry: './src/index',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.(jsx|js|tsx|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							[
								'@babel/preset-typescript',
								{
									allExtensions: true,
									isTSX: true,
								}
							],
						],
					},
				},
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
		library: project.name,
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
	},
};

