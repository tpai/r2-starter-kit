var webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/entry.js"
    ],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
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