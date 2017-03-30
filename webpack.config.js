const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: "./src/js/entry.jsx",
	output: {
		path: __dirname+'/docs',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.js[x]$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: 
					{
						presets: ['react', 'es2015']
					}	
			},
			{
				test: /\.(jpg|png)$/,
				loaders: 'url-loader'
			}
		]
	}
};
