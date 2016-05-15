'use strict';

const utils = require('rsx-common');
const chai = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const path = require('path');

const expect = chai.expect;
const log = utils.log;

log.level = 'silent';

describe('plugins', () => {

    it('should throw an error if an invalid action is specified', () => {
        const spy = sinon.spy();
        const command = require('../src/plugins');
        command(['pppppp'], spy);
        expect(spy.calledWith('pppppp is not a valid action for this command'));
    });

    it('should execute the subcommand if a valid action is specified', () => {
        const spy = sinon.spy();
        const command = require('../src/plugins');
        command(['ls'], spy);

        expect(spy.calledOnce).to.deep.equals(true);
    });

    describe('ls', () => {

        it('should show a list of installed plugins', () => {
            process.env.RN_PROJECT_ROOT = path.join(__dirname, 'fixtures');
            var result;
            const command = require('../src/list');
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

            const spy = sinon.spy();
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

            const spy = sinon.spy();
            commandMock(['react-native-video'], spy);

            expect(spy.calledOnce).to.equals(true);
        });

    });

});
