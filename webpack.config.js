const path = require('path');
const ExtractCssChunksWebpackPlugin = require('extract-css-chunks-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    alias: {
      assets: path.resolve('src', 'assets'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/index'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? ExtractCssChunksWebpackPlugin.loader
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]-[local]-[hash:6]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({
                  path: [path.resolve(__dirname, 'src')],
                }),
                require('postcss-import')({
                  browsers: 'last 2 versions, ie > 9',
                }),
              ].concat(process.env.NODE_ENV === 'development'
                ? []
                : [require('cssnano')()],
              ),
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.(jpeg|jpg|png|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: process.env.NODE_ENV === 'development'
                ? 'static/files/[name].[ext]'
                : 'static/files/[name]-[hash:6].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                optimizationLevel: 7,
                interlaced:        false,
              },
              pngquant: {
                optimizationLevel: 7,
                interlaced:        false,
                quality:           '65-90',
                speed:             4,
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced:        false,
              },
            },
          },
        ],
      },
      {
        test: /.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        shared: {
          name: 'shared',
          minChunks: 2,
          test: /\.jsx?$/,
        },
        styles: {
          name: 'styles',
          minSize: 0, //Ignore minSize for CSS files, to force them in new chunks
          test: /\.scss|\.css$/,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
        },
      },
    },
  },
};
