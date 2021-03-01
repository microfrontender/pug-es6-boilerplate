const path = require('path');
module.exports = function() {
  return {
      module: {
          rules: [
              {
                  test: /\.(pdf)$/,
                  loader: 'file-loader',
                  options: {
                    name: 'doc/[name].[ext]',
                  },
                }
          ],
      },
  };
};