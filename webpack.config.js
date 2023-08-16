var path = require("path");
const webpack = require('webpack');
var path = require("path");

const dotenv = require('dotenv').config();



module.exports = {
  entry: './client/src/app.jsx',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },

};