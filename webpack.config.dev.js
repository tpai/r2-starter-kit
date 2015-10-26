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
            {
                test: /\.scss$/,
                loader: "style!css!sass!autoprefixer!"
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    stage: 0,
                    plugins: ["react-transform"],
                        "extra": {
                        "react-transform": {
                            "transforms": [{
                                "transform": "react-transform-hmr",
                                "imports": ["react"],
                                "locals": ["module"]
                            },
                            {
                                "transform": "react-transform-catch-errors",
                                "imports": [
                                    "react",
                                    "redbox-react"
                                ]
                            }]
                        }
                    }
                }
            }
        ]
    }
}