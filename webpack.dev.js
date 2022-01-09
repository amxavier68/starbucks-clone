const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",

  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Under Construction"),
    }),
  ],
};
