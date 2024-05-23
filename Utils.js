import * as DOMPurify from 'dompurify';

//#### Utils
module.exports =
class Utils {
    //# MODEL
    /**
    * @param {string} id
    * @param {{ mode: string; }} app
    */
    constructor() {
        let $ = this;
    }
    /**
     * @param {string} string
     * @returns {string}
     */
    escape(string) {
        return string
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /**
     * @param {map|array} jsonMap
     * @param {boolean} safeHTML
     * @returns {object} DOM
     */
    mapToHtmlList(jsonMap, safeHTML = false, jsonSchema = undefined) {
        let $ = this;
        var jsonItemIndex = 0,
            list = document.createElement('ul'),
            schema;
        if (jsonSchema !== undefined) {
            schema = JSON.parse(jsonSchema);
        }
        list.className = 'DAMON-List';
        recurse(jsonMap, list);
        return list;
        /**
         * @param {map|array} jsonMap
         * @param {object} listItem
         * @returns {object} DOM
         */
        function recurse(jsonMap, listItem) {
            if (
                typeof listItem !== 'object'
                || listItem == null
                || Array.isArray(listItem)
            ) {
                throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                if (listItem.tagName == "UL") {
                    for (const [key, value] of jsonMap) {
                        let newList = document.createElement('ul'),
                            newDiv = document.createElement('code'),
                            keySpan = document.createElement('span'),
                            newListItem = document.createElement('li');
                        keySpan.className = "type-key";
                        if (/^https?:\/\//.test(key)) { 
                            let keyLink = DOMPurify.sanitize(`<a href="${ key }">${ key }</a>`);
                            keySpan.innerHTML = keyLink;
                        } else {
                            if (
                                jsonSchema !== undefined
                                && key in schema['@context']
                            ) {
                                keySpan.innerHTML =
                                    DOMPurify.sanitize(
                                        `<a href="${ schema['@context'][key]['@id'] }">${ key }</a>`
                                    );
                            } else {
                                keySpan.textContent = key;
                            }
                        }
                        if (
                            typeof value === 'object'
                            && value !== null
                        ) {
                            if (Array.isArray(value)) {
                                if (
                                    jsonMap.inlineArrays !== undefined
                                    && jsonMap.inlineArrays.indexOf(key) > -1
                                ) {
                                    newDiv.innerHTML = keySpan.outerHTML + ': [';
                                    for (let j = 0, k = value.length; j < k; j++) {
                                        let childValueSpan = document.createElement('span'),
                                            childValue = value[j];
                                        if (childValue === true) {
                                            childValueSpan.textContent = "true";
                                            childValueSpan.className = "type-boolean";
                                        } else if (childValue === false) {
                                            childValueSpan.textContent = "false";
                                            childValueSpan.className = "type-boolean";
                                        } else if (childValue === null) {
                                            childValueSpan.textContent = "null";
                                            childValueSpan.className = "type-null";
                                        } else if (
                                            Number.isFinite(childValue)
                                            && !Number.isNaN(childValue)
                                        ) {
                                            childValueSpan.textContent = childValue + "";
                                            childValueSpan.className = "type-number";
                                        } else {
                                            if (safeHTML) {
                                                if (/^https?:\/\//.test(childValue)) {
                                                    childValueSpan.innerHTML =
                                                        DOMPurify.sanitize(`<a href="${ childValue }">"${ childValue }"</a>`);
                                                } else {
                                                    childValueSpan.innerHTML = `"${childValue}"`;
                                                }
                                            } else {
                                                if (/^https?:\/\//.test(childValue)) {
                                                    childValueSpan.innerHTML =
                                                        DOMPurify.sanitize(`<a href="${ childValue }">"${ childValue }"</a>`);
                                                } else {
                                                    childValueSpan.textContent = `"${childValue}"`;
                                                }
                                            }
                                            childValueSpan.className = "type-string";
                                        }
                                        if (j !== 0) {
                                            newDiv.innerHTML += ', ';
                                        }
                                        newDiv.appendChild(childValueSpan);
                                    }
                                    newDiv.innerHTML += ']';
                                    newListItem.appendChild(newDiv);
                                    newListItem.appendChild(newList);
                                    listItem.appendChild(newListItem);
                                } else {
                                    newDiv.innerHTML = keySpan.outerHTML + ': []';
                                    newListItem.appendChild(newDiv);
                                    newListItem.appendChild(newList);
                                    listItem.appendChild(newListItem);
                                    recurse(value, newList);
                                }
                            } else {
                                if (
                                    jsonMap.implicitMaps !== undefined
                                    && jsonMap.implicitMaps.indexOf(key) > -1
                                ) { 
                                    newDiv.innerHTML = keySpan.outerHTML;
                                } else {
                                    newDiv.innerHTML = keySpan.outerHTML + ': {}';
                                }
                                newListItem.appendChild(newDiv);
                                newListItem.appendChild(newList);
                                listItem.appendChild(newListItem);
                                recurse(value, newList);
                            }
                        } else {
                            jsonItemIndex++;
                            newDiv.innerHTML = keySpan.outerHTML + ': ';
                            let valueSpan = document.createElement('span');
                            let childText = value;
                            if (childText === true) {
                                valueSpan.textContent = "true";
                                valueSpan.className = "type-boolean";
                            } else if (childText === false) {
                                valueSpan.textContent = "false";
                                valueSpan.className = "type-boolean";
                            } else if (childText === null) {
                                valueSpan.textContent = "null";
                                valueSpan.className = "type-null";
                            } else if (
                                Number.isFinite(childText)
                                && !Number.isNaN(childText)
                            ) {
                                valueSpan.textContent = childText + "";
                                valueSpan.className = "type-number";
                            } else {
                                if (safeHTML) {
                                    if (/^https?:\/\//.test(childText)) {
                                        valueSpan.innerHTML =
                                            DOMPurify.sanitize(`<a href="${ childText }">"${ childText }"</a>`);
                                    } else {
                                        valueSpan.innerHTML = `"${childText}"`;
                                    }
                                } else {
                                    if (/^https?:\/\//.test(childText)) {
                                        valueSpan.innerHTML =
                                            DOMPurify.sanitize(`<a href="${ childText }">"${ childText }"</a>`);
                                    } else {
                                        valueSpan.textContent = `"${childText}"`;
                                    }
                                }
                                valueSpan.className = "type-string";
                            }
                            if (
                                jsonMap.implicitNulls === undefined
                                || jsonMap.implicitNulls.indexOf(key) == -1
                            ) {
                                newDiv.appendChild(valueSpan);
                            } else {
                                newDiv.innerHTML = newDiv.innerHTML.slice(0, -2);
                            }   
                            newListItem.appendChild(newDiv);
                            listItem.appendChild(newListItem);
                        }
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                for (var i = 0, c = jsonMap.length; i < c; i++) {
                    let newList = document.createElement('ul'),
                        newDiv = document.createElement('code'),
                        newListItem = document.createElement('li');
                    if (
                        typeof jsonMap[i] === 'object'
                        && jsonMap[i] !== null
                    ) {
                        if (Array.isArray(jsonMap[i])) {
                            if (
                                jsonMap.inlineArrays !== undefined
                                && jsonMap.inlineArrays.indexOf(i) > -1
                            ) {
                                newDiv.innerHTML += '[';
                                for (let j = 0, k = jsonMap[i].length; j < k; j++) {
                                    let valueSpan = document.createElement('span'),
                                        value = jsonMap[i][j];
                                    if (value === true) {
                                        valueSpan.textContent = "true";
                                        valueSpan.className = "type-boolean";
                                    } else if (value === false) {
                                        valueSpan.textContent = "false";
                                        valueSpan.className = "type-boolean";
                                    } else if (value === null) {
                                        valueSpan.textContent = "null";
                                        valueSpan.className = "type-null";
                                    } else if (
                                        Number.isFinite(value)
                                        && !Number.isNaN(value)
                                    ) {
                                        valueSpan.textContent = value + "";
                                        valueSpan.className = "type-number";
                                    } else {
                                        if (safeHTML) {
                                            if (/^https?:\/\//.test(value)) {
                                                valueSpan.innerHTML =
                                                    DOMPurify.sanitize(`<a href="${ value }">"${ value }"</a>`);
                                            } else {
                                                valueSpan.innerHTML = `"${value}"`;
                                            }
                                        } else {
                                            if (/^https?:\/\//.test(value)) {
                                                valueSpan.innerHTML =
                                                    DOMPurify.sanitize(`<a href="${ value }">"${ value }"</a>`);
                                            } else {
                                                valueSpan.textContent = `"${value}"`;
                                            }
                                        }
                                        valueSpan.className = "type-string";
                                    }
                                    if (j !== 0) {
                                        newDiv.innerHTML += ', ';
                                    }
                                    newDiv.appendChild(valueSpan);
                                }
                                newDiv.innerHTML += ']';
                                newListItem.appendChild(newDiv);
                                newListItem.appendChild(newList);
                                listItem.appendChild(newListItem);
                            } else {
                                newDiv.textContent = "[]";
                                newListItem.appendChild(newDiv);
                                newListItem.appendChild(newList);
                                listItem.appendChild(newListItem);
                                recurse(jsonMap[i], newList);
                            }
                        } else {
                            newDiv.textContent = "{}";
                            newListItem.appendChild(newDiv);
                            newListItem.appendChild(newList);
                            listItem.appendChild(newListItem);
                            recurse(jsonMap[i], newList);
                        }
                    } else {
                        jsonItemIndex++;
                        let childText = jsonMap[i];
                        if (childText === true) {
                            newDiv.textContent = "true";
                            newDiv.className = "type-boolean";
                        } else if (childText === false) {
                            newDiv.textContent = "false";
                            newDiv.className = "type-boolean";
                        } else if (childText === null) {
                            newDiv.textContent = "null";
                            newDiv.className = "type-null";
                        } else if (
                            Number.isFinite(childText)
                            && !Number.isNaN(childText)
                        ) {
                            newDiv.textContent = childText + "";
                            newDiv.className = "type-number";
                        } else {
                            if (safeHTML) {
                                if (/^https?:\/\//.test(childText)) {
                                    newDiv.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childText }">"${ childText }"</a>`);
                                } else {
                                    newDiv.innerHTML = `"${childText}"`;
                                }
                            } else {
                                if (/^https?:\/\//.test(childText)) {
                                    newDiv.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childText }">"${ childText }"</a>`);
                                } else {
                                    newDiv.textContent = `"${childText}"`;
                                }
                            }
                            newDiv.className = "type-string";
                        }
                        newListItem.appendChild(newDiv);
                        newListItem.appendChild(newList);
                        listItem.appendChild(newListItem);
                    }
                }
            }
        }
    }

    /**
     * @param {map|array} jsonMap
     * @param {boolean} [safeHTML=false]
     * @returns {object} DOM
     */
    mapToHtmlTable(jsonMap, safeHTML = false) {
        let $ = this;
        var jsonItemIndex = 0,
            table = document.createElement('table'),
            tHead = document.createElement('thead'),
            tBody = document.createElement('tbody'),
            headingsEncountered = false,
            columnsLength = 0;
        table.className = 'DAMON-Table';
        if (
            typeof jsonMap !== 'object'
            || jsonMap == null
            || Array.isArray(jsonMap)
            || !(jsonMap instanceof Map)
            || jsonMap.constructor !== Map
        ) {
            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
        }
        for (const [key, value] of jsonMap) {
            if (
                typeof value === 'object'
                && value !== null
                && !Array.isArray(value)
                && value instanceof Map
                && value.constructor === Map
            ) {
                if (
                    key == "0"
                    && !headingsEncountered
                ) {
                    let row = document.createElement('tr');
                    columnsLength = value.length;
                    
                    for (const [childKey, childValue] of value) {
                        if (childValue === null) {
                            let headerCell = document.createElement('th');
                            if (safeHTML) {
                                if (/^https?:\/\//.test(childKey)) {
                                    headerCell.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childKey }">${ childKey }</a>`);
                                } else {
                                    headerCell.innerHTML = `${childKey}`;
                                }
                            } else {
                                if (/^https?:\/\//.test(childKey)) {
                                    headerCell.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childKey }">${ childKey }</a>`);
                                } else {
                                    headerCell.textContent = `${childKey}`;
                                }
                            }
                            row.appendChild(headerCell);
                        } else {
                            throw new Error("Expected implicit null property, saw otherwise");
                        }
                    }
                    tHead.appendChild(row);
                    headingsEncountered = true;
                } else {
                    if (columnsLength == 0)
                        columnsLength = value.length;
                    if (value.length != columnsLength) {
                        // unmatching columns length
                        throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                    }
                    let row = document.createElement('tr');
                    for (const [childKey, childValue] of value) {
                        if (childValue === null) {
                            let dataCell = document.createElement('td');
                            if (safeHTML) {
                                if (/^https?:\/\//.test(childKey)) {
                                    dataCell.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childKey }">${ childKey }</a>`);
                                } else {
                                    dataCell.innerHTML = `${childKey}`;
                                }
                            } else {
                                if (/^https?:\/\//.test(childKey)) {
                                    dataCell.innerHTML =
                                        DOMPurify.sanitize(`<a href="${ childKey }">${ childKey }</a>`);
                                } else {
                                    dataCell.textContent = `${childKey}`;
                                }
                            }
                            row.appendChild(dataCell);
                        } else {
                            throw new Error("Expected implicit null property, saw otherwise");
                        }
                    }
                    tBody.appendChild(row);
                }
            } else if (
                typeof value !== 'object'
                && key == "00"
            ) {
                let caption = document.createElement('caption');
                if (safeHTML) {
                    caption.innerHTML = value;
                } else {
                    caption.textContent = value;
                }
                table.appendChild(caption);
            } else {
                throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            jsonItemIndex++;
        }
        if (headingsEncountered) {
            table.appendChild(tHead);
        }
        table.appendChild(tBody);
        return table;
    }

    // Expects a complete tree (all terminal leaves at the same level)
    /**
     * @param {map|array} jsonMap
     * @param {boolean} [safeHTML=false]
     * @returns {object} DOM
     */
    mapTreeLeavesToHtmlTable(jsonMap, safeHTML = false) {
        let $ = this;
        var jsonItemIndex = 0,
            expectedDepth = 0,
            table = document.createElement('table'),
            tHead = document.createElement('thead'),
            tBody = document.createElement('tbody'),
            headingsEncountered = false;
        table.className = 'DAMON-LeavesToTable';
        if (
            typeof jsonMap !== 'object'
            || jsonMap == null
            || Array.isArray(jsonMap)
            || !(jsonMap instanceof Map)
            || jsonMap.constructor !== Map
        ) {
            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
        }
        for (const [key, value] of jsonMap) {
            if (
                typeof value === 'object'
                && !Array.isArray(value)
            ) {
                if (
                    key == "head"
                    && !headingsEncountered
                ) {
                    try {
                        recurse(value, tHead);
                    } catch (e) {
                        return;
                    }
                    headingsEncountered = true;
                } else if (
                    key == "body"
                ) {
                    try {
                        recurse(value, tBody);
                    } catch (e) {
                        return;
                    }
                }
            } else if (
                typeof value !== 'object'
                && key == "caption"
            ) {
                let caption = document.createElement('caption');
                if (safeHTML) {
                    caption.innerHTML = value;
                } else {
                    caption.textContent = value;
                }
                table.appendChild(caption);
            } else {
                throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            jsonItemIndex++;
        }
        if (headingsEncountered) {
            table.appendChild(tHead);
        }
        table.appendChild(tBody);
        return table;
        /**
         * @param {map|array} jsonMap
         * @param {object} tableSubContainer
         * @param {number} [level=0]
         * @param {array} [line=[]]
         */
        function recurse(jsonMap, tableSubContainer, level = 0, line = []) {
            if (
                typeof tableSubContainer !== 'object'
                || tableSubContainer == null
            ) {
                throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
            }
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                if (tableSubContainer.tagName == "THEAD") {
                    if (Array.from(jsonMap.keys()).length == 1) {
                        if (
                            typeof jsonMap.get(Array.from(jsonMap.keys())[0]) === 'object'
                            && jsonMap.get(Array.from(jsonMap.keys())[0]) !== null
                        ) {
                            jsonItemIndex++;
                            recurse(
                                jsonMap.get(Array.from(jsonMap.keys())[0]),
                                tableSubContainer,
                                level + 1,
                                line.concat([Array.from(jsonMap.keys())[0]])
                            );
                        } else {
                            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                        }
                    } else {
                        throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                    }
                } else if (
                    tableSubContainer.tagName == "TBODY"
                ) {
                    if (Array.from(jsonMap.keys()).length == 0) {
                        throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                    }
                    for (const [key, value] of jsonMap) {
                        if (
                            typeof value === 'object'
                            && value !== null
                        ) {
                            jsonItemIndex++;
                            recurse(value, tableSubContainer, level + 1, line.concat([key]));
                        } else {
                            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                        }
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                if (tableSubContainer.tagName == "THEAD") {
                    if (jsonMap.length == 1) {
                        jsonItemIndex++;
                        expectedDepth = level;
                        let tableRow = document.createElement('tr');
                        line.push(jsonMap[0]);
                        for (let i = 0, c = line.length; i < c; i++) {
                            let headerCell = document.createElement('th');
                            if (safeHTML) {
                                headerCell.innerHTML = line[i];
                            } else {
                                headerCell.textContent = line[i];
                            }
                            tableRow.appendChild(headerCell);
                        }
                        tableSubContainer.appendChild(tableRow);
                    } else {
                        throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                    }
                } else if (
                    tableSubContainer.tagName == "TBODY"
                ) {
                    if (
                        level == expectedDepth
                    ) {
                        if (jsonMap.length == 0) {
                            throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                        }
                        for (let i = 0, c = jsonMap.length; i < c; i++) {
                            jsonItemIndex++;
                            let tableRow = document.createElement('tr');
                            for (let z = 0, x = line.length; z < x; z++) {
                                let dataCell = document.createElement('td');
                                if (safeHTML) {
                                    dataCell.innerHTML = line[z];
                                } else {
                                    dataCell.textContent = line[z];
                                }
                                tableRow.appendChild(dataCell);
                            }
                            let dataCell = document.createElement('td');
                            if (safeHTML) {
                                dataCell.innerHTML = jsonMap[i];
                            } else {
                                dataCell.textContent = jsonMap[i];
                            }
                            dataCell.textContent = jsonMap[i];
                            tableRow.appendChild(dataCell);
                            tableSubContainer.appendChild(tableRow);
                        }
                    } else {
                        throw new Error("Error List Item number " + jsonItemIndex + ": @param { {} } list");
                    }
                }
            }
        }
    }

    /**
     * @param {object} list DOM
     * @return {map|array}
     */
    htmlToJSON(list) {
        let $ = this;
        var listItemIndex = 0;
        if (list.firstElementChild.textContent == '{}') {
            return $.mapToJSON(recurse(tree, new Map()));
        } else if (list.firstElementChild.textContent == '[]') {
            return $.mapToJSON(recurse(tree, []));
        }
        /**
         * @param {object} list DOM
         * @param {map|array} jsonMap
         * @returns {map|array}
         */
        function recurse(list, jsonMap) {
            if (
                typeof list !== 'object'
                || list == null
                || Array.isArray(list)
            ) {
                throw new Error("Error List Item number " + listItemIndex + ": @param { {} } list");
            }
            if (
                typeof jsonMap === 'object'
                && jsonMap !== null
                && !Array.isArray(jsonMap)
                && jsonMap instanceof Map
                && jsonMap.constructor === Map
            ) {
                // {}
                for (let i = 0, c = list.children.length; i < c; i++) {
                    listItemIndex++;
                    if (list.children[i].tagName == "LI") {
                        if (list.children[i].firstElementChild.tagName == "CODE") {
                            if (list.children[i].firstElementChild.innerHTML.length) {
                                let text = list.children[i].firstElementChild.innerHTML.trim();
                                if (
                                    text[text.length - 1] == ":"
                                    && text.length > 1
                                ) {
                                    let secondGrandChild = list.children[i].children[1];
                                    if (
                                        secondGrandChild.tagName == "UL"
                                        && secondGrandChild.firstElementChild.tagName == "LI"
                                        && secondGrandChild.children.length == 1
                                        && secondGrandChild.firstElementChild.firstElementChild.tagName == "CODE"
                                    ) {
                                        listItemIndex++;
                                        let childText =
                                            secondGrandChild.firstElementChild.firstElementChild.textContent.trim();
                                        if (childText == "true") {
                                            jsonMap.set(text.slice(0, -1), true);
                                        } else if (childText == "false") {
                                            jsonMap.set(text.slice(0, -1), false);
                                        } else if (childText == "null") {
                                            jsonMap.set(text.slice(0, -1), null);
                                        } else if (
                                            isFinite(childText)
                                            && !isNaN(parseFloat(childText))
                                        ) {
                                            jsonMap.set(text.slice(0, -1), childText * 1);
                                        } else {
                                            jsonMap.set(text.slice(0, -1), childText);
                                        }
                                    } else {
                                        throw new Error(
                                            "Error List Item number "
                                            + listItemIndex
                                            + ": not DAMON-compliant."
                                        );
                                    }
                                } else if (
                                    text[text.length - 4] == ":"
                                    && text.length > 4
                                ) {
                                    if (text.slice(-3) == " []") {
                                        jsonMap.set(text.slice(0, -4), []);
                                        if (list.children[i].children[1].tagName == "UL") {
                                            recurse(list.children[i].children[1], jsonMap.get(text.slice(0, -4)));
                                        } else {
                                            throw new Error(
                                                "Error List Item number "
                                                + listItemIndex
                                                + ": not DAMON-compliant."
                                            );
                                        }
                                    } else if (text.slice(-3) == " {}") {
                                        jsonMap.set(text.slice(0, -4), new Map());
                                        if (list.children[i].children[1].tagName == "UL") {
                                            recurse(list.children[i].children[1], jsonMap.get(text.slice(0, -4)));
                                        } else {
                                            throw new Error(
                                                "Error List Item number "
                                                + listItemIndex
                                                + ": not DAMON-compliant."
                                            );
                                        }
                                    }
                                } else {
                                    throw new Error(
                                        "Error List Item number "
                                        + listItemIndex
                                        + ": map items need a key"
                                    );
                                }
                            } else {
                                throw new Error("Error List Item number " + listItemIndex + ": empty node.");
                            }
                        } else {
                            throw new Error("Error List Item number " + listItemIndex + ": not DAMON-compliant.");
                        }
                    }
                }
            } else if (Array.isArray(jsonMap)) {
                // []
                for (let i = 0, c = list.children.length; i < c; i++) {
                    listItemIndex++;
                    if (list.children[i].tagName == "LI") {
                        if (list.children[i].firstElementChild.tagName == "CODE") {
                            if (list.children[i].firstElementChild.innerHTML.length) {
                                let text = list.children[i].firstElementChild.innerHTML.trim();
                                if (
                                    text[text.length - 1] == ":"
                                    && text.length > 1
                                ) {
                                    throw new Error(
                                        "Error List Item number "
                                        + listItemIndex
                                        + ": lists can't have keys."
                                    );
                                } else if (
                                    text[text.length - 4] == ":"
                                    && text.length > 4
                                ) {
                                    throw new Error(
                                        "Error List Item number "
                                        + listItemIndex
                                        + ": not DAMON-compliant."
                                    );
                                } else {
                                    if (text == "[]") {
                                        jsonMap.push([]);
                                        if (
                                            list.children[i].children[1]
                                            && list.children[i].children[1].tagName == "UL"
                                        ) {
                                            recurse(list.children[i].children[1], jsonMap[jsonMap.length - 1]);
                                        } else {
                                            throw new Error(
                                                "Error List Item number "
                                                + listItemIndex 
                                                + ": not DAMON-compliant."
                                            );
                                        }
                                    } else if (text == "{}") {
                                        jsonMap.push({});
                                        if (
                                            list.children[i].children[1]
                                            && list.children[i].children[1].tagName == "UL"
                                        ) {
                                            recurse(list.children[i].children[1], jsonMap[jsonMap.length - 1]);
                                        } else {
                                            throw new Error(
                                                "Error List Item number "
                                                + listItemIndex
                                                + ": not DAMON-compliant."
                                            );
                                        }
                                    } else if (text == "true") {
                                        jsonMap.push(true);
                                    } else if (text == "false") {
                                        jsonMap.push(false);
                                    } else if (text == "null") {
                                        jsonMap.push(null);
                                    } else if (
                                        isFinite(text)
                                        && !isNaN(parseFloat(text))
                                    ) {
                                        jsonMap.push(text * 1);
                                    } else {
                                        jsonMap.push(text);
                                    }
                                }
                            } else {
                                throw new Error("Error List Item number " + listItemIndex + ": empty node.");
                            }
                        } else {
                            throw new Error("Error List Item number " + listItemIndex + ": not DAMON-compliant.");
                        }
                    }
                }
            } else {
                throw new Error("Error List Item number " + listItemIndex + ": @param { {} | [] } jsonMap");
            }
            return jsonMap;
        }
    }
};