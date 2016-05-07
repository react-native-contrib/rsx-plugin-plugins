const utils = require('rsx-common');
const log = utils.log;

const actions = {
    'add': require('./add'),
    'rm': require('./list'),
    'ls': require('./list'),
};

module.exports = function plugins(args, callback) {

    log.heading   = 'rsx-plugins';
    const appRoot = process.env.RN_PROJECT_ROOT;
    const action  = args[0];
    const plugin  = args[1];

    if (Object.keys(actions).indexOf(action) !== -1) {
        actions[action](plugin);
        return;
    }

    log.error(action + ' is not a valid action for this command');

};
