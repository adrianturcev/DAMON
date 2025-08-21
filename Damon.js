// Copyright © 2024 Adrian Turcev
const parse = require('json-in-order').parse;

//# Damon
module.exports =
class Damon {
    /**
     * Creates an instance of Damon.
     * @param {Boolean} pedantic
     */
    constructor(pedantic = false) {
        const $ = this;
        this.indentation = 4;
        if ([true, false, undefined].indexOf(pedantic) == -1) {
            throw new Error("@param {Boolean} pedantic");
        }
        this.pedantic = pedantic;
    }
    /**
     * Object-like ordered dictionaries declarations in js
     * @param {TemplateStringsArray} strings
     * @returns {damonValue}
     */
    template(strings) {
        const $ = this;
        var result = strings.raw[0];
        for (let i = 1; i < strings.raw.length; i++) {
            if (typeof arguments[i] == 'string') {
                result += '"' + arguments[i] + '"';
            } else {
                result += arguments[i];
            }
            result += strings.raw[i];
        }
        let map = $._treeToMap($._damonToTree(result));
        return map;
    }

    /**
     * @param {string} damon
     * @typedef {Map<string, damonValue>} damonMap
     * @typedef {Array<damonValue>} damonArray
     * @typedef {damonMap|damonArray|string|number|boolean|null} damonValue
     * @returns damonValue
     */
    damonToMap(damon, startLine = 0, indexPrefixKeys = false) {
        const $ = this;
        let treeOrPrimitive = $._damonToTree(damon, startLine);
        if (
            treeOrPrimitive === true
            || treeOrPrimitive === false
            || treeOrPrimitive === null
            || typeof treeOrPrimitive === 'string'
            || typeof treeOrPrimitive === 'number'
        ) {
            return treeOrPrimitive;
        }
        return $._treeToMap($._damonToTree(damon, startLine), startLine, indexPrefixKeys);
    }

    /**
     * @param {string} damon
     * @returns {string}
     */
    damonToJSON(damon) {
        const $ = this;
        return $.mapToJSON($.damonToMap(damon));
    }

    /**
     * @param {string} json
     * @returns {string}
     */
    jsonToDamon(json) {
        const $ = this;
        return $.mapToDamon($.jsonToMap(json), false);
    }

    /**
     * @param {string} json
     * @returns {damonValue}
     */
    jsonToMap(json) {
        const $ = this;
        var jsonLines = $._getLines(json, 'JSON');
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
                    let error = new Error("Error line number 1: leading 0");
                    error.line = 1;
                    error.language = "DAMON";
                    throw error;
                }
                if (
                    jsonLines[0].indexOf('_') > -1
                ) {
                    let error = new Error("Error line number 1: numeric separator");
                    error.line = 1;
                    error.language = "DAMON";
                    throw error;
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
     * @param {string} damon
     * @param {string} [language='DAMON']
     * @returns {Array<string>} damonLines
     */
    _getLines(damon, language = 'DAMON', startLine = 0) {
        if (['DAMON', 'JSON'].indexOf(language) == -1) {
            throw new Error("Bad language argument, expected 'DAMON' or 'JSON'");
        }
        if (damon === '') {
            let error = new Error("Error line " + (startLine + 1) + ": empty string");
            error.line = startLine + 1;
            error.language = language;
            throw error;
        }
        if (
            /[\s]/.test(damon)
            && damon.match(new RegExp(/[\s]/))[0].length == damon.length
        ) {
            let error = new Error("Error line " + (startLine + 1) + ": string only contains whitespace");
            error.line = startLine + 1;
            error.language = language;
            throw error;
        }
        var delimiter = /\r\n/.test(damon) ? '\r\n' : '\n',
            damonLines = damon.split(delimiter);
        if (delimiter == '\n' && /\\*\n/.test(damon)) {
            if (/[^\\]\\(\\\\)*\n/.test(damon)) {
                let errorLine = damon.split(/[^\\]\\(\\\\)*\n/)[0].split('\n').length;
                let error = new Error("Error line " + (startLine + errorLine) + ": oddly escaped newline");
                error.line =  startLine + errorLine;
                error.language = language;
                throw error;
            }
            let reversedDamon = damon.split('').reverse().join(''),
                reversedDamonLines = reversedDamon.split(/\n/);
            damonLines = reversedDamonLines.map((x) => x.split('').reverse().join('')).reverse();
        }
        return damonLines;
    }

    /**
     * Offside-rule parsing
     * @param {string} damon
     * @typedef {{
     *     content: string,
     *     level: number,
     *     id: string,
     *     children: Array<treeNode>
     * }} treeNode
     * @typedef {{
     *     headless: boolean,
     *     damonOriginalLinesMapping: Array<number|null>
     * } & treeNode} treeRoot
     * @returns {treeRoot}
     */
    _damonToTree(damon, startLine) {
        const $ = this;
        let damonLines = $._getLines(damon, "DAMON", startLine),
            damonOriginalLines = damonLines.slice(0);
        // Let the shaving, begin!
        // - Remove comments lines
        damonLines = damonLines.filter(x => !(/^ *\/\//.test(x)));
        // - Remove empty lines
        damonLines = damonLines.filter(x => x != '');
        // - Remove lines containing only indentation
        damonLines = damonLines.filter(x => !/^[ \t]+$/.test(x));
        // Lone non-structural values
        if (damonLines.length == 1) {
            if (["true", "false", "null"].indexOf(damonLines[0].trim()) > -1) {
                return JSON.parse(damonLines[0]);
            } else if (/^".*"$/.test(damonLines[0].trim())) {
                try {
                    return JSON.parse(damonLines[0].trim());
                } catch (error) {
                    console.error(
                        "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + 1;
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
                    let error = new Error("Error line number " + (startLine + 1) + ": leading 0");
                    error.line = startLine + 1;
                    error.language = "DAMON";
                    throw error;
                }
                if (
                    damonLines[0].indexOf('_') > -1
                ) {
                    let error = new Error("Error line number " + (startLine + 1) + ": numeric separator");
                    error.line = startLine + 1;
                    error.language = "DAMON";
                    throw error;
                }
                try {
                    return JSON.parse(damonLines[0] * 1);
                } catch (error) {
                    console.error(
                        "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + 1;
                    error.language = "JSON";
                    error.type = "number";
                    throw error;
                }
            } else if (damonLines[0] * 1 === Infinity) {
                // Make JSON.parse throw at Infinity
                try {
                    JSON.parse(damonLines[0] * 1);
                } catch (error) {
                    console.error(
                        "Error line number " + (startLine + 1) + ": not JSON-compliant, detailed error follows"
                    );
                    error.line = startLine + 1;
                    error.language = "JSON";
                    error.type = "infinity";
                    throw error;
                }
            }
        }
        // Keep a mapping
        let damonLinesIndex = 0,
            damonOriginalLinesMapping = [];
        for (let i = 0, c = damonOriginalLines.length; i < c; i++) {
            if (damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]) > -1) {
                damonOriginalLinesMapping[i] = damonLines.slice(damonLinesIndex).indexOf(damonOriginalLines[i]);
            } else {
                damonOriginalLinesMapping[i] = null;
            }
        }
        let tabsMatchingRegex = new RegExp('^(\\t)+');
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
                const error = new Error(
                    "Error line " + (startLine + damonOriginalLinesMapping.indexOf(i) + 1) + ": trailing whitespace"
                );
                error.line = startLine + damonOriginalLinesMapping.indexOf(i) + 1;
                error.language = "DAMON";
                throw error;
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
                let error = new Error("Error line " + (startLine + 1) + ": bad formatting");
                error.line = startLine + 1;
                error.language = "DAMON";
                throw error;
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
                let error = new Error("Error line " + (startLine + 2) + ": bad formatting");
                error.line = startLine + 2;
                error.language = "DAMON";
                throw error;
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
            headless: headless,
            damonOriginalLinesMapping: damonOriginalLinesMapping
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
            let error = new Error("Error line " + (startLine + ((headless * 1) + 1)) + ": bad formatting");
            error.line = startLine + (headless * 1) + 1;
            error.language = "DAMON";
            throw error;
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
                let error = new Error(
                    "Error line " + (startLine  + damonOriginalLinesMapping.indexOf(i) + 1) + ": bad formatting"
                );
                error.line = startLine + damonOriginalLinesMapping.indexOf(i) + 1;
                error.language = "DAMON";
                throw error;
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
        const $ = this;
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
        const $ = this;
        var parent = $._findListItemCommonDirectParent(listItem, possibleParent);
        if (parent.level < level) {
            return parent;
        } else {
            return $._findListItemCommonAncestor(parent, possibleParent, level);
        }
    }

    /**
     * JSON primitives wrapping
     * @param {treeRoot} damonTree
     * @param {number} startLine
     * @param {boolean} indexPrefixKeys
     * @return {damonMap | damonArray}
     */
    _treeToMap(damonTree, startLine, indexPrefixKeys = false) {
        const $ = this;
        var treeItemIndex = 0;
        if (damonTree.content == '- {}') {
            let map = new Map();
            map.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            if (damonTree.headless) {
                map.headless = true;
            }
            return _recurse(damonTree, map);
        } else if (damonTree.content == '- []') {
            let array = [];
            array.damonOriginalLinesMapping = damonTree.damonOriginalLinesMapping;
            return _recurse(damonTree, array);
        }
        /**
         * @param {Object} tree
         * @param {Map<string, any>|Array<any>} jsonMap
         * @returns {Map<string, any>|Array<any>}
         */
        function _recurse(tree, jsonMap) {
            if (
                typeof tree !== 'object'
                || tree == null
                || Array.isArray(tree)
            ) {
                let errorLine =
                    (damonTree.headless * -1)
                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                    + 2;
                let error = new Error("Error line number " + (startLine + errorLine) + ": @param { {} } tree");
                error.line = startLine + errorLine;
                error.language = "DAMON";
                throw error;
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
                let errorLine =
                    (damonTree.headless * -1)
                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                    + 2;
                let error = new Error("Error line number " + (startLine  + errorLine) + ": @param { {} | [] } jsonMap");
                error.line = startLine + errorLine;
                error.language = "DAMON";
                throw error;
            }
            return jsonMap;
        }

        /**
         * @param {Object} tree
         * @param {Map<string, any>|Array<any>} jsonMap
         */
        function _mapHandler(tree, jsonMap) {
            for (let i = 0, c = tree.children.length; i < c; i++) {
                treeItemIndex++;
                if (tree.children[i].content.length == 0) {
                    // implicit value
                    let errorType = "";
                    if (tree.children[i].children.length > 0) {
                        errorType = "implicit map key";
                        if (indexPrefixKeys) {
                            jsonMap.set(treeItemIndex + "-", new Map());
                        } else {
                            jsonMap.set("", new Map());
                        }
                        // Storing formatting for auto-formatting
                        if (jsonMap.implicitMaps === undefined) {
                            jsonMap.implicitMaps = [];
                        }
                        jsonMap.implicitMaps.push("");
                        _recurse(tree.children[i], jsonMap.get(""));
                    } else {
                        errorType = "implicit null key";
                        if (indexPrefixKeys) {
                            jsonMap.set(indexPrefixKeys + "-", null);
                        } else {
                            jsonMap.set("", null);
                        }
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
                                    JSON.parse(
                                        `["${text.slice(0, -1 * text.match(/: +\[ *\]$/)[0].length)}"]`
                                    )[0];
                                if (indexPrefixKeys) {
                                    jsonMap.set(treeItemIndex + "-" + key, []);
                                } else {
                                    jsonMap.set(key, []);
                                }
                                if (tree.children[i].children.length > 0) {
                                    if (indexPrefixKeys) {
                                        _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                                    } else {
                                        _recurse(tree.children[i], jsonMap.get(key));
                                    }
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
                                        shortestPossibleKey = JSON.parse(`["${concatenation}"]`)[0];
                                        errorType = "list";
                                        longestPossibleArray =
                                            JSON.parse(`[${splitStringWithMatches.slice(j + 1).join('')}]`);
                                        if (Array.isArray(longestPossibleArray)) {
                                            break;
                                        }
                                    } catch (error) {
                                        // Doesn't matter until...
                                        if (j == k - 2) {
                                            let errorLine =
                                                (damonTree.headless * -1)
                                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                                + 2;
                                            let error = new Error(
                                                "Error line number " + (startLine + errorLine) + ": invalid inline list"
                                            );
                                            error.line = startLine + errorLine;
                                            error.language = "DAMON";
                                            throw error;
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
                                    if (indexPrefixKeys) {
                                        jsonMap.set(treeItemIndex + "-" + shortestPossibleKey, longestPossibleArray);
                                    } else {
                                        jsonMap.set(shortestPossibleKey, longestPossibleArray);
                                    }
                                    // Storing formatting for auto-formatting options
                                    if (jsonMap.damonInlineArrays === undefined) {
                                        jsonMap.damonInlineArrays = [];
                                    }

                                    if (indexPrefixKeys) {
                                        jsonMap.damonInlineArrays.push(treeItemIndex + "-" + shortestPossibleKey);
                                    } else {
                                        jsonMap.damonInlineArrays.push(shortestPossibleKey);
                                    }
                                } else {
                                    let errorLine =
                                        + (damonTree.headless * -1)
                                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                        + 2;
                                    let error = new Error(
                                        "Error line number " + (startLine + errorLine) + ": no nesting in inline lists"
                                    );
                                    error.line = startLine + errorLine;
                                    error.language = "DAMON";
                                    throw error;
                                }
                                if (tree.children[i].children.length > 0) {
                                    let errorLine =
                                        (damonTree.headless * -1)
                                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                        + 3;
                                    let error = new Error(
                                        "Error line number " + (startLine + errorLine)
                                        + ": inline lists can't have children"
                                    );
                                    error.line = startLine + errorLine;
                                    error.language = "DAMON";
                                    throw error;
                                }
                            }
                        } else if (
                            /: +\{ *\}$/.test(text)
                        ) { // Map
                            let key =
                                JSON.parse(
                                    `["${text.slice(0, -1 * text.match(/: +\{ *\}$/)[0].length)}"]`
                                )[0];
                            if (indexPrefixKeys) {
                                jsonMap.set(treeItemIndex + "-" + key, new Map());
                                _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                            } else {
                                jsonMap.set(key, new Map());
                                _recurse(tree.children[i], jsonMap.get(key));
                            }
                        } else {
                            let implicitProperty = false;
                            if (
                                /^.*: /.test(text)
                                && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "true"
                            ) { // True
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key = JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -4)}"]`)[0];
                                if (indexPrefixKeys) {
                                    jsonMap.set(treeItemIndex + "-" + key, true);
                                } else {
                                    jsonMap.set(key, true);
                                }
                            } else if (
                                /^.*: /.test(text)
                                && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "false"
                            ) { // False
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key = JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -5)}"]`)[0];

                                if (indexPrefixKeys) {
                                    jsonMap.set(treeItemIndex + "-" + key, false);
                                } else {
                                    jsonMap.set(key, false);
                                }
                            } else if (
                                /^.*: /.test(text)
                                && text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] === "null"
                            ) { // Null
                                let lastTextMatch =
                                        text.match(new RegExp(/: +/g))[text.match(new RegExp(/: +/g)).length - 1],
                                    key = JSON.parse(`["${text.slice(0, (-1 * lastTextMatch.length) -4)}"]`)[0];

                                if (indexPrefixKeys) {
                                    jsonMap.set(treeItemIndex + "-" + key, null);
                                } else {
                                    jsonMap.set(key, null);
                                }
                            } else if (
                                /^.*: +"/.test(text)
                                && text[text.length - 1] == '"'
                            ) { // String
                                let separatorMatches = text.match(new RegExp(/: +"/g));
                                if (
                                    separatorMatches.length == 1
                                ) {
                                    let key =
                                        JSON.parse(
                                            `["${text.split(separatorMatches[0])[0]}"]`
                                        )[0];
                                    errorType = "string";
                                    let childText =
                                        JSON.parse(
                                            `["${
                                                text.split(separatorMatches[0]).slice(1).join('').slice(0, -1)
                                            }"]`
                                        )[0];

                                    if (indexPrefixKeys) {
                                        jsonMap.set(treeItemIndex + "-" + key, childText);
                                    } else {
                                        jsonMap.set(key, childText);
                                    }
                                } else if (
                                    separatorMatches.length == 2
                                    && /: +"$/.test(text)
                                ) {
                                    let key =
                                        JSON.parse(
                                            `["${text.split(separatorMatches[0])[0]}"]`
                                        )[0];
                                    errorType = "string";
                                    let childText =
                                        JSON.parse(
                                            `["${
                                                text.split(separatorMatches[0]).slice(1).join('') + ': '
                                            }"]`
                                        )[0];

                                    if (indexPrefixKeys) {
                                        jsonMap.set(treeItemIndex + "-" + key, childText);
                                    } else {
                                        jsonMap.set(key, childText);
                                    }
                                } else {
                                    let errorLine =
                                        + (damonTree.headless * -1)
                                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                        + 2;
                                    let error = new Error(
                                        "Error line number " + (startLine + errorLine) + ": unescaped double quote"
                                    );
                                    error.line = startLine + errorLine;
                                    error.language = "DAMON";
                                    throw error;
                                }
                            } else if (
                                /^.*: /.test(text)
                                && isFinite(text.split(': ')[text.split(': ').length - 1])
                                && !isNaN(parseFloat(text.split(': ')[text.split(': ').length - 1]))
                                && Number.isFinite(text.split(': ')[text.split(': ').length - 1] * 1)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
                                && !Number.isNaN(text.split(': ')[text.split(': ').length - 1] * 1)
                            ) { // Number
                                let key = JSON.parse(`["${text.split(': ').slice(0, -1).join(': ')}"]`)[0];
                                errorType = "number";
                                let separatorMatches = text.match(new RegExp(/: +/g)),
                                    lastSeparatorMatch = separatorMatches[separatorMatches.length - 1],
                                    value = text.split(lastSeparatorMatch)[text.split(lastSeparatorMatch).length - 1];
                                if (
                                    value.indexOf(0) == 0
                                    && value.length > 1
                                    && value.indexOf('.') !== 1
                                ) {
                                    let errorLine =
                                        (damonTree.headless * -1)
                                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                        + 2;
                                    let error = new Error(
                                        "Error line number " + (startLine  + errorLine) + ": leading 0"
                                    );
                                    error.line = startLine + errorLine;
                                    error.language = "DAMON";
                                    throw error;
                                }
                                if (
                                    value.indexOf('_') > -1
                                ) {
                                    let errorLine =
                                        (damonTree.headless * -1)
                                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                        + 2;
                                    let error = new Error(
                                        "Error line number " + (startLine  + errorLine) + ": Numeric separator"
                                    );
                                    error.line = startLine + errorLine;
                                    error.language = "DAMON";
                                    throw error;
                                }
                                let number = JSON.parse(`[${text.split(': ')[text.split(': ').length - 1] * 1}]`)[0];
                                if (indexPrefixKeys) {
                                    jsonMap.set(treeItemIndex + "-" + key, number);
                                } else {
                                    jsonMap.set(key, number);
                                }
                            } else if (
                                /^.*: /.test(text)
                                && (
                                    text.split(new RegExp(/: +/))[text.split(new RegExp(/: +/)).length - 1] * 1
                                ) === Infinity
                            ) {
                                let key = JSON.parse(`["${text.split(': ').slice(0, -1).join(': ')}"]`)[0];
                                errorType = "infinity";
                                // JSON.parse() throws at Infinity
                                let number = JSON.parse(`[${text.split(': ')[text.split(': ').length - 1] * 1}]`);
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
                                            if (
                                                (
                                                    accumulator.indexOf(0) == 0
                                                    && accumulator.length > 1
                                                    && accumulator.indexOf('.') !== 1
                                                ) || (
                                                    accumulator.indexOf('_') > -1
                                                )
                                            ) {
                                                validValue = true;
                                                valueLength = accumulator.length;
                                            }
                                        } else {
                                            break;
                                        }
                                    }
                                }
                                if (validValue) {
                                    // valid value
                                    JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                                    // valid key
                                    if ($.pedantic) {
                                        // pedantic
                                        // missing separator error
                                        let errorLine =
                                            (damonTree.headless * -1)
                                            + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                                        let error = new Error(
                                            "Error line number " + (startLine  + errorLine) + ": missing separator"
                                        );
                                        error.line = startLine + errorLine;
                                        error.language = "DAMON";
                                        error.errorType = "pedantic";
                                        throw error;
                                    } else {
                                        // implicit value
                                        implicitProperty = true;
                                        if (tree.children[i].children.length > 0) {
                                            errorType = "implicit map key";
                                            let key = JSON.parse(`["${text}"]`)[0];

                                            if (indexPrefixKeys) {
                                                jsonMap.set(treeItemIndex + "-" + key, new Map());
                                            } else {
                                                jsonMap.set(key, new Map());
                                            }
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitMaps === undefined) {
                                                jsonMap.implicitMaps = [];
                                            }

                                            if (indexPrefixKeys) {
                                                jsonMap.implicitMaps.push(treeItemIndex + "-" + key);
                                                _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                                            } else {
                                                jsonMap.implicitMaps.push(key);
                                                _recurse(tree.children[i], jsonMap.get(key));
                                            }
                                        } else {
                                            errorType = "implicit null key";
                                            let key = JSON.parse(`["${text}"]`)[0];

                                            if (indexPrefixKeys) {
                                                jsonMap.set(treeItemIndex + "-" + key, null);
                                            } else {
                                                jsonMap.set(key, null);
                                            }
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitNulls ===  undefined) {
                                                jsonMap.implicitNulls = [];
                                            }

                                            if (indexPrefixKeys) {
                                                jsonMap.implicitNulls.push(treeItemIndex + "-" + key);
                                            } else {
                                                jsonMap.implicitNulls.push(key);
                                            }
                                        }
                                    }
                                } else {
                                    // invalid value
                                    let string = JSON.parse(`["${text.slice(0, -1 * valueLength)}"]`)[0];
                                    // valid as a key
                                    if ($.pedantic) {
                                        // pedantic
                                        if (/: +$/.test(string)) {
                                            // key end has separator
                                            // bad value
                                            let errorLine =
                                                (damonTree.headless * -1)
                                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                                            let error = new Error(
                                                "Error line number " + (startLine + errorLine) + ": bad value"

                                            );
                                            error.line = startLine + errorLine;
                                            error.language = "DAMON";
                                            error.errorType = "pedantic";
                                            throw error;
                                        } else {
                                            // key end lacks separator
                                            // missing separator
                                            let errorLine =
                                                (damonTree.headless * -1)
                                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex);
                                            let error = new Error(
                                                "Error line number " + (startLine + errorLine) + ": missing separator"
                                            );
                                            error.line = startLine + errorLine;
                                            error.language = "DAMON";
                                            error.errorType = "pedantic";
                                            throw error;
                                        }
                                    } else {
                                        // not pedantic
                                        // use as implicit
                                        implicitProperty = true;
                                        if (tree.children[i].children.length > 0) {
                                            errorType = "implicit map key";
                                            let key = JSON.parse(`["${text}"]`)[0];
                                            if (indexPrefixKeys) {
                                                jsonMap.set(treeItemIndex + "-" + key, new Map());
                                            } else {
                                                jsonMap.set(key, new Map());
                                            }
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitMaps === undefined) {
                                                jsonMap.implicitMaps = [];
                                            }

                                            if (indexPrefixKeys) {
                                                jsonMap.implicitMaps.push(treeItemIndex + "-" + key);
                                                _recurse(tree.children[i], jsonMap.get(treeItemIndex + "-" + key));
                                            } else {
                                                jsonMap.implicitMaps.push(key);
                                                _recurse(tree.children[i], jsonMap.get(key));
                                            }
                                        } else {
                                            errorType = "implicit null key";
                                            let key = JSON.parse(`["${text}"]`)[0];

                                            if (indexPrefixKeys) {
                                                jsonMap.set(treeItemIndex + "-" + key, null);
                                            } else {
                                                jsonMap.set(key, null);
                                            }
                                            // Storing formatting for auto-formatting
                                            if (jsonMap.implicitNulls ===  undefined) {
                                                jsonMap.implicitNulls = [];
                                            }

                                            if (indexPrefixKeys) {
                                                jsonMap.implicitNulls.push(treeItemIndex + "-" + key);
                                            } else {
                                                jsonMap.implicitNulls.push(key);
                                            }
                                        }
                                    }
                                }
                            }
                            if (
                                !implicitProperty
                                && tree.children[i].children.length > 0
                            ) {
                                let errorLine =
                                    (damonTree.headless * -1)
                                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                    + 3;
                                let error = new Error(
                                    "Error line number " + (startLine + errorLine)
                                    + ": missing container or excess indentation"
                                );
                                error.line = startLine + errorLine;
                                error.language = "DAMON";
                                throw error;
                            }
                        }
                    } catch (error) {
                        if (error.language === undefined) {
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            console.error(
                                "Error line number " + (startLine + errorLine)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line = startLine + errorLine;
                            error.language = "JSON";
                            error.type = errorType;
                        }
                        throw error;
                    }
                }
            }
        }

        /**
         * @param {Object} tree
         * @param {Map<string, any>|Array<any>} jsonMap
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
                                let errorLine =
                                    (damonTree.headless * -1)
                                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                    + 2;
                                let err = new Error(
                                    "Error line number " + (startLine + errorLine) + ": invalid inline lists"
                                );
                                err.line = startLine + errorLine;
                                err.language = "JSON";
                                err.type = "list";
                                throw err;
                            }
                            let arrayOfPrimitives =
                                    inlineArray.every(function (item) {
                                        if (item === true) {
                                            return true;
                                        } else if (item === false) {
                                            return true;
                                        } else if (item === null) {
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
                                if (jsonMap.damonInlineArrays === undefined) {
                                    jsonMap.damonInlineArrays = [];
                                }
                                jsonMap.damonInlineArrays.push(i);
                            } else {
                                let errorLine =
                                    (damonTree.headless * -1)
                                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                    + 2;
                                let error = new Error(
                                    "Error line number " + (startLine + errorLine) + ": no nesting in inline lists"
                                );
                                error.line = startLine + errorLine;
                                error.language = "DAMON";
                                throw error;
                            }
                            if (tree.children[i].children.length > 0) {
                                let errorLine =
                                    (damonTree.headless * -1)
                                    + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                    + 3;
                                let error = new Error(
                                    "Error line number " + (startLine + errorLine) + ": inline lists can't have children"
                                );
                                error.line = startLine + errorLine;
                                error.language = "DAMON";
                                throw error;
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
                            jsonMap.push(JSON.parse(`[${text.trimStart()}]`)[0]);
                        } catch (error) {
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            console.error(
                                "Error line number " + (startLine + errorLine)
                                + ": not JSON-compliant, detailed error follows"
                            );
                            error.line = startLine + errorLine;
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
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            let error = new Error("Error line number " + (startLine + errorLine) + ": leading 0");
                            error.line = startLine + errorLine;
                            error.language = "DAMON";
                            throw error;
                        }
                        if (
                            text.indexOf('_') > -1
                        ) {
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            let error = new Error("Error line number " + (startLine + errorLine) + ": leading 0");
                            error.line = startLine + errorLine;
                            error.language = "DAMON";
                            throw error;
                        }
                        try {
                            jsonMap.push(JSON.parse(`[${text * 1}]`)[0]);
                        } catch (error) {
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            console.error(
                                "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                            );
                            error.line = startLine + errorLine;
                            error.language = "JSON";
                            error.type = "number";
                            throw error;
                        }
                    } else if (text * 1 === Infinity) {
                        // Make JSON.parse throw at Infinity
                        try {
                            JSON.parse(text * 1);
                        } catch (error) {
                            let errorLine =
                                (damonTree.headless * -1)
                                + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                                + 2;
                            console.error(
                                "Error line number " + (startLine + errorLine) + ": not JSON-compliant, detailed error follows"
                            );
                            error.line = startLine + errorLine;
                            error.language = "JSON";
                            error.type = "infinity";
                            throw error;
                        }
                    } else {
                        let errorLine =
                            (damonTree.headless * -1)
                            + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                            + 2;
                        let error = new Error(
                            "Error line number " + (startLine + errorLine) + ": list items can't have a key"
                        );
                        error.line = startLine + errorLine;
                        error.language = "DAMON";
                        throw error;
                    }
                } else {
                    let errorLine =
                        (damonTree.headless * -1)
                        + damonTree.damonOriginalLinesMapping.indexOf(treeItemIndex - 1)
                        + 2;
                    let error = new Error("Error line number " + (startLine + errorLine) + ": empty list node");
                    error.line = startLine + errorLine;
                    error.language = "DAMON";
                    throw error;
                }
            }
        }
    }

    /**
     * @param {damonValue} jsonMap
     * @param {boolean} pristine
     * @returns {string}
     */
    mapToDamon(jsonMap, pristine) {
        const $ = this;
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
        // Parsing-check
        $.damonToMap(list.slice(0, -1));
        if (jsonMap.headless) {
            let damonLines = $._getLines(list);
            damonLines = damonLines.slice(1);
            for (let i = 0, c = damonLines.length; i < c; i++) {
                damonLines[i] = damonLines[i].slice(4);
            }
            return damonLines.join('\n').slice(0, -1);
        }
        return list.slice(0, -1); // last linefeed
        /**
         * @param {Map<string, any>|Array<any>} jsonMap
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
                let mapKeys = Array.from(jsonMap.keys()),
                    implicitNullsMap = false;
                if (
                    jsonMap.implicitNulls !== undefined
                    && jsonMap.implicitNulls.length === mapKeys.length
                ) {
                    implicitNullsMap = true;
                }
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
                                ( // No nesting, fits on an archivable line
                                    value.length == arrayOfPrimitives.length
                                    && (level * 4 + 2 + value.join(', ').length + (nullsCounter * 4)) <= 80
                                ) || ( // Inlining specified from parsing
                                    pristine
                                    && jsonMap.damonInlineArrays !== undefined
                                    && jsonMap.damonInlineArrays.indexOf(key) > -1
                                )
                            ) {
                                let line =
                                    '['
                                    + value.map(function (x) {
                                        if (typeof x == 'string') {
                                            x = JSON.stringify(x);
                                        }
                                        return x;
                                    }).join(', ')
                                    + ']';
                                list +=
                                    '    '.repeat(level)
                                    + '- ' + JSON.stringify(key).slice(1, -1) + ': ' + line + '\n';
                            } else {
                                list += '    '.repeat(level) + '- ' + JSON.stringify(key).slice(1, -1) + ': []\n';
                                _recurse(value, level + 1);
                            }
                        } else {
                            list += '    '.repeat(level) + '- ' + JSON.stringify(key).slice(1, -1) + ': {}\n';
                            _recurse(value, level + 1);
                        }
                    } else {
                        if (implicitNullsMap) {
                            list += '    '.repeat(level) + '- ' + JSON.stringify(key).slice(1, -1) + "\n";
                        } else {
                            list += '    '.repeat(level) + '- ' + JSON.stringify(key).slice(1, -1) + ': ';
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
                                list += JSON.stringify(value) + '\n';
                            }
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
                            if ((
                                    jsonMap[i].length == arrayOfPrimitives.length
                                    && (level * 4 + 2 + jsonMap[i].join(', ').length + (nullsCounter * 4)) <= 80
                                ) || (
                                    pristine
                                    && jsonMap.damonInlineArrays !== undefined
                                    && jsonMap.damonInlineArrays.indexOf(i) > -1
                                )
                            ) {
                                let line =
                                    '['
                                    + jsonMap[i].map(function (x) {
                                        if (typeof x == 'string') {
                                            x = JSON.stringify(x);
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
                            list += '    '.repeat(level) + '- ' + JSON.stringify(jsonMap[i]) + '\n';
                        }
                    }
                }
            }
        }
    }

    /**
     * @param {damonValue} jsonMap
     * @returns {string}
     */
    mapToJSON(jsonMap) {
        const $ = this;
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
                jsonMap = JSON.stringify(jsonMap);
            }
            JSON.parse(jsonMap);
            return jsonMap;
        }
        /**
         * @param {Map<string, any>|Array<any>} jsonMap
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
                                list += '    '.repeat(level) + `${JSON.stringify(key)}: [\r\n`;
                                _recurse(value, level + 1);
                                list += '    '.repeat(level) + `]`;
                            } else {
                                list += '    '.repeat(level) + `${JSON.stringify(key)}: []`;
                            }
                        } else {
                            if (Array.from(value.keys()).length > 0) {
                                list += '    '.repeat(level) + `${JSON.stringify(key)}: {\r\n`;
                                _recurse(value, level + 1);
                                list += '    '.repeat(level) + `}`;
                            } else {
                                list += '    '.repeat(level) + `${JSON.stringify(key)}: {}`;
                            }
                        }
                    } else {
                        if (value === true) {
                            list += '    '.repeat(level) + `${JSON.stringify(key)}` + ': ' + "true";
                        } else if (value === false) {
                            list += '    '.repeat(level) + `${JSON.stringify(key)}` + ': ' + "false";
                        } else if (value === null) {
                            list += '    '.repeat(level) + `${JSON.stringify(key)}` + ': ' + "null";
                        } else if (
                            Number.isFinite(value)
                            && !Number.isNaN(value)
                        ) {
                            list += '    '.repeat(level) + `${JSON.stringify(key)}` + ': ' + value;
                        } else {
                            list += '    '.repeat(level) + `${JSON.stringify(key)}` + ': ' + JSON.stringify(value);
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
                            list += '    '.repeat(level) + JSON.stringify(jsonMap[i]);
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
     * @param {string} damonString
     * @returns {Array<Array<string|number>>} pathsList
     */
    getPathsList(damonString) {
        const $ = this;
        let damonMap = $.damonToMap(damonString),
            pathsList = [];
        _walkAndPushPaths(damonMap);
        return pathsList;

        /**
         * @param {Map<string, any>|Array<any>} map
         * @param {Array<string|number>} targetPath
         * @param {Array<string|number>} [currentPath=[]]
        */
        function _walkAndPushPaths(map, currentPath = []) {
            if (
                typeof map === 'object'
                && map !== null
                && !Array.isArray(map)
                && map instanceof Map
                && map.constructor === Map
            ) {
                for (const [key, value] of map) {
                    if (
                        typeof value === 'object'
                        && value !== null
                        && !Array.isArray(value)
                        && value instanceof Map
                        && value.constructor === Map
                        && Array.from(value.keys()).length
                    ) {
                        pathsList.push(currentPath.concat(key));
                        _walkAndPushPaths(value, currentPath.concat([key]));
                    } else if (
                        Array.isArray(value)
                        && (
                            map.damonInlineArrays == undefined
                            || map.damonInlineArrays.indexOf(key) === -1
                        ) && value.length
                    ) {
                        pathsList.push(currentPath.concat(key));
                        _walkAndPushPaths(value, currentPath.concat([key]));
                    } else {
                        pathsList.push(currentPath.concat(key).concat(value));
                    }
                }
            } else {
                for (let i = 0, c = map.length; i < c; i++) {
                    if (
                        typeof map[i] === 'object'
                        && map[i] !== null
                        && !Array.isArray(map[i])
                        && map[i] instanceof Map
                        && map[i].constructor === Map
                        && Array.from(map[i].keys()).length
                    ) {
                        pathsList.push(currentPath.concat(i));
                        _walkAndPushPaths(map[i], currentPath.concat([i]));
                    } else if (
                        Array.isArray(map[i])
                        && (
                            map.damonInlineArrays == undefined
                            || map.damonInlineArrays.indexOf(i) === -1
                        ) && map[i].length
                    ) {
                        pathsList.push(currentPath.concat(i));
                        _walkAndPushPaths(map[i], currentPath.concat([i]));
                    } else {
                        pathsList.push(currentPath.concat(map[i]));
                    }
                }
            }
        }
    }

    /**
     * @param {string} damon
     * @param {Array<string|number>} path
     * @param {number} lineOffset
     * @param {boolean} inlineArray
     * @returns {Array<Array<number>>}
     */
    getRangeFromPath(damon, path, lineOffset = 0, inlineArray = false, prefixedMap = false) {
        const $ = this;
        let damonMap = $.damonToMap(damon, 0, prefixedMap),
            mapIndex = -1,
            found = false;
        _incrementMapIndexUntilReaching(damonMap, path);
        let totalLines = $.mapIndexToLine(damonMap, mapIndex);
        let lineText = $._getLines(damon)[totalLines],
            start = 0,
            end = lineText.length;
        if (prefixedMap) {
            for (let i = 0, c = path.length; i < c; i++) {
                if (typeof path[i] === 'string')
                    path[i] = path[i].split('-').slice(1).join('-');
            }
        }
        if (path.length === 1) {
            if (typeof path[path.length - 1] == 'string') {
                start =
                    lineText.length
                    - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
            } else {
                start = lineText.length - lineText.trimStart().slice(2).length;
            }
        } else {
            if (typeof path[path.length - 2] == 'string') {
                if (typeof path[path.length - 1] == 'string') {
                    start =
                        lineText.length
                        - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
                } else {
                    if (
                        inlineArray
                    ) {
                        let arrayText = lineText.trimStart().slice(2 + path[path.length - 2].length + 2),
                            array = JSON.parse(arrayText),
                            cumulativeRegex = '^( *\\[ *';
                        for (let i = 0, c = path[path.length - 1] + 1; i < c; i++) {
                            let arrayValue = '' + array[i];
                            if (typeof array[i] === 'string')
                                arrayValue = '"' + arrayValue + '"';
                            cumulativeRegex += arrayValue;
                            if (i < c - 1)
                                cumulativeRegex += ', *';
                        }
                        cumulativeRegex += ')';
                        let cumulativeMatch = arrayText.match(new RegExp(cumulativeRegex))[1],
                            value = array[path[path.length - 1]],
                            valueLength = ('' + value).length;
                        if (typeof value === 'string')
                            valueLength += 2;
                        start = lineText.length - arrayText.length + cumulativeMatch.length - valueLength;
                        end = start + valueLength;
                    } else {
                        start = lineText.length - lineText.trimStart().slice(2).length;
                    }
                }
            } else {
                if (typeof path[path.length - 1] == 'string') {
                    start =
                        lineText.length
                        - lineText.trimStart().slice(2 + path[path.length - 1].length + 2).trimStart().length;
                } else {
                    if (inlineArray
                    ) {
                        let arrayText = lineText.trimStart().slice(2),
                            array = JSON.parse(arrayText),
                            cumulativeRegex = '^( *\\[ *';
                        for (let i = 0, c = path[path.length - 1] + 1; i < c; i++) {
                            let arrayValue = '' + array[i];
                            if (typeof array[i] === 'string')
                                arrayValue = '"' + arrayValue + '"';
                            cumulativeRegex += arrayValue;
                            if (i < c - 1)
                                cumulativeRegex += ', *';
                        }
                        cumulativeRegex += ')';
                        let cumulativeMatch = arrayText.match(new RegExp(cumulativeRegex))[1],
                            value = array[path[path.length - 1]],
                            valueLength = ('' + value).length;
                        if (typeof value === 'string')
                            valueLength += 2;
                        start = lineText.length - arrayText.length + cumulativeMatch.length - valueLength;
                        end = start + valueLength;
                    } else {
                        start = lineText.length - lineText.trimStart().slice(2).length;
                    }
                }
            }
        }
        return [[totalLines + lineOffset, start], [totalLines + lineOffset, end]];
        /**
         * @param {Map<string, any>|Array<any>} map
         * @param {Array<string|number>} targetPath
         * @param {Array<string|number>} [currentPath=[]]
        */
        function _incrementMapIndexUntilReaching(map, targetPath, currentPath = []) {
            mapIndex += 1;
            if (
                typeof map === 'object'
                && map !== null
                && !Array.isArray(map)
                && map instanceof Map
                && map.constructor === Map
            ) {
                for (const [key, value] of map) {
                    if (found === true) {
                        return;
                    }
                    mapIndex += 1;
                    if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([key]))) {
                        found = true;
                        return;
                    }
                    if (
                        typeof value === 'object'
                        && value !== null
                        && !Array.isArray(value)
                        && value instanceof Map
                        && value.constructor === Map
                        && Array.from(value.keys()).length
                    ) {
                        mapIndex -= 1;
                        _incrementMapIndexUntilReaching(value, targetPath, currentPath.concat([key]));
                    } else if (Array.isArray(value) && value.length) {
                        if (
                            map.damonInlineArrays == undefined
                            || map.damonInlineArrays.indexOf(key) === -1
                        ) {
                            mapIndex -= 1;
                            _incrementMapIndexUntilReaching(value, targetPath, currentPath.concat([key]));
                        } else if (
                            JSON.stringify(targetPath.slice(0, -1)) === JSON.stringify(currentPath.concat([key]))
                        ) {
                            found = true;
                            return;
                        }
                    }
                }
            } else {
                for (let i = 0, c = map.length; i < c; i++) {
                    if (found == true) {
                        return;
                    }
                    mapIndex += 1;
                    if (JSON.stringify(targetPath) === JSON.stringify(currentPath.concat([i]))) {
                        found = true;
                        return;
                    }
                    if (
                        typeof map[i] === 'object'
                        && map[i] !== null
                        && !Array.isArray(map[i])
                        && map[i] instanceof Map
                        && map[i].constructor === Map
                        && Array.from(map[i].keys()).length
                    ) {
                        mapIndex -= 1;
                        _incrementMapIndexUntilReaching(map[i], targetPath, currentPath.concat([i]));
                    } else if (Array.isArray(map[i]) && map[i].length) {
                        if (
                            map.damonInlineArrays == undefined
                            || map.damonInlineArrays.indexOf(i) === -1
                        ) {
                            mapIndex -= 1;
                            _incrementMapIndexUntilReaching(map[i], targetPath, currentPath.concat([i]));
                        } else if (
                            JSON.stringify(targetPath.slice(0, -1)) === JSON.stringify(currentPath.concat([i]))
                        ) {
                            found = true;
                            return;
                        }
                    }
                }
            }
        }
    }

    /**
     *
     * @param {string} damon
     * @param {Array<number} coordinates
     * @returns {Array<Array<number>>}
     */
    getTokenFromCoordinates(damon, coordinates) {
        const $ = this;
        let token = {};
        let damonLines = $._getLines(damon).slice(0, coordinates[0]);
        if (damonLines[coordinates[0] -  1] == '') {
            token.type = 'newline';
            token.path = null;
            token.range = [coordinates, coordinates];
            return token;
        }
        if (/^[ \t]+$/.test(damonLines[coordinates[0] -  1])) {
            token.type = 'indentation';
            token.path = null;
            token.range = [[coordinates[0], 1], [coordinates[0], damonLines[damonLines.length - 1].length]];
            return token;
        }
        if (/^[ \t]+/.test(damonLines[coordinates[0] -  1].slice(0, coordinates[1] - 1))) {
            token.type = 'indentation';
            token.range = [
                [coordinates[0], 1],
                [coordinates[0], damonLines[coordinates[0] -  1].match(/^[ \t]+/)[0].length]
            ];
        }
        if (/^ *\/\//.test(damonLines[coordinates[0] -  1])) {
            if (token.type == 'indentation') {
                token.path = null;
                return token;
            }
            token.type = 'comment';
            token.path = null;
            token.range = [
                [[coordinates[0], damonLines[coordinates[0] -  1].split('//')[0].length]],
                [[coordinates[0], damonLines[coordinates[0] -  1].length]]
            ];
            return token;
        }

        if (damonLines.length == 1) {
            try {
                let jsonValue = JSON.parse(damon);
                if (
                    jsonValue === true
                    || jsonValue === false
                    || jsonValue === null
                    || typeof jsonValue === 'string'
                    || typeof jsonValue === 'number'
                ) {
                    let leftPadding = damon.match(/^ */)[0].length,
                        rightPadding = damon.match(/ *$/)[0].length;
                    token.type = 'null';
                    if (typeof jsonValue !== 'object')
                        token.type = typeof jsonValue;
                    token.path = null;
                    token.range = [[0, leftPadding], [0, damon.length - rightPadding]];
                    return token;
                }
            } catch (error) {
                // Continue
            }
        }
        let damonMap = $.damonToMap(damonLines.join('\n')),
            currentLevelKeys = Array.from(damonMap.keys()),
            path = [],
            structures = [];
        while (currentLevelKeys.length) {
            let key = currentLevelKeys[currentLevelKeys.length - 1];
            path.push(key);
            if (
                typeof damonMap === 'object'
                && damonMap !== null
                && !Array.isArray(damonMap)
                && damonMap instanceof Map
                && damonMap.constructor === Map
            ) {
                structures.push(damonMap);
                damonMap = damonMap.get(key);
            } else if (Array.isArray(damonMap)) {
                structures.push(damonMap);
                damonMap = damonMap[key];
            }
            if (
                damonMap === true
                || damonMap === false
                || damonMap === null
                || typeof damonMap === 'string'
                || typeof damonMap === 'number'
            ) {
                break;
            }
            currentLevelKeys = Array.from(damonMap.keys());
        }
        token.path = path;
        let valueRange = [],
            nextToLastStructure = structures[structures.length - 2];
        if (
            nextToLastStructure
            && nextToLastStructure.damonInlineArrays.length
            && nextToLastStructure.damonInlineArrays.indexOf(path[path.length - 2]) !== -1
        ) {
            valueRange = $.getRangeFromPath(damon, path, 0, true);
        } else {
            valueRange = $.getRangeFromPath(damon, path);
        }
        if (typeof path[path.length - 1] == 'string') {
            if (coordinates[1] < valueRange[0][1]) {
                let propertyEndRange =
                damonLines[coordinates[0] - 1].slice(0, (-1 * (valueRange[1][1] - valueRange[0][1])) - 1).length;
                if (coordinates[1]  < propertyEndRange) {
                    // find property start range
                    let propertyStartRange = damonLines[coordinates[0] -  1].match(/^[ \t]+/)[0].length + 3;
                    if (coordinates[1] >= propertyStartRange) {
                        token.type = 'property';
                        token.range = [[coordinates[0], propertyStartRange], [coordinates[0], propertyEndRange]];
                    } else {
                        token.type = 'hyphen';
                        token.range = [
                            [coordinates[0], propertyStartRange - 2],
                            [coordinates[0], propertyStartRange - 1]
                        ];
                    }
                } else {
                    token.type = 'separator';
                    token.range = [[coordinates[0], propertyEndRange + 1], [coordinates[0], valueRange[0][1] - 1]];
                }
            } else {
                // inline array or damonValue
                token.type = '?';
                token.range = valueRange;
            }
        } else {
            if (coordinates[1] < valueRange[0][1]) {
                token.type = 'hyphen';
                let hyphenStartRange = damonLines[coordinates[0] -  1].match(/^[ \t]+/)[0].length + 1;
                token.range = [
                    [coordinates[0], hyphenStartRange],
                    [coordinates[0], hyphenStartRange + 1]
                ];
            } else {
                token.type = '?';
                token.range = valueRange;
            }
        }
        return token;
    }

    /**
     * @param {damonValue} map
     * @param {number} mapIndex
     * @returns number
     */
    mapIndexToLine(map, mapIndex) {
        let totalLines = 0,
            match = 0;
        if (map.headless)
            mapIndex -= 1;
        for (let i = 0, c = map.damonOriginalLinesMapping.length; i < c; i++) {
            if (map.damonOriginalLinesMapping[i] !== null) {
                match++;
            }
            if (match == mapIndex) {
                totalLines = i + 1;
                break;
            }
        }
        return totalLines;
    }


    /**
     * @param {string} damonString - remember to format indentation
     * @param {number} lineOffset
     * @returns {Array<Array<string|number>>} pathsList
     */
    getRangesMap(damonString, damonMap, lineOffset = 0, prefixedMap = false) {
        const $ = this;
        let damonLines = $._getLines(damonString),
            rangesMap = new Map();
        _walk(damonMap, [], rangesMap);
        return rangesMap;

        /**
         * @param {Map<string, any>|Array<any>} map
         * @param {Array<string|number>} targetPath
         * @param {Array<string|number>} [currentPath=[]]
        */
        function _walk(map, currentPath = [], rangesMap, inlineArray = false) {
            if (
                typeof map === 'object'
                && map !== null
                && !Array.isArray(map)
                && map instanceof Map
                && map.constructor === Map
            ) {
                for (const [key, value] of map) {
                    if (
                        typeof value === 'object'
                        && value !== null
                        && !Array.isArray(value)
                        && value instanceof Map
                        && value.constructor === Map
                        && Array.from(value.keys()).length
                    ) {
                        let valueRange =
                            $.getRangeFromPath(damonString, currentPath.concat(key), lineOffset, false, prefixedMap),
                            keyStart = damonLines[valueRange[0][0] - lineOffset].match('^([ \t]*)')[1].length + 2,
                            keyLength = prefixedMap ? key.length - (key.split('-')[0].length + 1) : key.length,
                            keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]],
                            keyRangeString = JSON.stringify(keyRange);
                        rangesMap.set(keyRangeString, new Map());
                        _walk(value, currentPath.concat([key]), rangesMap.get(keyRangeString));
                    } else if (
                        Array.isArray(value)
                        && value.length
                    ) {
                        let valueRange = [];
                            valueRange =
                                $.getRangeFromPath(
                                    damonString, currentPath.concat(key), lineOffset, false, prefixedMap
                                );
                        let keyStart = damonLines[valueRange[0][0] - lineOffset].match('^([ \t]*)')[1].length + 2,
                            keyLength = prefixedMap ? key.length - (key.split('-')[0].length + 1) : key.length,
                            keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]],
                            keyRangeString = JSON.stringify(keyRange);
                        rangesMap.set(keyRangeString, new Map());
                        if (
                            map.damonInlineArrays !== undefined
                            && map.damonInlineArrays.indexOf(key) > -1
                        ) {
                            _walk(value, currentPath.concat([key]), rangesMap.get(keyRangeString), true);
                        } else {
                            _walk(value, currentPath.concat([key]), rangesMap.get(keyRangeString));
                        }
                    } else {
                        if (inlineArray) {
                            let valueRange =
                                $.getRangeFromPath(damonString, currentPath.concat(key), lineOffset, false),
                                keyStart = damonLines[valueRange[0][0] - lineOffset].match('^([ \t]*)')[1].length + 2,
                                keyLength = prefixedMap ? key.length - (key.split('-')[0].length + 1) : key.length,
                                keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]],
                                keyRangeString = JSON.stringify(keyRange);
                            rangesMap.set(
                                keyRangeString,
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(key), lineOffset, false, prefixedMap
                                    )
                                )
                            );
                        } else {
                            let valueRange =
                                $.getRangeFromPath(
                                    damonString, currentPath.concat(key), lineOffset, false, prefixedMap
                                ),
                                keyStart = damonLines[valueRange[0][0] - lineOffset].match('^([ \t]*)')[1].length + 2,
                                keyLength = prefixedMap ? key.length - (key.split('-')[0].length + 1) : key.length,
                                keyRange = [[valueRange[0][0], keyStart], [valueRange[0][0], keyStart + keyLength]],
                                keyRangeString = JSON.stringify(keyRange);
                            rangesMap.set(
                                keyRangeString,
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(key), lineOffset, false, prefixedMap
                                    )
                                )
                            );
                        }
                    }
                }
            } else {
                for (let i = 0, c = map.length; i < c; i++) {
                    if (
                        typeof map[i] === 'object'
                        && map[i] !== null
                        && !Array.isArray(map[i])
                        && map[i] instanceof Map
                        && map[i].constructor === Map
                        && Array.from(map[i].keys()).length
                    ) {
                        let keyRangeString =
                            JSON.stringify(
                                $.getRangeFromPath(damonString, currentPath.concat(i), lineOffset, false, prefixedMap)
                            );
                        rangesMap.set(keyRangeString, new Map());
                        _walk(map[i], currentPath.concat([i]), rangesMap.get(keyRangeString));
                    } else if (
                        Array.isArray(map[i])
                        && map[i].length
                    ) {
                        let keyRangeString = '';
                            keyRangeString =
                        JSON.stringify(
                            $.getRangeFromPath(damonString, currentPath.concat(i), lineOffset, false, prefixedMap)
                        );
                        rangesMap.set(keyRangeString, new Map());
                        if (
                            map.damonInlineArrays !== undefined
                            && map.damonInlineArrays.indexOf(i) > -1
                        ) {
                            _walk(map[i], currentPath.concat([i]), rangesMap.get(keyRangeString), true);
                        } else {
                            _walk(map[i], currentPath.concat([i]), rangesMap.get(keyRangeString));
                        }
                    } else {
                        if (inlineArray) {
                            let keyRangeString =
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(i), lineOffset, true, prefixedMap
                                    )
                                );
                            rangesMap.set(
                                keyRangeString,
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(i), lineOffset, true, prefixedMap
                                    )
                                )
                            );
                        } else {
                            let keyRangeString =
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(i), lineOffset, false, prefixedMap
                                    )
                                );
                            rangesMap.set(
                                keyRangeString,
                                JSON.stringify(
                                    $.getRangeFromPath(
                                        damonString, currentPath.concat(i), lineOffset, false, prefixedMap
                                    )
                                )
                            );
                        }
                    }
                }
            }
        }
    }
};
