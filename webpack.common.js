// Core Modules
const path = require("path");

// App Modules
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "none",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    clean: true,
  },

  plugins: [
    new EslintWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      linkType: 'text/css',
      runtime: false,
      experimentalUseImportModule: true,
      chunkFilename: "css/[id].css",
      ignoreOrder: false,
    }),
    new CompressionPlugin({
      compressionOptions: { level: 3 },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset/inline",
      },
    ],
  },

  optimization: {
    chunkIds: 'named',
    concatenateModules: true,
    emitOnErrors: true,
    flagIncludedChunks: true,
    mergeDuplicateChunks: false,
    minimize: false,
    nodeEnv: 'production',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
