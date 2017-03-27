const path = require('path')

module.exports = {
	entry: "./src/js/entry.js",
	output: {
		path: __dirname+'/docs',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: 
					{
						presets: ['es2015']
					}	
			}
		]
	}
};
