const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SizePlugin = require('size-plugin');

const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  output: {
    publicPath: '/',
    filename: 'static/js/[name].[contenthash:6].js',
    chunkFilename: 'static/js/[name].[contenthash:6].js',
  },
  stats: 'errors-only',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedChunksPlugin(
      chunk => chunk.name || Array.from(chunk.modulesIterable, m => m.id).join("_")
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:6].css',
      chunkFilename: 'static/css/[name].[contenthash:6].css',
    }),
    // new BundleAnalyzerPlugin(),
    new SizePlugin(),
  ],
});
