const utils = require('rsx-common');
const chai = require('chai');
const mock = require('mock-require');
const sinon = require('sinon');
const path = require('path');

const expect = chai.expect;
const log = utils.log;

log.level = 'silent';

describe('plugins', () => {

    it('should throw an error if an invalid action is specified');
    // it('should throw an error if an invalid action is specified', () => {
    //     const spy = sinon.spy();
    //     const command = require('../src/plugins');
    //     command(['pppppp'], spy);
    //     expect(spy.calledWith('pppppp is not a valid action for this command'));
    // });

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
            mock('rsx-common', {
                log: log,
                process: {
                    run: () => { return (callback) => { callback(arguments); }; },
                },
            });

            const command = require('../src/add');
            const spy = sinon.spy();
            command(['react-native-video'], spy);

            expect(spy.calledOnce).to.equals(true);
            mock.stop('rsx-common');
        });
    });

    describe('rm', () => {

        it('should remove a React Native plugin', () => {
            mock('rsx-common', {
                log: log,
                process: {
                    run: () => { return (callback) => { callback(arguments); }; },
                },
            });

            const command = require('../src/remove');
            const spy = sinon.spy();
            command(['react-native-video'], spy);

            expect(spy.calledOnce).to.equals(true);
            mock.stop('rsx-common');
        });

    });

});
