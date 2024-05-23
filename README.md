# DAMON: A Map-Oriented Notation

A JSON-shorthand that:

- Stores [insertion order](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Embraces the offside-rule
- Reuses JSON types

## Demo

[Hello, human!](https://planviii.com/)

## Syntax

See [language_reference.md](./language_reference.md)

## Use Cases

- Wiki Data-entry
- Software Design
- Interactive Documents

## Building

```Bash
node esbuild
```

## Usage

Core methods:

```js
let damon = new DAMON();
let damonString =`
- {}
    - key: "value"
`;

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

## Attributions

Built on:

- JSON-types and JSON.parse()
- json-in-order [@sanderevers](https://github.com/sanderevers)
- DOMPurify [@cure53](https://github.com/cure53)

## License

Copyright © 2024 Adrian Turcev

Licensed under the [MPL-2.0 license](./LICENSE.txt)