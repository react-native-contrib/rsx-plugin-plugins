const utils = require('rsx-common');
const log = utils.log;

module.exports = function install(plugin, callback) {
    utils.process.run(`rnpm install ${plugin}`)(() => {
        log.info(`Module ${plugin} has been successfully installed & linked`);

        if (callback) { callback(); }
    });
};
