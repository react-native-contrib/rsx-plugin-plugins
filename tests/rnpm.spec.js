'use strict';

let utils = require('rsx-common');
let chai = require('chai');
let rewire = require('rewire');
let sinon = require('sinon');
let path = require('path');

let expect = chai.expect;
let log = utils.log;

log.level = 'silent';

describe('rnpm', () => {

    it('should run an RNPM command and execute a callback on completion', () => {
        let spy = sinon.spy();

        let commandMock = rewire('../src/rnpm');
        commandMock.__set__('utils', {
            process: {
                run: function run(command) { return (callback) => callback(command); },
            },
        });
        commandMock('install', 'react-native-plugin', spy);

        expect(spy.calledOnce).to.be.true;
    });

});
