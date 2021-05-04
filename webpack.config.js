
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const project = require('./package.json');


module.exports = {
	entry: './src/index.js',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
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
		extensions: ['.js',],
	},
};

