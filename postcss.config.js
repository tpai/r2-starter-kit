const path = require('path');

module.exports = () => ({
  plugins: {
    autoprefixer: {
      browsers: ['> 1%'],
    },
    'postcss-import': {
      path: [path.resolve(__dirname, 'src')],
    },
  },
});
