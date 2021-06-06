const path = require('path');

const main = {
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../temp/'),
  dist: path.resolve(__dirname, '../dist/')
};

module.exports = {
  main
};
