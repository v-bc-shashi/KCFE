const webpack = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },

  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    Headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugin: [new Ht()],
};
