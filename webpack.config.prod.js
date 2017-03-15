/* global __dirname */
var webpack = require('webpack');
var defaultConfig = require('./webpack.config.js');

module.exports = Object.assign({}, defaultConfig, {
    entry: './src/index',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(false)
        })
    ]
});
