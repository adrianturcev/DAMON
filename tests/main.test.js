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
    // TODO
    // # Utils tests
    // console.log(damon.utils.mapToHtmlList(damon.damonToMap(list)));

    var tableTest =
    `- {}
        - 00: "Caption"
        - 0: {}
            - heading1
            - heading2
            - heading3
        - 1: {}
            - A
            - B
            - C
        - 2: {}
            - A
            - B
            - C`;
    // console.log(damon.utils.mapToHtmlTable(damon.damonToMap(tableTest)));

    // console.log(damon.htmlToJSON(damon.damonToHtmlList(list)) == damon.damonToJSON(list));
    // let json = damon.htmlToJSON(document.body.firstElementChild);
    //var a = damon.jsonToHtmlList(json);
    //document.body.appendChild(a);
    //compareDivs(document.body.firstElementChild, a);
    function compareDivs(listA, listB) {
        if (listA.children.length == listB.children.length) {
            for (i = 0, c = listA.children.length; i < c; i++) {
                if (
                    listA.children[i].firstElementChild.tagName == "DIV"
                    && listB.children[i].firstElementChild.tagName == "DIV"
                    && listA.children[i].firstElementChild.textContent == listB.children[i].firstElementChild.textContent
                ) {
                    console.log('true');
                    if (
                        listA.children[i].children[1] == "UL"
                        && listA.children[i].children[1].tagName == "UL"
                        && listB.children[i].children[1]
                        && listB.children[i].children[1].tagName == "UL"
                    ) {
                        compareDivs(listA.children[i].children[1], listB.children[i].children[1]);
                    }
                }
            }
        } else {
            console.log("You failed.");
        }
    }

    var leavesToTableTest =
    `- {}
        - caption: "Caption"
        - head: {}
            - heading1: {}
                - heading2: []
                    - heading3
        - body: {}
            - cell1: {}
                - cell2: []
                    - cell3 (line1)
                    - cell3 (line2)
                    - cell3 (line3)
            - cell3: {}
                - cell2: []
                    - cell3 (line4)
                    - cell3 (line5)
                    - cell3 (line6)`;

    // console.log(damon.utils.mapTreeLeavesToHtmlTable(damon.damonToMap(leavesToTableTest), true));

});
