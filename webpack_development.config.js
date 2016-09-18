var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,

  // the main entry point for our application's frontend js
  // anything not required by this file will never end up in the compiled bundle
  // passing an object provides multiple entries points
  entry: {
    webpackDev: 'webpack/hot/only-dev-server',
    // The entry point for the application js i.e. './app/frontend/javascripts/app.js'
    index: './app/frontend/javascripts/entries/entry.js'
  }
};

config.module = {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  }]
};

// this config dicates where compiled bundles end up
config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'app', 'assets', 'javascripts', 'bundle'),

  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name]-bundle.js',

  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: '/assets',
};

config.resolve = {
  extensions: ['', '.js', '.jsx'],
  modulesDirectories: ['node_modules'],
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];
