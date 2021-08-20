#! /usr/local/bin/node
const ztoolz = require('./index');
const argv = require('minimist')(process.argv.slice(2));
if (argv.v || argv.version) {
  if (argv.major) {
    ztoolz.version('major');
  } else if (argv.minor) {
    ztoolz.version('minor');
  } else {
    ztoolz.version();
  }
}
