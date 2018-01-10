var path = require('path');

module.exports = () => ({
  plugins: {
    'postcss-import': {
      path: [ path.resolve(__dirname + '/src') ]
    },
    autoprefixer: {
      browsers: ['> 5%']
    }
  }
});
