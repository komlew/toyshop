const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const LicenseRegexp = /@preserve|@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\bBSD\b|\bISCL\b|\(c\)|License|Copyright/im;

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        properties: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        loops: true,
        unused: true,
        toplevel: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        collapse_vars: true,
        reduce_vars: true,
        warnings: false,
        drop_console: true,
      },
      extractComments: {
        condition: LicenseRegexp,
        filename: file => `${file}.LICENSE.txt`,
      },
      comments: false,
      sourceMap: true,
      parallel: true,
    }),
  ],
});
