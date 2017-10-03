var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, '../server/public/assets/js');
var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src'); 

var config = {
  entry: [
    SRC_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    publicPath: "build",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: { presets:['es2015','react'] } 
      },
      { 
        test: /\.scss/, 
        exclude: /node_modules/, 
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      }
    ],
  },
  watch: true
};

module.exports = config;