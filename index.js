const debounce = require('lodash.debounce');
const chokidar = require('chokidar');

chokidar.watch('.')
  .on('add', () =>  console.log('starting users program'))
  .on('change', () =>  console.log('file changed'))
  .on('unlink', () =>  console.log('file unlinked'));