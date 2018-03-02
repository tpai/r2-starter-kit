var webpack = require('webpack');
var defaultConfig = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, defaultConfig, {
    mode: 'production',
    entry: {
        app: './src/index',
        react: ['react', 'react-dom'],
        redux: ['redux', 'react-redux']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'www/index.tpl.html'
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(false)
        })
    ]
});
