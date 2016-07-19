/* global __dirname */
var path = require('path');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
    resolve: {
        root: [ path.resolve('./src') ],
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    output: {
        path: path.resolve(__dirname, 'www/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass!postcss?pack=cleaner'
            },
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    postcss: function(webpack) {
        return {
            defaults: [postcssImport, autoprefixer],
            cleaner: [
                postcssImport({
                    addDependencyTo: webpack,
                    path: [ path.resolve(__dirname + '/src') ]
                }),
                autoprefixer({browsers:['> 5%']})
            ]
        }
    }
}
