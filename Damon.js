// Copyright © 2024 Adrian Turcev
import {parse} from 'json-in-order';
const DamonUtils = require('./Utils.js');

//# Damon
module.exports =
class Damon {
    /**
     *Creates an instance of Damon.
     * @param {Boolean} pedantic
     */
    constructor(pedantic = false) {
        let $ = this;
        this.indentation = 4;
        if ([true, false, undefined].indexOf(pedantic) == -1) {
            throw new Error("@param {Boolean} pedantic");
        }
        this.pedantic = pedantic;
        this.damonOriginalLinesMapping = [];
        this.utils = new DamonUtils(this);
    }
    /**
     * Object-like ordered dictionaries declarations in js
     * @param {string} strings
     * @returns
     */
    template(strings) {
        let $ = this;
        var result = strings[0];
        for (let i = 1; i < strings.length; i++) {
            if (typeof arguments[i] == 'string') {
                result += '\"' + arguments[i] + '\"';
            } else {
                result += arguments[i];
            }
            result += strings[i];
        }
        let map = $._treeToMap($._damonToTree(result));
        return map;
    }

    /**
     * @param {string} damon
     * @returns {map|array}
     */
    damonToMap(damon) {
        let $ = this;
        let treeOrPrimitive = $._damonToTree(damon);
        if (
            treeOrPrimitive === true
            || treeOrPrimitive === false
            || treeOrPrimitive === null
            || typeof treeOrPrimitive === 'string'
            || typeof treeOrPrimitive === 'number'
        ) {
            return treeOrPrimitive;
        }
        return $._treeToMap($._damonToTree(damon));
    }

    /**
     * @param {string} damon
     * @returns {string}
     */
    damonToJSON(damon) {
        let $ = this;
        return $.mapToJSON($.damonToMap(damon));
    }

    /**
     * @param {string} damon
     * @returns {map}
     */
    damonToSExpression(damon) {
        let $ = this;
        return $.implicitMapToSExpression($.damonToMap(damon));
    }

    /**
     * @param {string} json
     * @returns {string}
     */
    jsonToDamon(json) {
        let $ = this;
        return $.mapToDamon($.jsonToMap(json));
    }

    /**
     * @param {string} json
     * @returns {map|array|boolean|null|string|number}
     */
    jsonToMap(json) {
        let $ = this;
        var delimiter = /\r\n/.test(json) ? '\r\n' : '\n',
            jsonLines = json.split(delimiter);
        // - Remove comments lines
        jsonLines = jsonLines.filter(x => !(/^ *\/\//.test(x)));
        // - Remove empty lines
        jsonLines = jsonLines.filter(x => x != '');
        // - Remove lines containing only indentation
        jsonLines = jsonLines.filter(x => !/^[ \t]+$/.test(x));
        if (jsonLines.length == 1) {
            if (["true", "false", "null"].indexOf(jsonLines[0].trim()) > -1) {
                return JSON.parse(jsonLines[0]);
            } else if (/^".*"$/.test(jsonLines[0].trim())) {
                try {
                    return JSON.parse(jsonLines[0].trim());
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "string";
                    throw error;
                }
            } else if (
                isFinite(jsonLines[0])
                && !isNaN(parseFloat(jsonLines[0]))
                && Number.isFinite(jsonLines[0] * 1)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                && !Number.isNaN(jsonLines[0] * 1)
            ) {
                if (
                    jsonLines[0].indexOf(0) == 0
                    && jsonLines[0].length > 1
                    && jsonLines[0].indexOf('.') !== 1
                ) {
                    throw new Error(
                        "Error line number 1: leading 0",
                        {
                        line: 1,
                        language: "DAMON"
                        }
                    );
                }
                try {
                    return JSON.parse(jsonLines[0] * 1);
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "number";
                    throw error;
                }
            } else if (jsonLines[0] * 1 === Infinity) {
                // Make JSON.parse throw at Infinity
                try {
                    JSON.parse(jsonLines[0] * 1);
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "infinity";
                    throw error;
                }
            } else {
                return parse(json);
            }
        } else {
            return parse(json);
        }
    }

    /**
     * Offside-rule parsing
     * @param {string} damon
     * @returns {object}
     */
    _damonToTree(damon) {
        let $ = this;
        if (damon === '') {
            throw new Error(
                "Error line 1: empty string",
                {
                    line: 1,
                    language: "DAMON"
                }
            );
        }
        if (
            /[\s]/.test(damon)
            && damon.match(new RegExp(/[\s]/))[0].length == damon.length) {
            throw new Error(
                "Error line 1: string only contains whitespace",
                {
                    line: 1,
                    language: "DAMON"
                }
            );
        }
        var delimiter = /\r\n/.test(damon) ? '\r\n' : '\n',
            damonLines = damon.split(delimiter),
            damonOriginalLines = damonLines.slice(0);
        // Let the shaving, begin!
        // - Remove comments lines
        damonLines = damonLines.filter(x => !(/^ *\/\//.test(x)));
        // - Remove empty lines
        damonLines = damonLines.filter(x => x != '');
        // - Remove lines containing only indentation
        damonLines = damonLines.filter(x => !/^[ \t]+$/.test(x));
        // Lone  non-structural values
        if (damonLines.length == 1) {
            if (["true", "false", "null"].indexOf(damonLines[0].trim()) > -1) {
                return JSON.parse(damonLines[0]);
            } else if (/^".*"$/.test(damonLines[0].trim())) {
                try {
                    return JSON.parse(damonLines[0].trim());
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "string";
                    throw error;
                }
            } else if (
                isFinite(damonLines[0])
                && !isNaN(parseFloat(damonLines[0]))
                && Number.isFinite(damonLines[0] * 1)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                && !Number.isNaN(damonLines[0] * 1)
            ) {
                if (
                    damonLines[0].indexOf(0) == 0
                    && damonLines[0].length > 1
                    && damonLines[0].indexOf('.') !== 1
                ) {
                    throw new Error(
                        "Error line number 1: leading 0",
                        {
                        line: 1,
                        language: "DAMON"
                        }
                    );
                }
                try {
                    return JSON.parse(damonLines[0] * 1);
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "number";
                    throw error;
                }
            } else if (damonLines[0] * 1 === Infinity) {
                // Make JSON.parse throw at Infinity
                try {
                    JSON.parse(damonLines[0] * 1);
                } catch (error) {
                    console.error("Error line number 1: not JSON-compliant, detailed error follows");
                    error.line = 1;
                    error.language = "JSON";
                    error.type = "infinity";
                    throw error;
                }
            }
        }
        // Keep a mapping
        let damonLinesIndex = 0;
        $.damonOriginalLinesMapping = [];
        for (let i = 0, c = damonOriginalLines.length; i < c; i++) {
            if (damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]) > -1) {
                $.damonOriginalLinesMapping[i] = damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]);
            } else {
                $.damonOriginalLinesMapping[i] = null;
            }
        }
        let tabsMatchingRegex = new RegExp('^(\t)+');
        for (let i = 0, c = damonLines.length; i < c; i++) {
            // - Replacing leading tabs
            if (tabsMatchingRegex.test(damonLines[i])) {
                const tabsPaddingLength = damonLines[i].match(tabsMatchingRegex)[0].length;
                for (let z = 0, x = tabsPaddingLength; z < x; z++) {
                    damonLines[i] = damonLines[i].replace('	', ' '.repeat($.indentation));
                }
            }
            // Throwing at implicit-nulls trailing whitespaces
            // Necessary to avoid implicit cohersion
            // Simply trimming might partly-erase implicit-keys
            if (
                !/^ *- $/.test(damonLines[i])
                && /[ \t]+$/.test(damonLines[i])
            ) {
                throw new Error(
                    "Error line " + ($.damonOriginalLinesMapping.indexOf(i) + 1) + ": trailing whitespace",
                    {
                        line: $.damonOriginalLinesMapping.indexOf(i) + 1,
                        language: "DAMON"
                    }
                );
            }
        }
        // - Try to fix indentation
        let indentationMatchingRegex = new RegExp('^(' + ' '.repeat($.indentation) + ')+');
        if (
            indentationMatchingRegex.test(damonLines[0])
        ) {
            let initialPadding = damonLines[0].match(indentationMatchingRegex)[0].length,
                trimmable = true;
            for (let i = 0, c = damonLines.length; i < c; i++) {
                if (
                    indentationMatchingRegex.test(damonLines[i])
                    && damonLines[i].match(indentationMatchingRegex)[0].length >= initialPadding
                ) {
                    damonLines[i] = damonLines[i].slice(initialPadding);
                } else {
                    trimmable = false;
                }
            }
            if (!trimmable) {
                throw new Error(
                    "Error line 1: bad formatting",
                    {
                        line: 1,
                        language: "DAMON"
                    }
                );
            }
        } else if (
            indentationMatchingRegex.test(damonLines[1])
            && damonLines[1].match(indentationMatchingRegex)[0].length > $.indentation
        ) {
            let initialPadding = damonLines[1].match(indentationMatchingRegex)[0].length - $.indentation,
                trimmable = true;
            for (let i = 1, c = damonLines.length; i < c; i++) {
                if (
                    indentationMatchingRegex.test(damonLines[i])
                    && damonLines[i].match(indentationMatchingRegex)[0].length >= initialPadding
                ) {
                    damonLines[i] = damonLines[i].slice(initialPadding);
                } else {
                    trimmable = false;
                }
            }
            if (!trimmable) {
                throw new Error(
                    "Error line 2: bad formatting",
                    {
                        line: 2,
                        language: "DAMON"
                    }
                );
            }
        }
        // - Headless support
        let headless = false;
        if (damonLines.length > 1) {
            for (let i = 0, c = damonLines.length; i < c; i++) {
                if (
                    i !== 0
                    && /^- /.test(damonLines[i])
                ) {
                    headless = true;
                }
            }
        }
        if (
            !/^- \{\}$/.test(damonLines[0])
            && !/^- \[\]$/.test(damonLines[0])
        ) {
            headless = true;
        }
        if (headless) {
            for (let i = 0, c = damonLines.length; i < c; i++) {
                damonLines[i] = ' '.repeat($.indentation) + damonLines[i];
            }
            damonLines.unshift('- {}');
        }

        var treeRoot = {
            content: damonLines[0],
            level: 0,
            id: 0,
            children: [],
            headless: headless
        };
        var previousListItem = treeRoot;
        if (
            !/^- /.test(damonLines[0].trimStart())
            || (
                /^ +/.test(damonLines[0])
                && (
                    damonLines[0].match(/^ +/)[0].length % $.indentation != 0
                    || (
                        damonLines[0].match(/^ +/)[0].length != $.indentation
                    )
                )
            )
        ) {
            throw new Error(
                "Error line " + ((headless * 1) + 1) + ": bad formatting",
                {
                    line: (headless * 1) + 1,
                    language: "DAMON"
                }
            );
        }
        damonLines.shift();
        for (let i = 0, c = damonLines.length; i < c; i++) {
            if (
                !/^- /.test(damonLines[i].trimStart())
                || (
                    /^ +/.test(damonLines[i])
                    && (
                        damonLines[i].match(/^ +/)[0].length % $.indentation != 0
                        || (
                            i == 0
                            && damonLines[i].match(/^ +/)[0].length != $.indentation
                        ) || (
                            i != 0
                            && /^- /.test(damonLines[i - 1])
                            && damonLines[i].match(/^ +/)[0].length != $.indentation
                        ) || (
                            i != 0
                            && !/^- /.test(damonLines[i - 1])
                            && (
                                damonLines[i].match(/^ +/)[0].length
                                > (damonLines[i - 1].match(/^ +/)[0].length + $.indentation)
                            )
                        )
                    )
                )
            ) {
                throw new Error(
                    "Error line " + ($.damonOriginalLinesMapping.indexOf(i) + 1) + ": bad formatting",
                    {
                        line: $.damonOriginalLinesMapping.indexOf(i) + 1,
                        language: "DAMON"
                    }
                );
            }
            /* jshint -W083 */
            let listItem = {
                    content: damonLines[i].trimStart().slice(2),
                    level: 1 + (damonLines[i].match(/^ +/)[0].length / $.indentation),
                    id: '',
                    children: []
                };
            if (previousListItem === treeRoot) {
                listItem.id = treeRoot.children.length + 1;
                treeRoot.children.push(listItem);
            } else if (previousListItem.level === listItem.level) {
                var parentListItem = $._findListItemCommonDirectParent(previousListItem, treeRoot);
                if (parentListItem.level == 0) {
                    listItem.id = parentListItem.children.length + 1;
                } else {
                    listItem.id = parentListItem.id + '-' + (parentListItem.children.length + 1);
                }
                parentListItem.children.push(listItem);
            } else if (previousListItem.level > listItem.level) {
                var commonAncestor = $._findListItemCommonAncestor(previousListItem, treeRoot, listItem.level);
                if (commonAncestor.level == 0) {
                    listItem.id = commonAncestor.children.length + 1;
                } else {
                    listItem.id = commonAncestor.id + '-' + (commonAncestor.children.length + 1);
                }
                commonAncestor.children.push(listItem);
            } else if (previousListItem.level < listItem.level) {
                var grandParentListItem = $._findListItemCommonDirectParent(previousListItem, treeRoot);
                let previousListItemIndex = grandParentListItem.children.indexOf(previousListItem);
                let previousListItemId =
                        grandParentListItem.children[previousListItemIndex].id,
                    nextTitleNumber = grandParentListItem.children[previousListItemIndex].children.length + 1;
                listItem.id = previousListItemId + '-' + nextTitleNumber;
                grandParentListItem.children[previousListItemIndex].children.push(listItem);
            }
            previousListItem = listItem;
        }
        return treeRoot;
    }

    /**
     * @param {any} listItem
     * @param {{ children: string | any[]; }} possibleParent
     * @return {object|string} DOM
     */
    _findListItemCommonDirectParent(listItem, possibleParent) {
        let $ = this;
        if (possibleParent.children.indexOf(listItem) > -1) {
            return possibleParent;
        } else {
            var parent;
            for (let i = possibleParent.children.length - 1, c = 0; i >= c; i--) {
                parent = $._findListItemCommonDirectParent(listItem, possibleParent.children[i]);
                if (parent) {
                    return parent;
                }
            }
        }
    }

    /**
     * @param {any} listItem
     * @param {{ children: string | any[]; }} possibleParent
     * @param {number} level
     * @return {object|string} DOM
     */
    _findListItemCommonAncestor(listItem, possibleParent, level) {
        let $ = this;
        var parent = $._findListItemCommonDirectParent(listItem, possibleParent);
        if (parent.level < level) {
            return parent;
        } else {
            return $._findListItemCommonAncestor(parent, possibleParent, level);
        }
    }

    /**
     * JSON primitives wrapping
     * @param {object} tree
     * @return {map | array}
     */
    _treeToMap(damonTree) {
        let $ = this;
        var treeItemIndex = 0;
        if (damonTree.content == '- {}') {
            let map = new Map();
            return _recurse(damonTree, map);
        } else if (damonTree.content == '- []') {
            return _recurse(damonTree, []);
        } else {
            // implicit dictionary
            // Storing for utils formatting
            let map = new Map();
            if (damonTree.headless) {
                map.headless = true;
            }
            return _recurse(damonTree, map);
        }
        /**
         * @param {object} tree
         * @param {map|array} jsonMap
         * @returns {map|array}
         */
        function _recurse(tree, jsonMap) {
            if (
                typeof tree !== 'object'
                || tree == null
                || Array.isArray(tree)
            ) {
                throw new Error(
                    "Error line number "
                    + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                    + ": @param { {} } tree",
                    {
                        line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                        language: "DAMON"
                    }
                );
            }
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) { // {}
                _mapHandler(tree, jsonMap);
            } else if (Array.isArray(jsonMap)) {
                // []
                _listHandler(tree, jsonMap);
            } else {
                throw new Error(
                    "Error line number "
                    + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                    + ": @param { {} | [] } jsonMap",
                    {
                        line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                        language: "DAMON"
                    }
                );
            }
            return jsonMap;
        }

        /**
         * @param {object} tree
         * @param {map|array} jsonMap
         */
        function _mapHandler(tree, jsonMap) {
            for (let i = 0, c = tree.children.length; i < c; i++) {
                treeItemIndex++;
                if (tree.children[i].content.length == 0) {
                    // implicit value
                    let errorType;
                    if (tree.children[i].children.length > 0) {
                        errorType = "implicit map key";
                        jsonMap.set("", new Map());
                        // Storing formatting for auto-formatting
                        if (jsonMap.implicitMaps === undefined) {
                            jsonMap.implicitMaps = [];
                        }
                        jsonMap.implicitMaps.push("");
                        _recurse(tree.children[i], jsonMap.get(""));
                    } else {
                        errorType = "implicit null key";
                        jsonMap.set("", null);
                        // Storing formatting for auto-formatting
                        if (jsonMap.implicitNulls ===  undefined) {
                            jsonMap.implicitNulls = [];
                        }
                        jsonMap.implicitNulls.push("");
                    }
                } else {
                    let text = tree.children[i].content,
                        errorType = "key";
                    // Catching JSON.stringify() and JSON.parse() throws
                    try {
                        if (
                            /^.*: +\[/.test(text)
                            && text[text.length - 1] == ']'
                        ) {
                            if (
                                /: +\[ *\]$/.test(text)
                            ) {
                                let key =
                                    JSON.stringify(
                                        JSON.parse(
                                            `["${text.slice(0, -1 * text.match(/: +\[ *\]$/)[0].length)}"]`
                                        )[0]
                                    ).slice(1, -1);
                                jsonMap.set(key, []);
                                if (tree.children[i].children.length > 0) {
                                    _recurse(tree.children[i], jsonMap.get(key));
                                }
                            } else {
                                // Normalizing
                                let redundantWhitespaceMatchingRegex = new RegExp(/: +\[/g),
                                    splitString = text.slice(0, -1).split(redundantWhitespaceMatchingRegex),
                                    textMatchesPlusOne = text.match(redundantWhitespaceMatchingRegex).concat(['']),
                                    splitStringWithMatches = splitString.map((x, i) => x + textMatchesPlusOne[i]),
                                    shortestPossibleKey = '',
                                    longestPossibleArray = [];
                                for (let j = 0, k = splitString.length; j < k; j++) {
                                    try {
                                        let concatenation;
                                        if (j == 0) {
                                            concatenation = splitString[0];
                                        } else {
                                            concatenation =
                                                splitStringWithMatches.slice(0, j).join('')
                                                + splitString[j];
                                        }
                                        shortestPossibleKey =
                                            JSON.stringify(JSON.parse(`["${concatenation}"]`)[0]).slice(1, -1);
                                        errorType = "list";
                                        longestPossibleArray =
                                            JSON.parse(`[${splitStringWithMatches.slice(j + 1).join('')}]`);
                                        if (Array.isArray(longestPossibleArray)) {
                                            break;
                                        }
                                    } catch (error) {
                                        // Doesn't matter until...
                                        if (j == k - 2) {
                                            throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": invalid inline list",
                                                {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                                }
                                            );
                                        }
                                    }
                                }
                                // Primitives check here
                                let arrayOfPrimitives =
                                    longestPossibleArray.every(function (item) {
                                        if (item === true) {
                                            return true;
                                        } else if (item === false) {
                                            return true;
                                        } else if (item === null) {
                                            nullsCounter++;
                                            return true;
                                        } else if (typeof item == 'string') {
                                            return true;
                                        } else if (
                                            isFinite(item)
                                            && !isNaN(parseFloat(item))
                                            && Number.isFinite(item * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                            && !Number.isNaN(item * 1)
                                        ) { // Number
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    });
                                if (arrayOfPrimitives) {
                                    // No nesting, fits on an archivable line
                                    jsonMap.set(shortestPossibleKey, longestPossibleArray);
                                    // Storing formatting for auto-formatting options
                                    if (jsonMap.inlineArrays === undefined) {
                                        jsonMap.inlineArrays = [];
                                    }
                                    jsonMap.inlineArrays.push(shortestPossibleKey);
                                } else {
                                    throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": no nesting in inline lists",
                                        {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                        }
                                    );
                                }
                                if (tree.children[i].children.length > 0) {
                                    throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3)
                                + ": inline lists can\'t have children",
                                        {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                                language: "DAMON"
                                        }
                                    );
                                }
                            }
                        } else if (
                            /: +\{ *\}$/.test(text)
                        ) { // Map
                            let key =
                                JSON.stringify(
                                    JSON.parse(
                                        `["${text.slice(0, -1 * text.match(/: +\{ *\}$/)[0].length)}"]`
                                    )[0]
                                ).slice(1, -1);
                            jsonMap.set(key, new Map());
                            _recurse(tree.children[i], jsonMap.get(key));
                        } else {
                            let implicitProperty = false;
                            if (
                                text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "true"
                            ) { // True
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key =
                                        JSON.stringify(
                                            JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -4)}"]`)[0]
                                        ).slice(1, -1);
                                jsonMap.set(key, true);
                            } else if (
                                text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "false"
                            ) { // False
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key =
                                        JSON.stringify(
                                            JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -5)}"]`)[0]
                                        ).slice(1, -1);
                                jsonMap.set(key, false);
                            } else if (
                                text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] == "null"
                            ) { // Null
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key =
                                        JSON.stringify(
                                            JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -4)}"]`)[0]
                                        ).slice(1, -1);
                                jsonMap.set(key, null);
                            } else if (
                                /^.*: +"/.test(text)
                                && text[text.length - 1] == '"'
                            ) { // String
                                let separatorMatches = text.match(new RegExp(/: +"/g));
                                if (
                                    separatorMatches.length == 1
                                ) {
                                    let key =
                                            JSON.stringify(
                                                JSON.parse(
                                                    `["${text.split(separatorMatches[0])[0]}"]`
                                                )[0]
                                            ).slice(1, -1);
                                    errorType = "string";
                                    let childText =
                                            JSON.stringify(
                                                JSON.parse(
                                                    `["${
                                                        text.split(separatorMatches[0]).slice(1).join('').slice(0, -1)
                                                    }"]`
                                                )[0]
                                            ).slice(1, -1);
                                    jsonMap.set(key, childText);
                                } else if (
                                    separatorMatches.length == 2
                                    && /: +"$/.test(text)
                                ) {
                                    let key =
                                            JSON.stringify(
                                                JSON.parse(
                                                    `["${text.split(separatorMatches[0])[0]}"]`
                                                )[0]
                                            ).slice(1, -1);
                                    errorType = "string";
                                    let childText =
                                            JSON.stringify(
                                                JSON.parse(
                                                    `["${
                                                        text.split(separatorMatches[0]).slice(1).join('') + ': '
                                                    }"]`)[0]
                                            ).slice(1, -1);
                                    jsonMap.set(key, childText);
                                } else {
                                    throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": unescaped double quote",
                                        {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                        }
                                    );
                                }
                            } else if (
                                /^.*: /.test(text)
                                && isFinite(text.split(': ')[text.split(': ').length - 1])
                                && !isNaN(parseFloat(text.split(': ')[text.split(': ').length - 1]))
                                && Number.isFinite(text.split(': ')[text.split(': ').length - 1] * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                && !Number.isNaN(text.split(': ')[text.split(': ').length - 1] * 1)
                            ) { // Number
                                let key =
                                        JSON.stringify(
                                            JSON.parse(`["${text.split(': ').slice(0, -1).join(': ')}"]`)[0]
                                        ).slice(1, -1);
                                errorType = "number";
                                let separatorMatches = text.match(new RegExp(/: +/g)),
                                    lastSeparatorMatch = separatorMatches[separatorMatches.length - 1],
                                    value = text.split(lastSeparatorMatch)[text.split(lastSeparatorMatch).length - 1];
                                if (
                                    value.indexOf(0) == 0
                                    && value.length > 1
                                    && value.indexOf('.') !== 1
                                ) {
                                    throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": leading 0",
                                        {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                        }
                                    );
                                }
                                let number =
                                        JSON.stringify(
                                            JSON.parse(`[${text.split(': ')[text.split(': ').length - 1] * 1}]`)[0]
                                        ) * 1;
                                jsonMap.set(key, number);
                            } else if (
                                /^.*: /.test(text)
                                && (
                                    text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] * 1
                                ) === Infinity
                            ) {
                                let key =
                                JSON.stringify(
                                    JSON.parse(`["${text.split(': ').slice(0, -1).join(': ')}"]`)[0]
                                    ).slice(1, -1);
                                errorType = "infinity";
                                // JSON.parse() throws at Infinity
                                let number = JSON.stringify(
                                    JSON.parse(`[${text.split(': ')[text.split(': ').length - 1] * 1}]`)
                                ) * 1;
                            } else {
                                // Value re-checks
                                // Hoisting worth using returns above?
                                let validValue = false,
                                    valueLength = 0;
                                if (
                                    /\[ *\]$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = text.match(new RegExp(/\[ *\]$/g))[0].length;
                                }
                                if (
                                    /\{ *\}$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = text.match(new RegExp(/\{ *\}$/g))[0].length;
                                }
                                if (
                                    /true$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = 4;
                                }
                                if (
                                    /false$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = 5;
                                }
                                if (
                                    /null$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = 4;
                                }
                                if (
                                    /".*"$/.test(text)
                                ) {
                                    validValue = true;
                                    valueLength = text.match(new RegExp(/".*"$/g))[0].length;
                                }
                                if (!validValue) {
                                    let accumulator = '';
                                    for (let i = text.length - 1; i > -1; i--) {
                                        accumulator = text[i].concat(accumulator);
                                        if (
                                            isFinite(accumulator)
                                            && !isNaN(parseFloat(accumulator))
                                            && Number.isFinite(accumulator * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                            && !Number.isNaN(accumulator * 1)
                                        ) {
                                            if (!/[ \t]/.test(text[i])) {
                                                break;
                                            }
                                            validValue = true;
                                            valueLength = accumulator.length;
                                        } else {
                                            break;
                                        }
                                    }
                                }
                                if (validValue) {
                                    // valid value
                                    let string = JSON.stringify(
                                        JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0]
                                    ).slice(1, -1);
                                    // valid key
                                    if ($.pedantic) {
                                        // pedantic
                                        // missing separator error
                                        throw new Error(
                                    "Error line number "
                                    + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex))
                                    + ": missing separator",
                                            {
                                    line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                    language: "DAMON",
                                    errorType: "pedantic"
                                            }
                                        );
                                    } else {
                                        // not pedantic
                                        if (!/: +$/.test(string)) {
                                            // string value
                                            // missing separator error
                                            throw new Error(
                                    "Error line number "
                                    + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex))
                                    + ": missing separator",
                                                {
                                    line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                    language: "DAMON",
                                    errorType: "pedantic"
                                                }
                                            );
                                        } else {
                                            // not string value
                                            // implicit value
                                            implicitProperty = true;
                                            if (tree.children[i].children.length > 0) {
                                                errorType = "implicit map key";
                                                let key = JSON.stringify(JSON.parse(`["${text}"]`)[0]).slice(1, -1);
                                                jsonMap.set(key, new Map());
                                                // Storing formatting for auto-formatting
                                                if (jsonMap.implicitMaps === undefined) {
                                                    jsonMap.implicitMaps = [];
                                                }
                                                jsonMap.implicitMaps.push(key);
                                                _recurse(tree.children[i], jsonMap.get(key));
                                            } else {
                                                errorType = "implicit null key";
                                                let key = JSON.stringify(JSON.parse(`["${text}"]`)[0]).slice(1, -1);
                                                jsonMap.set(key, null);
                                                // Storing formatting for auto-formatting
                                                if (jsonMap.implicitNulls ===  undefined) {
                                                    jsonMap.implicitNulls = [];
                                                }
                                                jsonMap.implicitNulls.push(key);
                                            }
                                        }
                                    }
                                } else {
                                    // invalid value
                                    let string = JSON.stringify(
                                        JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0]
                                    ).slice(1, -1);
                                    // valid as a key
                                    if ($.pedantic) {
                                        // pedantic
                                        if (/: +$/.test(string)) {
                                            // key end has separator
                                            // bad value
                                            throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3)
                                + ": bad value",
                                                {
                                    line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                    language: "DAMON",
                                    errorType: "pedantic"
                                                }
                                            );
                                        } else {
                                            // key end lacks separator
                                            // missing separator
                                            throw new Error(
                                    "Error line number "
                                    + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex))
                                    + ": missing separator",
                                                {
                                    line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex),
                                    language: "DAMON",
                                    errorType: "pedantic"
                                                }
                                            );
                                        }
                                    } else {
                                        // not pedantic
                                        // use as implicit
                                        implicitProperty = true;
                                        if (tree.children[i].children.length > 0) {
                                            errorType = "implicit map key";
                                            let key = JSON.stringify(JSON.parse(`["${text}"]`)[0]).slice(1, -1);
                                            jsonMap.set(key, new Map());
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitMaps === undefined) {
                                                jsonMap.implicitMaps = [];
                                            }
                                            jsonMap.implicitMaps.push(key);
                                            _recurse(tree.children[i], jsonMap.get(key));
                                        } else {
                                            errorType = "implicit null key";
                                            let key = JSON.stringify(JSON.parse(`["${text}"]`)[0]).slice(1, -1);
                                            jsonMap.set(key, null);
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitNulls ===  undefined) {
                                                jsonMap.implicitNulls = [];
                                            }
                                            jsonMap.implicitNulls.push(key);
                                        }
                                    }
                                }
                            }
                            if (
                                !implicitProperty
                                && tree.children[i].children.length > 0
                            ) {
                                throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3)
                                + ": missing container or excess indentation",
                                    {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                                language: "DAMON"
                                    }
                                );
                            }
                        }
                    } catch (error) {
                        if (error.language === undefined) {
                            console.error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line =
                                (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                            error.language = "JSON";
                            error.type = errorType;
                        }
                        throw error;
                    }
                }
            }
        }

        /**
         * @param {object} tree
         * @param {map|array} jsonMap
         */
        function _listHandler(tree, jsonMap) {
            for (let i = 0, c = tree.children.length; i < c; i++) {
                treeItemIndex++;
                if (tree.children[i].content.length) {
                    let text = tree.children[i].content;
                    if (
                        /^[ \t]*\[/.test(text)
                        && text[text.length - 1] == ']'
                    ) {
                        if (
                            /^[ \t]*\[ *\]$/.test(text)
                        ) {
                            jsonMap.push([]);
                            _recurse(tree.children[i], jsonMap[jsonMap.length - 1]);
                        } else {
                            let inlineArray;
                            try {
                                inlineArray = JSON.parse(text);
                            } catch (error) {
                                throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": invalid inline lists",
                                    {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "JSON",
                                type: "list"
                                    }
                                );
                            }
                            let arrayOfPrimitives =
                                    inlineArray.every(function (item) {
                                        if (item === true) {
                                            return true;
                                        } else if (item === false) {
                                            return true;
                                        } else if (item === null) {
                                            nullsCounter++;
                                            return true;
                                        } else if (typeof item == 'string') {
                                            return true;
                                        } else if (
                                            isFinite(item)
                                            && !isNaN(parseFloat(item))
                                            && Number.isFinite(item * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                            && !Number.isNaN(item * 1)
                                        ) { // Number
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    });
                            if (arrayOfPrimitives) {
                                jsonMap.push(inlineArray);
                                // Storing formatting for auto-formatting options
                                if (jsonMap.inlineArrays === undefined) {
                                    jsonMap.inlineArrays = [];
                                }
                                jsonMap.inlineArrays.push(i);
                            } else {
                                throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": no nesting in inline lists",
                                    {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                    }
                                );
                            }
                            if (tree.children[i].children.length > 0) {
                                throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3)
                                + ": inline lists can\'t have children",
                                    {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 3,
                                language: "DAMON"
                            }
                                );
                            }
                        }
                    } else if (/^[ \t]*\{\}$/.test(text)) {
                        jsonMap.push(new Map());
                        _recurse(tree.children[i], jsonMap[jsonMap.length - 1]);
                    } else if (/^[ \t]*true$/.test(text)) {
                        jsonMap.push(true);
                    } else if (/^[ \t]*false$/.test(text)) {
                        jsonMap.push(false);
                    } else if (/^[ \t]*null$/.test(text)) {
                        jsonMap.push(null);
                    } else if (/^[ \t]*".*"$/.test(text)) {
                        try {
                            jsonMap.push(JSON.stringify(JSON.parse(`[${text.trimStart()}]`)[0]).slice(1, -1));
                        } catch (error) {
                            console.error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line =
                                (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                            error.language = "JSON";
                            error.type = "string";
                            throw error;
                        }
                    } else if (
                        isFinite(text)
                        && !isNaN(parseFloat(text))
                        && Number.isFinite(text * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                        && !Number.isNaN(text * 1)
                    ) {
                        if (
                            text.indexOf(0) == 0
                            && text.length > 1
                            && text.indexOf('.') !== 1
                        ) {
                            throw new Error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": leading 0",
                                {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                                }
                            );
                        }
                        try {
                            jsonMap.push(JSON.stringify(JSON.parse(`[${text * 1}]`)[0]) * 1);
                        } catch (error) {
                            console.error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line =
                                (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                            error.language = "JSON";
                            error.type = "number";
                            throw error;
                        }
                    } else if (text * 1 === Infinity) {
                        // Make JSON.parse throw at Infinity
                        try {
                            JSON.stringify(JSON.parse(text * 1));
                        } catch (error) {
                            console.error(
                                "Error line number "
                                + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line =
                                (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2;
                            error.language = "JSON";
                            error.type = "infinity";
                            throw error;
                        }
                    } else {
                        throw new Error(
                            "Error line number "
                            + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                            + ": list items can\'t have a key",
                            {
                                line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                                language: "DAMON"
                            }
                        );
                    }
                } else {
                    throw new Error(
                        "Error line number "
                        + ((damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2)
                        + ": empty list node",
                        {
                            line: (damonTree.headless * -1) + $.damonOriginalLinesMapping.indexOf(treeItemIndex - 1) + 2,
                            language: "DAMON"
                        }
                    );
                }
            }
        }
    }

    /**
     * @param {map|array|boolean|null|string|number} jsonMap
     * @returns {string}
     */
    mapToDamon(jsonMap) {
        let $ = this;
        var list = ``;
        if (Array.isArray(jsonMap)) {
            list += '- []\n';
        } else if (
            typeof jsonMap === 'object'
            && jsonMap !== null
            && jsonMap instanceof Map
            && jsonMap.constructor === Map
        ) {
            list += '- {}\n';
        } else {
            if (typeof jsonMap == 'string') {
                jsonMap = '"' + jsonMap + '"';
            }
            JSON.parse(jsonMap);
            return jsonMap;
        }
        _recurse(jsonMap);
        $.damonToMap(list.slice(0, -1));
        return list.slice(0, -1); // last linefeed
        /**
         * @param {map|array} jsonMap
         * @param {number} [level=1]
         * @returns {string}
         */
        function _recurse(jsonMap, level = 1) {
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                for (const [key, value] of jsonMap) {
                    if (
                        typeof value === 'object'
                        && value !== null
                    ) {
                        if (Array.isArray(value)) {
                            let nullsCounter = 0,
                                arrayOfPrimitives = value.filter(function (item) {
                                if (item === true) {
                                    return true;
                                } else if (item === false) {
                                    return true;
                                } else if (item === null) {
                                    nullsCounter++;
                                    return true;
                                } else if (typeof item == 'string') {
                                    return true;
                                } else if (
                                    isFinite(item)
                                    && !isNaN(parseFloat(item))
                                    && Number.isFinite(item * 1)
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                    && !Number.isNaN(item * 1)
                                ) { // Number
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                            if (
                                value.length == arrayOfPrimitives.length
                                && (level * 4 + 2 + value.join(', ').length + (nullsCounter * 4)) <= 80
                            ) {
                                // No nesting, fits on an archivable line
                                let line =
                                    '['
                                    + value.map(function (x) {
                                        if (typeof x == 'string') {
                                            x = '"' + x + '"';
                                        }
                                        return x;
                                    }).join(', ')
                                    + ']';
                                list +=
                                    '    '.repeat(level)
                                    + '- ' + key + ': ' + line + '\n';
                            } else {
                                list += '    '.repeat(level) + '- ' + key + ': []\n';
                                _recurse(value, level + 1);
                            }
                        } else {
                            list += '    '.repeat(level) + '- ' + key + ': {}\n';
                            _recurse(value, level + 1);
                        }
                    } else {
                        list += '    '.repeat(level) + '- ' + key + ': ';
                        if (value === true) {
                            list += "true\n";
                        } else if (value === false) {
                            list += "false\n";
                        } else if (value === null) {
                            list += "null\n";
                        } else if (
                            Number.isFinite(value)
                            && !Number.isNaN(value)
                        ) {
                            list += value + "\n";
                        } else {
                            // console.log(value[2]);
                            // console.log(JSON.parse('"' + value.slice(3) + '"'));
                            list += `"${value}"\n`;
                        }
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                for (var i = 0, c = jsonMap.length; i < c; i++) {
                    if (
                        typeof jsonMap[i] === 'object'
                        && jsonMap[i] !== null
                    ) {
                        if (Array.isArray(jsonMap[i])) {
                            let nullsCounter = 0,
                                arrayOfPrimitives = jsonMap[i].filter(function (item) {
                                if (item === true) {
                                    return true;
                                } else if (item === false) {
                                    return true;
                                } else if (item === null) {
                                    nullsCounter++;
                                    return true;
                                } else if (typeof item == 'string') {
                                    return true;
                                } else if (
                                    isFinite(item)
                                    && !isNaN(parseFloat(item))
                                    && Number.isFinite(item * 1)
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                    && !Number.isNaN(item * 1)
                                ) { // Number
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                            if (
                                jsonMap[i].length == arrayOfPrimitives.length
                                && (level * 4 + 2 + jsonMap[i].join(', ').length + (nullsCounter * 4)) <= 80
                            ) {
                                let line =
                                    '['
                                    + jsonMap[i].map(function (x) {
                                        if (typeof x == 'string') {
                                            x = '"' + x + '"';
                                        }
                                        return x;
                                    }).join(', ')
                                    + ']';
                                list += '    '.repeat(level) + '- ' + line + '\n';
                            } else {
                                list += '    '.repeat(level) + "- []\n";
                                _recurse(jsonMap[i], level + 1);
                            }
                        } else {
                            list += '    '.repeat(level) + "- {}\n";
                            _recurse(jsonMap[i], level + 1);
                        }
                    } else {
                        if (jsonMap[i] === true) {
                            list += '    '.repeat(level) + "- true\n";
                        } else if (jsonMap[i] === false) {
                            list += '    '.repeat(level) + "- false\n";
                        } else if (jsonMap[i] === null) {
                            list += '    '.repeat(level) + "- null\n";
                        } else if (
                            Number.isFinite(jsonMap[i])
                            && !Number.isNaN(jsonMap[i])
                        ) {
                            list += '    '.repeat(level) + '- ' + jsonMap[i] + "\n";
                        } else {
                            list += '    '.repeat(level) + `- "${jsonMap[i]}"\n`;
                        }
                    }
                }
            }
        }
    }

    /**
     * @param {map|array|boolean|null|string|number} jsonMap
     * @returns {string}
     */
    mapToJSON(jsonMap) {
        let $ = this;
        var list = ``;
        if (Array.isArray(jsonMap)) {
            list += "[\r\n";
            _recurse(jsonMap);
            list += "]";
            JSON.parse(list);
            return list;
        } else if (
            typeof jsonMap === 'object'
            && jsonMap !== null
            && jsonMap instanceof Map
            && jsonMap.constructor === Map
        ) {
            list += "{\r\n";
            _recurse(jsonMap);
            list += "}";
            JSON.parse(list);
            return list;
        } else {
            if (typeof jsonMap == 'string') {
                jsonMap = '"' + jsonMap + '"';
            }
            JSON.parse(jsonMap);
            return jsonMap;
        }
        /**
         * @param {map|array} jsonMap
         * @param {number} [level=1]
         * @returns {string}
         */
        function _recurse(jsonMap, level = 1) {
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                for (const [key, value] of jsonMap) {
                    if (
                        typeof value === 'object'
                        && value !== null
                    ) {
                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                list += '    '.repeat(level) + `"${key}": [\r\n`;
                                _recurse(value, level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `"${key}": []`;
                            }
                        } else {
                            if (Array.from(value.keys()).length > 0) {
                                list += '    '.repeat(level) + `"${key}": {\r\n`;
                                _recurse(value, level + 1);
                                list += '    '.repeat(level) + `}`;
                            } else {
                                list += '    '.repeat(level) + `"${key}": {}`;
                            }
                        }
                    } else {
                        if (value === true) {
                            list += '    '.repeat(level) + `"${key}"` + ': ' + "true";
                        } else if (value === false) {
                            list += '    '.repeat(level) + `"${key}"` + ': ' + "false";
                        } else if (value === null) {
                            list += '    '.repeat(level) + `"${key}"` + ': ' + "null";
                        } else if (
                            Number.isFinite(value)
                            && !Number.isNaN(value)
                        ) {
                            list += '    '.repeat(level) + `"${key}"` + ': ' + value;
                        } else {
                            list += '    '.repeat(level) + `"${key}"` + ': ' + `"${value}"`;
                        }
                    }
                    if (key != Array.from(jsonMap.keys())[Array.from(jsonMap.keys()).length - 1]) {
                        list += ",\r\n";
                    } else {
                        list += "\r\n";
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                for (var i = 0, c = jsonMap.length; i < c; i++) {
                    if (
                        typeof jsonMap[i] === 'object'
                        && jsonMap[i] !== null
                    ) {
                        if (Array.isArray(jsonMap[i])) {
                            if (jsonMap[i].length > 0) {
                                list += '    '.repeat(level) + `[\r\n`;
                                _recurse(jsonMap[i], level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `[]`;
                            }
                        } else {
                            if (Array.from(jsonMap[i].keys()).length > 0) {
                                list += '    '.repeat(level) + `{\r\n`;
                                _recurse(jsonMap[i], level + 1);
                                list += '    '.repeat(level) + `}`;
                            } else {
                                list += '    '.repeat(level) + `{}`;
                            }
                        }
                    } else {
                        if (jsonMap[i] === true) {
                            list += '    '.repeat(level) + "true";
                        } else if (jsonMap[i] === false) {
                            list += '    '.repeat(level) + "false";
                        } else if (jsonMap[i] === null) {
                            list += '    '.repeat(level) + "null";
                        } else if (
                            Number.isFinite(jsonMap[i])
                            && !Number.isNaN(jsonMap[i])
                        ) {
                            list += '    '.repeat(level) + jsonMap[i];
                        } else {
                            list += '    '.repeat(level) + `"${jsonMap[i]}"`;
                        }
                    }
                    if (i != c - 1) {
                        list += ",\r\n";
                    } else {
                        list += "\r\n";
                    }
                }
            }
        }
    }

    /**
     * @param {map|boolean|null|string|number} jsonMap
     * @returns {string}
     */
    implicitMapToSExpression(jsonMap) {
        let $ = this;
        var list = ``;
         if (
            typeof jsonMap === 'object'
            && jsonMap !== null
            && jsonMap instanceof Map
            && jsonMap.constructor === Map
        ) {
            list += "[\r\n";
            _recurse(jsonMap);
            list += "]";
            JSON.parse(list)
            return list;
        } else {
            if (typeof jsonMap == 'string') {
                jsonMap = '"' + jsonMap + '"';
            }
            JSON.parse(jsonMap)
            return jsonMap;
        }
        /**
         * @param {map|array} jsonMap
         * @param {number} [level=1]
         * @returns {string}
         */
        function _recurse(jsonMap, level = 1) {
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                let i = -1;
                for (const [key, value] of jsonMap) {
                    i++;
                    if (
                        typeof value === 'object'
                        && value !== null
                    ) {
                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                list += '    '.repeat(level) + `"${key}", [\r\n`;
                                _recurse(value, level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `"${key}", []`;
                            }
                        } else {
                            if (Array.from(value.keys()).length > 0) {
                                if (level == 1) {
                                    if (i == 0) {
                                        list = "";
                                    } else {
                                        throw new Error("Multiple S-Expression roots");
                                    }
                                }
                                list += '    '.repeat(level) + `["${key}", \r\n`;
                                _recurse(value, level + 1);
                                if (level != 1) {
                                    list += '    '.repeat(level) + `]`;
                                }
                            } else {
                                list += '    '.repeat(level) + `"${key}", []`;
                            }
                        }
                    } else {
                        if (value === true) {
                            throw new Error('Booleans require quotes');
                        } else if (value === false) {
                            throw new Error('Booleans require quotes');
                        } else if (value === null) {
                            list += '    '.repeat(level) + `"${key}"`;
                        } else if (
                            Number.isFinite(value)
                            && !Number.isNaN(value)
                        ) {
                            list += '    '.repeat(level) + `"${key}"` + ', ' + value;
                        } else {
                            list += '    '.repeat(level) + `"${key}"` + ', ' + `"${value}"`;
                        }
                    }
                    if (key != Array.from(jsonMap.keys())[Array.from(jsonMap.keys()).length - 1]) {
                        list += ",\r\n";
                    } else {
                        list += "\r\n";
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                for (var i = 0, c = jsonMap.length; i < c; i++) {
                    if (
                        typeof jsonMap[i] === 'object'
                        && jsonMap[i] !== null
                    ) {
                        if (Array.isArray(jsonMap[i])) {
                            if (jsonMap[i].length > 0) {
                                list += '    '.repeat(level) + `[\r\n`;
                                _recurse(jsonMap[i], level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `[]`;
                            }
                        } else {
                            if (Array.from(jsonMap[i].keys()).length > 0) {
                                list += '    '.repeat(level) + `[\r\n`;
                                _recurse(jsonMap[i], level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `[]`;
                            }
                        }
                    } else {
                        if (jsonMap[i] === true) {
                            throw new Error('Booleans require quotes');
                        } else if (jsonMap[i] === false) {
                            throw new Error('Booleans require quotes');
                        } else if (jsonMap[i] === null) {
                            throw new Error('Array-nulls require quotes');
                        } else if (
                            Number.isFinite(jsonMap[i])
                            && !Number.isNaN(jsonMap[i])
                        ) {
                            list += '    '.repeat(level) + jsonMap[i];
                        } else {
                            list += '    '.repeat(level) + `"${jsonMap[i]}"`;
                        }
                    }
                    if (i != c - 1) {
                        list += ",\r\n";
                    } else {
                        list += "\r\n";
                    }
                }
            }
        }
    }
};
