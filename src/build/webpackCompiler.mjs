import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { rootFolder } from "./paths.mjs";

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].css",
});

const config = {
  context: path.resolve(rootFolder, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(rootFolder, './public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

export const productionCompiler = webpack({
  ...config,
  mode: 'production',
});

export const developmentCompiler = webpack({
  ...config,
  mode: 'development',
});
