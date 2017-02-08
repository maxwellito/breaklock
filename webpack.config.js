const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './scripts'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }
    ]
  }
};
