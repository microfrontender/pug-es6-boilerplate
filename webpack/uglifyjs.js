const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(){
  return {
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  }
}
};