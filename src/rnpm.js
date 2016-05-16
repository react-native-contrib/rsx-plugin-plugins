'use strict';

let utils = require('rsx-common');

let log = utils.log;

module.exports = function install(command, plugin, callback) {
    utils.process.run(`rnpm ${command} ${plugin}`)(() => {
        log.info(`Module ${plugin} has been successfully installed & linked`);

        if (callback) { callback(); }
    });
};
