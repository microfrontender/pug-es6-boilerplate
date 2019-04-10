const path = require('path');
module.exports = function() {
  return {
      module: {
          rules: [
              {
                  test: /\.php$/,
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                  },
                }
          ],
      },
  };
};