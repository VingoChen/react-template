const { merge } = require('webpack-merge');
const glob = require('glob');
const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const common = require('./webpack.common.js');
const { PROJECT_PATH } = require('../constant');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ['html', 'body'],
    }),
  ],
});
