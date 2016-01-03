/* global __dirname */
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var precss = require("precss");

module.exports = {
    entry: [
        "./index"
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
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
                loader: "style!css!postcss-loader"
            },
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
}
