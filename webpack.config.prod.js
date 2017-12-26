/* global __dirname */
var webpack = require('webpack');
var defaultConfig = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, defaultConfig, {
    entry: {
        app: './src/index',
        react: ['react', 'react-dom'],
        redux: ['redux', 'react-redux']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['react', 'redux'],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'www/index.tpl.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(false)
        })
    ]
});
