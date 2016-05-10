const utils = require('rsx-common');
const log = utils.log;
const uninstall = require('./rnpm-uninstall');

module.exports = function remove(args, callback) {
    log.heading = 'rsx-plugins rm';
    const plugin = args;

    uninstall(plugin, callback);
};
