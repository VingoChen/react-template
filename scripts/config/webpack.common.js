const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('../paths');
const { IMAGE_INLINE_SIZE_LIMIT } = require('../conf');

module.exports = {
  entry: {
    app: paths.appIndex,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      cache: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          context: paths.appPublic,
          from: '*',
          to: paths.appBuild,
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.appTsConfig,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: IMAGE_INLINE_SIZE_LIMIT,
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Src: paths.appSrc,
      Components: paths.appSrcComponents,
      Utils: paths.appSrcUtils,
    },
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};
