const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: './app.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		],
		alias: {
			modules: path.join(__dirname, 'node_modules')
		}
	},
	plugins: [
		new ExtractTextPlugin('app.css')
	],
	module: {
		loaders: [{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: [
					'es2015',
					'react'
				],
				plugins: [
					'transform-object-rest-spread'
				]
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}, {
			test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
			loader: 'file-loader'
		}]
	}
};
