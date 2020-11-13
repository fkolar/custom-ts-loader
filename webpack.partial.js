const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: path.resolve('loader/oss-loader.js')

          }
        ]
      }
    ]
  }
};

