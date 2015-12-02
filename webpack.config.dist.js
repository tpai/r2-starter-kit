/* global __dirname */
var webpack = require('webpack');
module.exports = {
    entry: [
        "./index"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass!autoprefixer!"
            },
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        })
    ]
}
