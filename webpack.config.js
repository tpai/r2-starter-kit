module.exports = {
    entry: "./src/foobar.js",
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // once match any test then call loader
            {
                test: /\.scss$/,
                loader: "style!css!sass!"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel"
            }
        ]
    }
}