require("babel-register")({ ignore: /node_modules\/(?!koa-bodyparser)/ });
require("babel-polyfill");

module.exports = require('./src/app');
