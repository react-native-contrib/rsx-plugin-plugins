'use strict';

let utils = require('rsx-common');
let rnpm = require('./rnpm');

let log = utils.log;

module.exports = function remove(args, callback) {
    log.heading = 'rsx-plugins rm';
    let plugin = args;

    rnpm('uninstall', plugin, callback);
};
