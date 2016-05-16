'use strict';

let utils = require('rsx-common');
let chai = require('chai');
let rewire = require('rewire');
let sinon = require('sinon');
let path = require('path');

let expect = chai.expect;
let log = utils.log;

log.level = 'silent';

describe('plugins', () => {

    describe('main', () => {

        it('should throw an error if an invalid action is specified', () => {
            let spy = sinon.spy();
            let command = require('../src/plugins');
            command(['pppppp'], spy);
            expect(spy.calledWith('pppppp is not a valid action for this command'));
        });

        it('should execute the subcommand if a valid action is specified', () => {
            let spy = sinon.spy();
            let command = require('../src/plugins');
            command(['ls'], spy);

            expect(spy.calledOnce).to.deep.equals(true);
        });

    });

    describe('ls', () => {

        it('should show a list of installed plugins', () => {
            process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');
            let result;
            let command = require('../src/list');
            command({}, (plugins) => {
                result = plugins;
            });

            expect(result).to.deep.equals([
                'react-native-vector-icons',
                'react-native-video',
                'react-native-youtube',
            ]);
        });

    });

    describe('add', () => {

        it('should add a React Native plugin', () => {
            process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');

            let commandMock = rewire('../src/add');
            commandMock.__set__('rnpm', function rnpm(command, plugin, callback) {
                callback(plugin);
            });

            let spy = sinon.spy();
            commandMock(['react-native-video'], spy);

            expect(spy.calledOnce).to.equals(true);
        });
    });

    describe('rm', () => {

        it('should remove a React Native plugin', () => {
            process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');

            let commandMock = rewire('../src/remove');
            commandMock.__set__('rnpm', function rnpm(command, plugin, callback) {
                callback(plugin);
            });

            let spy = sinon.spy();
            commandMock(['react-native-video'], spy);

            expect(spy.calledOnce).to.equals(true);
        });

    });

});
