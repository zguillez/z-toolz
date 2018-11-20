/* eslint no-unused-vars: "off", no-restricted-modules: "off", require-jsdoc: "off" */
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const file = require('z-file');
const config = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf8'));

const version = (argv) => {
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
  file.replace('./package.json', `"version": "${config.version}"`, `"version": "${version.join('.')}"`);
  console.log(`=> Package update to version`.green, `${version.join('.')}`.yellow);
};

module.exports.version = version;
