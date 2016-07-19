/* global __dirname */
var webpack = require('webpack');
var objectAssign = require('object-assign');
var defaultConfig = require('./webpack.config.js');

module.exports = objectAssign({}, defaultConfig, {
    entry: './src/index',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(false)
        })
    ]
});
