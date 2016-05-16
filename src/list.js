'use strict';

let utils = require('rsx-common');

let log = utils.log;

const filterDependencies = (pkg) => {
    const deps = Object.keys(pkg.dependencies || {});
    return deps.filter(utils.validate.isPlugin);
};

module.exports = function list(args, callback) {
    log.heading = 'rsx-plugins ls';
    let appRoot = process.env.RN_PROJECT_ROOT;

    let plugins = filterDependencies(utils.project.getPackageJson(appRoot));
    plugins.forEach((plugin) => log.info(plugin));

    if (callback) { callback(plugins); }
};
