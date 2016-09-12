var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  entry: {
    index: './app/frontend/javascripts/applications/main_application.js'
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
  path: path.join(__dirname, 'public', 'assets'),
  filename: '[name].bundle.js',
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
