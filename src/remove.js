'use strict';

const utils = require('rsx-common');
let rnpm = require('./rnpm');

const log = utils.log;

module.exports = function remove(args, callback) {
    log.heading = 'rsx-plugins rm';
    const plugin = args;

    rnpm('uninstall', plugin, callback);
};
