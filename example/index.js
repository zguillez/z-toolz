const ztoolz = require('../src/Ztoolz');
ztoolz.version();
console.log(ztoolz.checkConfig());
console.log(ztoolz.config);
ztoolz.config = '.zconfig';
console.log(ztoolz.checkConfig());
console.log(ztoolz.config);

// ztoolz.version('minor');
// ztoolz.version('major');
/* ztoolz.database('SELECT * FROM web_registro', false).then(() => {
  console.log(`done!`.magenta);
  ztoolz.database(['SELECT * FROM web_registro', 'SELECT * FROM web_registro'], true).then(() => {
    console.log(`done!`.magenta);
  });
});*/
