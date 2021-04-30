const { HotModuleReplacementPlugin } = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('../paths');
const { SERVER_HOST, SERVER_PORT } = require('../conf');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
    noInfo: true,
  },
  plugins: [new HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild,
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
});
