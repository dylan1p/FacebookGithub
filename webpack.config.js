const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules&camelCase",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
