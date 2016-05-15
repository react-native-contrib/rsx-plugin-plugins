'use strict';

const utils = require('rsx-common');
const log = utils.log;

const actions = {
    'add': require('./add'),
    'rm': require('./remove'),
    'ls': require('./list'),
};

module.exports = function plugins(args, callback) {
    log.heading  = 'rsx-plugins';
    const action = args[0];
    const plugin = args[1];

    if (Object.keys(actions).indexOf(action) === -1) {

        try {
            throw Error(`${action} is not a valid action for this command`);
        } catch(e) {
            log.error(e.message);
        }

        return;
    }

    actions[action](plugin, callback);
};
