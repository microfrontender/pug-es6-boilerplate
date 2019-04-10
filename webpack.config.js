const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const babel = require('./webpack/babel');
const sass = require('./webpack/sass');
const uglifyjs = require('./webpack/uglifyjs');
const images = require('./webpack/images');
const php = require('./webpack/php');
const fonts = require('./webpack/fonts');


const PATHS = {
  source: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
};


const common = merge([
  {
    entry: {
      main: PATHS.source + '/js/index.js'
    },
    output: {
      path: PATHS.build ,
      filename: 'js/[name].js'
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.source + '/pug/index.pug',
        filename: 'index.html'
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../src')
      }
    },
  },
  
  pug(),
  babel(),
  sass(),
  images(),
  php(),
  fonts()
]);

module.exports = function(env) {
  if (env === 'production'){
      return merge([
          common,
          uglifyjs()
      ]);
  }
  if (env === 'development'){
      return merge([
          common,
          devserver()
      ])
  }
};