const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname,"../src/main.js"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: "/\.vue$/",
        loader: "vue-loader"
      },
      {
        test: "/\.js$/",
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: "/\.css$/",
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin("dist",{ root: path.resolve(__dirname,"../") })
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    },
    //配置扩展 可以省略后缀
    extensions: ["*", ".js", ".vue", ".json"]
  }
}