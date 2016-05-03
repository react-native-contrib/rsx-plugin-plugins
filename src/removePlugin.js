const utils = require('rsx-common');
const spawnSync = require('child_process').spawnSync;
const log = utils.log;
const spawnOpts = {
  stdio: 'inherit',
  stdin: 'inherit',
};

module.exports = function removePlugin(args, callback) {
    log.heading = 'rsx-plugins rm';
    const name = args;

    var res = spawnSync('rnpm', ['uninstall', name], spawnOpts);

    if (res.status) {
        process.exit(res.status);
    }

    log.info(`Module ${name} has been successfully uninstalled & unlinked`);
};
