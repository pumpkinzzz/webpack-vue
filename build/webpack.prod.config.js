"use strict";

const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production"
  /* additional environment configurations here */
});

module.exports = webpackConfig;
