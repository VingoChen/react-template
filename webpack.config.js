module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    // 输出目录
    path: path.join(__dirname, 'dist'),
    // 文件名称
    filename: 'bundle.js',
  },
  module: {},
  plugins: [],
  devServer: {},
};
