"use strict";

const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");

const webpackConfig = merge(baseWebpackConfig, {
  /* additional environment configurations here */
});

module.exports = webpackConfig;
