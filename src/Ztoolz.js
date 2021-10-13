'use strict';
const path = require('path');
const zversion = require('@zguillez/z-version');
const zfile = require('@zguillez/z-file');
const zssh = require('@zguillez/z-ssh');

// const zdatabase = require('../bin/database');

/**
 * Class Ztoolz
 */
class Ztoolz {
  /**
   * Constructor
   */
  constructor() {
    /**
     * Ruta del archivo de configuración ssh
     */
    zssh.config = path.resolve(__dirname, './ssh.json');
  }

  /**
   * Ruta del fichero de configuración
   * @param {string} file - Ruta del fichero de configuración
   */
  set config(file) {
    zssh.config = path.resolve(__dirname, file);
  }

  /**
   * Ruta del fichero de configuración
   * @return {string} config - Ruta del fichero de configuración
   */
  get config() {
    return zssh.config;
  }

  /**
   * Devuelve true al realizarse la connexión SSH
   * @return {Promise}
   */
  connect() {
    return zssh.connect();
  }

  /**
   * Cierra la conexión SSH
   */
  close() {
    zssh.close();
  }

  /**
   * Ejecuta un commando en el servidor
   * @param command
   * @return {Promise}
   */
  exec(command) {
    return zssh.exec(command);
  }

  /**
   * Ejecuta un commando de consola
   * @param command
   * @return {Promise}
   */
  shell(command) {
    return zssh.shell(command);
  }

  /**
   * Descarga el directorio remoto en el directorio local
   * @return {Promise}
   */
  download() {
    return zssh.download();
  }

  /**
   * Sube al directorio remoto el directorio local
   * @return {Promise}
   */
  upload() {
    return zssh.upload();
  }

  /**
   * Comprueba si existe el fichero de configuración
   * @return {Promise}
   */
  checkConfig() {
    return zfile.file(this.config);
  }

  /**
   * version module
   */
  version(argv) {
    zversion.update(argv);
  }

  /**
   * database module
   */
  // database(argv, isArray = false) {
  //   if (isArray) {
  //     return zdatabase.queries(argv);
  //   } else {
  //     return zdatabase.query(argv);
  //   }
  // }
}

/**
 *
 * @type {Ztoolz}
 */
module.exports = new Ztoolz();
