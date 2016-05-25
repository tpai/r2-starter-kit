/* global __dirname */
var webpack = require("webpack");
var path = require('path');
var precss = require("precss");
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
    entry: {
        app: "./index",
        vendor: ["lodash", "react", "redux", "react-redux"]
    },
    resolve: {
        root: [ path.resolve("./src") ],
        extensions: ["", ".js", ".jsx", ".css", ".scss"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss?pack=cleaner"
            },
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["react-hot", "babel"]
            }
        ]
    },
    postcss: function(webpack) {
        return {
            defaults: [postcssImport, precss, autoprefixer],
            cleaner: [
                postcssImport({
                    addDependencyTo: webpack,
                    path: [ path.resolve(__dirname + "/src") ]
                }),
                precss,
                autoprefixer({browsers:["> 5%"]})
            ]
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development'))
        })
    ]
}
