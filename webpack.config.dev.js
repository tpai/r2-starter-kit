var webpack = require('webpack');
var objectAssign = require('object-assign');
var defaultConfig = require('./webpack.config.js');

module.exports = objectAssign({}, defaultConfig, {
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: 'www/',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    debug: true,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(true)
        })
    ]
});
