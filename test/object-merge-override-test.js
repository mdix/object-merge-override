var expect         = require('expect.js'),
    merge_override = require('./../object-merge-override.js');

describe('merge override', function() {
    'use strict';

    var config1 = {
            'showOnlyFailed': false,
            'directory': '/someDir/',
            'fooConfig': 123,
            'stopOnError': true
        },
        config2 = {
            'showOnlyFailed': true
        },
        config3 = {
            'directory': '/someOtherDir/',
            'stopOnError': false
        },
        mergedObjects;

    describe('merge override', function() {
        it('should throw if no object given on instanciation', function() {
            expect(function() {new merge_override();}).to.throwException('Need object with objects to merge!');
        });
        it('should return an object', function() {
            mergedObjects = new merge_override({});
            expect(typeof mergedObjects).to.be('object');
        });
        it('should merge objects by their priority (keys) (test1)', function() {
            mergedObjects = new merge_override(
                {3: config3, 6: config2, 9: config1}); // 3: high, 6: med, 9: low

            expect(mergedObjects.showOnlyFailed).to.be(true); // by config2
            expect(mergedObjects.directory).to.be('/someOtherDir/'); // by config3
            expect(mergedObjects.stopOnError).to.be(false); // by config3
            expect(mergedObjects.fooConfig).to.be(123); // by config1
        });
        it('should merge objects by their priority (keys) (test2)', function() {
            mergedObjects = new merge_override(
                {9: config3, 6: config2, 3: config1}); // 3: high, 6: med, 9: low

            expect(mergedObjects.showOnlyFailed).to.be(false); // by config1
            expect(mergedObjects.directory).to.be('/someDir/'); // by config1
            expect(mergedObjects.stopOnError).to.be(true); // by config1
            expect(mergedObjects.fooConfig).to.be(123); // by config1
        });
        it('should merge objects by their priority (keys) (test3)', function() {
            mergedObjects = new merge_override(
                {6: config3, 3: config2, 9: config1}); // 3: high, 6: med, 9: low

            expect(mergedObjects.showOnlyFailed).to.be(true); // by config1
            expect(mergedObjects.directory).to.be('/someOtherDir/'); // by config3
            expect(mergedObjects.stopOnError).to.be(false); // by config3
            expect(mergedObjects.fooConfig).to.be(123); // by config1
        });
    });

});
