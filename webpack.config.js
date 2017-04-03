const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.resolve(__dirname, './src'),
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
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          loader: [{
            loader: "css-loader",
            options: { url: false }
          }, {
            loader: "sass-loader"
          }],
          fallbackLoader: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
