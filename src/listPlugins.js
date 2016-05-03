const utils = require('rsx-common');
const log = utils.log;

module.exports = function listPlugins(args, callback) {
    const appRoot = process.env['RN_PROJECT_ROOT'];
    log.heading = 'rsx-plugins ls';

    const pjson = utils.getProjectPackageJson(appRoot);
    const deps = Object.keys(pjson.dependencies || {});
    const plugins = deps.filter(utils.isPlugin);

    plugins.forEach((plugin) => log.info(plugin));
}
