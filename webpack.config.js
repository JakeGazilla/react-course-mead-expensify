// entry point - starting file of your app, in this case ./src/app.js
// output - absolute path on your machine of where to put bundle.js

const path = require('path');

// path to current location
// RUN node webpack.config.js to see the path
// console.log(__dirname); 

// join the paths, absolute path and local path
// RUN node webpack.config.js to see the path
// console.log(path.join(__dirname, 'public'));

// use the path in the module.exports output

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

// loader






