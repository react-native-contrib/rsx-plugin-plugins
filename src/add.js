const utils = require('rsx-common');
const log = utils.log;
const install = require('./rnpm-install');

module.exports = function add(args, callback) {
    log.heading = 'rsx-plugins add';
    const plugin = args;

    install(plugin, callback);
};
