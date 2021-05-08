const { HotModuleReplacementPlugin } = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const common = require('./webpack.common.js');
const paths = require('../paths');
const { SERVER_HOST, SERVER_PORT } = require('../conf');

const getCssLoaders = (importLoaders) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: true,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [require('postcss-flexbugs-fixes')].filter(Boolean),
      },
    },
  },
];

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
    historyApiFallback: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new WebpackBar({
      name: 'RUNNING',
      color: '#52c41a',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: getCssLoaders(1),
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
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
