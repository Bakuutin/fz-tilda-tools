const path = require('path');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/core.js',
  output: {
    filename: 'bundle.js',
    path: dist,
  },
  mode: 'production',
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000,
    index: 'index.html',
  },
};
