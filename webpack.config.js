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
				loader: ['babel-loader'],
				exclude: /node_modules/,
				query: 
					{
						presets: ['es2015', 'react']
					}	
			},
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
			{
				test: /\.(jpg|png)$/,
				loader: ['url-loader']
			}
		]
	}
};
