if (!process || !process.env || !process.env.PWD || !process.env.PWD.length) {
  process.exit(1);
}
const outputFolder = `${process.env.PWD}/dist`;

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', 'whatwg-fetch', './src/index.jsx'],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: outputFolder,
    sourceMapFilename: '[name].bundle.js.map',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new ProgressBarPlugin(), new CleanWebpackPlugin(outputFolder)],
};
