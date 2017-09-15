const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: './iris/src/main/webapp/Scripts/iris.top.js',
  output: {
    path: path.resolve(__dirname, 'iris', 'src', 'main', 'webapp', 'Scripts'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: path.resolve(__dirname, 'iris', 'src', 'main', 'webapp', 'Scripts', 'test')
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}