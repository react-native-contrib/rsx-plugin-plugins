const utils = require('rsx-common');
const path = require('path');
const addPlugin = require('./addPlugin');
const removePlugin = require('./removePlugin');
const listPlugins = require('./listPlugins');
const log = utils.log;

log.heading = 'rsx-plugins';

const appRoot = process.env['RN_PROJECT_ROOT'];

const actions = [
  'add',
  'rm',
  'ls',
];

module.exports = function plugins(args, callback) {

  const action     = args[0];
  const pluginName = args[1];

  if (actions.indexOf(action) !== -1) {

    switch(action) {
      case 'add':
        addPlugin(pluginName);
        break;
      case 'rm':
        removePlugin(pluginName);
        break;
      case 'ls':
      default:
        listPlugins();
        break;
    }

    return;

  }

  log.error(action + ' is not a valid action for this command');

};
