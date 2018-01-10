var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var defaultConfig = require('./webpack.config.js');

module.exports = Object.assign({}, defaultConfig, {
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: 'www',
        publicPath: '/',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index'
    ],
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'www/index.html'),
            template: path.resolve(__dirname, 'www/index.tpl.html')
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(true)
        })
    ]
});
