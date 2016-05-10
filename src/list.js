const utils = require('rsx-common');
const log = utils.log;

const filterDependencies = (pkg) => {
    const deps = Object.keys(pkg.dependencies || {});
    return deps.filter(utils.validate.isPlugin);
};

module.exports = function list(args, callback) {
    const appRoot = process.env.RN_PROJECT_ROOT;
    log.heading = 'rsx-plugins ls';

    const plugins = filterDependencies(utils.project.getPackageJson(appRoot));
    plugins.forEach((plugin) => log.info(plugin));

    if (callback) { callback(plugins); }
};
