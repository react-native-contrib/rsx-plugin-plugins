const utils = require('rsx-common');
const log = utils.log;

const uninstall = (plugin) => {
    utils.process.run(`rnpm uninstall ${plugin}`)(() => {
        log.info(`Module ${plugin} has been successfully uninstalled & unlinked`);
    });
};

module.exports = function remove(args, callback) {
    log.heading = 'rsx-plugins rm';
    const plugin = args;

    uninstall(plugin);
    callback();
};
