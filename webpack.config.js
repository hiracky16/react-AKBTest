const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
    "main": "./src/js/entry.jsx",
    "index" : "./src/js/index.jsx",
  },
	output: {
		path: __dirname+'/docs',
		filename: '[name].bundle.js'
	},
  devtool: 'inline-source-map',
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
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
			{
				test: /\.(jpg|png)$/,
				loaders: 'url-loader'
			}
		]
	}
};
