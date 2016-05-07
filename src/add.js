const utils = require('rsx-common');
const log = utils.log;

const install = (plugin) => {
    utils.makeCommand(`rnpm install ${plugin}`, () => {
        log.info(`Module ${plugin} has been successfully installed & linked`);
    });
};

module.exports = function add(args, callback) {
    log.heading = 'rsx-plugins add';
    const plugin = args;

    install(plugin);
    callback();
};
