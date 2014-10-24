var sort = require('sort-object');

var ObjectMergeOverride = function(objects) {
    "use strict";

    var output = {},
        objectsSorted;

    return (function run() {
        if (typeof objects !== 'object') {
            throw new Error('Need object with objects to merge!');
        }
        objectsSorted = sort(objects);
        return mergeConfig();
    }());

    function mergeConfig() {
        /* objectsSorted looks like:
            {1: {prop: value, prop2, value2}
            {2: {prop: value, prop2, value2}
            {3: {prop: value, prop2, value2}}
         */
        for (var key in objectsSorted) {
            if (!objectsSorted.hasOwnProperty(key)) {
                continue;
            }
            var currentObject = objectsSorted[key];
            for (var property in currentObject) {
                if (!currentObject.hasOwnProperty(property)) {
                    continue;
                }
                setPropertyInOutputObject(property, currentObject);
            }
        }
        return output;
    }

    function setPropertyInOutputObject(property, currentObject) {
        if (hasFalsyValue(output[property])) {
            output[property] = currentObject[property];
        }
    }

    function hasFalsyValue(property) {
        return (property === undefined || property === null);
    }
};

module.exports = ObjectMergeOverride;
