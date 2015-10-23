module.exports = {
    entry: [
        "./index"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
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
                loader: "babel"
            }
        ]
    }
}