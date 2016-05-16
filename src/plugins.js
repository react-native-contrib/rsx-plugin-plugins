'use strict';

let utils = require('rsx-common');

let _   = utils._;
let log = utils.log;

const actions = {
    'add': require('./add'),
    'rm': require('./remove'),
    'ls': require('./list'),
};

module.exports = function plugins(args, callback) {
    log.heading  = 'rsx-plugins';
    let action = args[0];
    let plugin = args[1];

    if (!_.includes(_.keys(actions), action)) {

        try {
            throw Error(`${action} is not a valid action for this command`);
        } catch(e) {
            log.error(e.message);
        }

        return;
    }

    actions[action](plugin, callback);
};
