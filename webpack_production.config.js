var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  entry: {
    index: './app/frontend/javascripts/applications/todo.js'
  }
};

config.module = {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  }]
};

config.output = {
  filename: './[name].bundle.js',
  publicPath: '/assets/webpack/'
};

config.resolve = {
  extensions: ['', '.js', '.jsx'],
  modulesDirectories: ['node_modules'],
};

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];
