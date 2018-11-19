/* eslint no-unused-vars: "off", no-restricted-modules: "off", require-jsdoc: "off" */
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const replace = require('replace');
const argv = require('minimist')(process.argv.slice(2));
const config = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf8'));

class ZVersion {
  run(argv) {
    const version = config.version.split('.');
    if (argv === 'major') {
      version[0] = Number(version[0]) + 1;
      version[1] = 0;
      version[2] = 0;
    } else if (argv === 'minor') {
      version[1] = Number(version[1]) + 1;
      version[2] = 0;
    } else {
      version[2] = Number(version[2]) + 1;
    }
    replace({
      regex: `"version": "${config.version}"`,
      replacement: `"version": "${version.join('.')}"`,
      paths: ['package.json'],
      silent: true,
    });
    console.log(`=> Package update to version`.green, `${version.join('.')}`.yellow);
  }
}

module.exports = new ZVersion();
