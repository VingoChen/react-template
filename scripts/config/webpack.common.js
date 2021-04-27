const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { IS_DEV, PROJECT_PATH } = require('../constant');

const getCssLoaders = importLoaders => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: IS_DEV,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        indent: 'postcss',
        plugins: [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              grid: true,
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          require('postcss-normalize'),
        ],
      },
      sourceMap: IS_DEV,
    },
  },
];

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, 'src/index.tsx'),
  },
  output: {
    filename: `js/[name]${IS_DEV ? '' : '.[contenthash:8]'}.js`,
    path: path.resolve(PROJECT_PATH, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false,
      minify: IS_DEV
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
    new CleanWebpackPlugin(),
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
              sourceMap: IS_DEV,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};
