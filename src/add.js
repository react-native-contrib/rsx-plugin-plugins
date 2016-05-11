const utils = require('rsx-common');
const rnpm = require('./rnpm');

const log = utils.log;

module.exports = function add(args, callback) {
    log.heading = 'rsx-plugins add';
    const plugin = args;

    rnpm('install', plugin, callback);
};
