var webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./index"
    ],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            // once match any test then call loader
            {
                test: /\.scss$/,
                loader: "style!css!sass!autoprefixer!"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["react-hot", "babel"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}