#! /usr/local/bin/node
const argv = require('minimist')(process.argv.slice(2));

if (argv.v || argv.version) {
  require(`./bin/version-cli.js`);
}
