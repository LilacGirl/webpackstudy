const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let baseEntry = require('./build/entry');
let baseOutput = require('./build/output');
let baseServer = require('./build/config.js');




module.exports = {

	entry: baseEntry,
	output: baseOutput,
	module: {
        rules: [
	        {
	            test: /\.less$/,
	            use: ExtractTextPlugin.extract({
	            	use:['css-loader', 'less-loader'],
	            	fallback: 'vue-style-loader'
	            })
	        },
	        {
	        	test: /\.css$/, 
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
	    	},
	        {
	        	test:/\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						less: ExtractTextPlugin.extract({
							use: ['css-loader', 'less-loader'],
							fallback: 'vue-style-loader'
						})
					}
				}
	        },
		    {
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader'
		    },
		    {
				test: /\.(jpg|jpeg|png|gif)$/,
				loaders: 'url-loader',
				options: {
					limit: 8192
				}
			}    	        
        ]
	},
  	plugins:[
    	new ExtractTextPlugin("css/[name].css")//则会生成一个css文件
    ],
	devServer: baseServer

}