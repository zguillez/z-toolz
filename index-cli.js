#! /usr/local/bin/node
const ztools = require('./index');
const argv = require('minimist')(process.argv.slice(2));

if (argv.v || argv.version) {
  if (argv.major) {
    ztools.version('major');
  } else if (argv.minor) {
    ztools.version('minor');
  } else {
    ztools.version();
  }
}
