# z-tools

[![npm version](https://badge.fury.io/js/z-tools.svg)](https://badge.fury.io/js/z-tools)
[![Build Status](https://travis-ci.org/zguillez/z-tools.svg?branch=master)](https://travis-ci.org/zguillez/z-tools)
[![Installs](https://img.shields.io/npm/dt/z-tools.svg)](https://coveralls.io/r/zguillez/z-tools)
[![Gitter](https://badges.gitter.im/zguillez/z-tools.svg)](https://gitter.im/zguillez/z-tools?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

## NodeJS tools foe web development

# Getting Started
## Install
```
npm i z-tools --save-dev
yarn add z-tools --dev
```

# Usage
```
const ztools = require('z-tools');
```

# CLI Usage
```
"scripts": {
    "test": "ztools"
  }
```

## Update package version
```
ztools.version();
ztools.version('minor');
ztools.version('major');
```
```
ztools --version
ztools --version --minor
ztools --version --major
```

# Contributing and issues
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License
©2018 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog

### v0.1.0 (January 26, 2018)
* Initial commit
