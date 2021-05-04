
const path = require('path');
const project = require('./package.json');

module.exports = {
	entry: './src/Drawer.jsx',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
		library: project.name,
		libraryTarget: 'commonjs2',
	},
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
};

