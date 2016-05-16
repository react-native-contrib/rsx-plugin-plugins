'use strict';

let utils = require('rsx-common');
let rnpm = require('./rnpm');

let log = utils.log;

module.exports = function add(args, callback) {
    log.heading = 'rsx-plugins add';
    const plugin = args;

    rnpm('install', plugin, callback);
};
