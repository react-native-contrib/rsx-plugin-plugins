const utils = require('rsx-common');
const spawnSync = require('child_process').spawnSync;
const log = utils.log;
const spawnOpts = {
  stdio: 'inherit',
  stdin: 'inherit',
};

module.exports = function addPlugin(args, callback) {
    log.heading = 'rsx-plugins add';
    const name = args;

    var res = spawnSync('rnpm', ['install', name], spawnOpts);

    if (res.status) {
        process.exit(res.status);
    }

    log.info(`Module ${name} has been successfully installed & linked`);
};
