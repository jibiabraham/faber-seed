var path = require('path');

var config = {
  context: __dirname,
  entry: ['webpack/hot/dev-server', './app/main.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]
  }
};

module.exports = config;
