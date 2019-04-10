const path = require('path');
module.exports = function() {
  return {
      module: {
          rules: [
              {
                  test: /\.(eot|ttf|woff)$/,
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[ext]',
                  },
                }
          ],
      },
  };
};