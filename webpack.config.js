var webpack = require('webpack');

module.exports = {
  entry: [
    // include clientside webpack dev server library
    // and webpack hot module reloader for HMR
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      // use hot loader in addition to babel for .js and .jsx files
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    // enable HMR
    hot: true
  },
  plugins: [
    // load HMR plugin
    new webpack.HotModuleReplacementPlugin()
  ]
};