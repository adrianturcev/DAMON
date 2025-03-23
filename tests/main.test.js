const assert = require('assert');
const Damon = require('../Damon.js');

describe('# DAMON', function () {
    const damon = new Damon();
    var list =
        `- {}
            - key0: null
            - k\\ney1: []
                - []
                    - {}
                    - [1, 1, 1]
                    - "abc"
            - 1: {}
                - key: 1
                - othe: \\"rKey: ": \\"1e10"
            - More_complex_case: {}
                - key: ["1e10", "abc"]
            - list: []
                - {}
                - {}`.replaceAll('\n' + '    '.repeat(2), '\n');

    describe('## SERIALIZATION/DESERIALIZATION', function () {
        it('Performs isomorphic transformation between Damon string and JavaScript map.', function () {
            assert.equal(list, damon.mapToDamon(damon.damonToMap(list), true));
        });
    });

    describe('## CONVERSION', function () {
        it('Performs isomorphic transformation between Damon string and JSON string.', function () {
            assert.equal(list, damon.jsonToDamon(damon.damonToJSON(list)));
        });
    });

    describe('## TEMPLATING', function () {
        it('Performs isomorphic transformation between Damon template string and Javascript map.', function () {
            let a = "1e10",
                rawString =
                    `- {}
                        - k\\ney0: null
                        - key1: []
                            - []
                                - {}
                        - 1: {}
                            - key: 1
                            - otherKey: "1e10"
                        - More_complex_case: {}
                            - key: ["1e10", "abc"]`.replaceAll('\n' + '    '.repeat(5), '\n');
            assert.equal(
                rawString,
                damon.mapToDamon(
                    damon.template
                        `- {}
                            - k\ney0: null
                            - key1: []
                                - []
                                    - {}
                            - 1: {}
                                - key: 1
                                - otherKey: ${a}
                            - More_complex_case: {}
                                - key: ["1e10", "abc"]`
                )
            );
        });
    });

    describe('## RANGE', function () {
        it('Gets selection range from array path.', function () {
            assert.equal(
                JSON.stringify(damon.getRangeFromPath(list, ["key0"])),
                JSON.stringify([[1, 12], [1, 16]])
            );
        });
        it('Gets selection token from text coordinates.', function () {
            assert.equal(
                JSON.stringify(damon.getTokenFromCoordinates(list, [2, 6]).path),
                JSON.stringify(['key0'])
            );
        });
    });
});
