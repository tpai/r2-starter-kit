/* global __dirname */
var path = require('path');

module.exports = {
    resolve: {
        modules: [ path.resolve('./src'), 'node_modules' ],
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    output: {
        path: path.resolve(__dirname, 'www/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.scss|\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: function () {
                              return [
                                  require('postcss-import')({
                                      addDependencyTo: webpack,
                                      path: [ path.resolve(__dirname + '/src') ]
                                  }),
                                  require('autoprefixer')({browsers:['> 5%']})
                              ];
                          }
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                use:  [
                   { loader: 'babel-loader' }
                ],
                exclude: /node_modules/, 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    }
}
