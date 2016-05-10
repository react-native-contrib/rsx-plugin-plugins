const utils = require('rsx-common');
const log = utils.log;

module.exports = function(plugin, callback) {
    utils.process.run(`rnpm uninstall ${plugin}`)(() => {
        log.info(`Module ${plugin} has been successfully uninstalled & unlinked`);

        if (callback) { callback(); }
    });
};
