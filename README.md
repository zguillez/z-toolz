# z-toolz

[![npm version](https://badge.fury.io/js/z-toolz.svg)](https://badge.fury.io/js/z-toolz)
[![Build Status](https://travis-ci.org/zguillez/z-toolz.svg?branch=master)](https://travis-ci.org/zguillez/z-toolz)
[![Installs](https://img.shields.io/npm/dt/z-toolz.svg)](https://coveralls.io/r/zguillez/z-toolz)
[![Gitter](https://badges.gitter.im/zguillez/z-toolz.svg)](https://gitter.im/zguillez/z-toolz?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

## Tools for NodeJS development

# Getting Started
## Install
```
npm i z-toolz --save-dev
yarn add z-toolz --dev
```

# Usage
```
const ztoolz = require('z-toolz');
```

# CLI Usage
```
"scripts": {
    "test": "ztoolz"
  }
```

## Update package version
```
ztoolz.version();
ztoolz.version('minor');
ztoolz.version('major');
```
```
ztoolz --version
ztoolz --version --minor
ztoolz --version --major
```

# Contributing and issues
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License
©2018 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (January 26, 2018)
* Initial commit
