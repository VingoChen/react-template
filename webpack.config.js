const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // 入口文件
  devtool: 'cheap-module-eval-source-map', //不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader', //ts加载器
      },
      {
        test: /\.(css|scss)$/,
        loader: 'scss-loader!css-loader',
      }, //css加载器
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //此部分新增加
      template: './public/index.html', //需要自动注入的模板的文件名称
      inject: true, //是否自动注入生成后的文件
    }),
  ],
  devtool: '#eval-source-map',
};
