const path = require('path');
const ExtractCssChunksWebpackPlugin = require('extract-css-chunks-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
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
          process.env.NODE_ENV === 'development' ? {
            loader: ExtractCssChunksWebpackPlugin.loader,
            options: {
              hot: true,
              modules: true,
              reloadAll: true
            },
          } : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[folder]-[local]-[hash:6]',
              },
              sourceMap: true,
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
            options: {
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
                quality:           [0.65, 0.90],
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
          test: /\.jsx?$/,
          minChunks: 2,
        },
        styles: {
          name: 'styles',
          test: /\.scss|\.css$/,
          minSize: 0, //Ignore minSize for CSS files, to force them in new chunks
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
