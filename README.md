# DAMON: A Map-Oriented Notation

A JSON-shorthand that:

- Stores [insertion order](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Embraces the offside-rule
- Reuses JSON types

## Demo

[Hello, human!](https://space.planviii.com/)

## Syntax

See [language_reference.md](./language_reference.md)

## Use Cases

- Wiki Data-entry
- Software Design
- Interactive Documents

## Installation

Node:

```bash
npm install damon2
```

## Building

```Bash
npm run watch # dev
npm run build # distribuable
```

## Usage

Core methods:

```js
const Damon = require('damon2');
let damon = new Damon();
let damonString = `
    - {}
        - key: "value"`;

console.log(damon.damonToJSON(damonString));
// {
//     "key": "value"
// }

console.log(damon.jsonToDAMON(damon.damonToJSON(damonString)));
// - {}
//     - key: "value"

console.log(damon.damonToMap(damonString));
// Map(1) {"key" => "value"}
```

## IJSON export

Ordered-JSON for languages bereft thereof:

```js
const Damon = require('damon2');
let damon = new Damon();
let damonString = `
- key: {}
    - key: null`;

console.log(damon.damonToIJSON(damonString));
// {
//     "0-key": {
//          "0-key: null
//     }
// }
```

## Attributions

Built on:

- JSON-types and JSON.parse()
- json-in-order [@sanderevers](https://github.com/sanderevers)
- DOMPurify [@cure53](https://github.com/cure53)

## Going further

- [Offside-rule grammar](https://michaeldadams.org/papers/layout_parsing/LayoutParsing.pdf)

## License

Copyright © 2024 Adrian Turcev

Licensed under the [MPL-2.0 license](./LICENSE.txt)
