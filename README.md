# DAMON: A Map-Oriented Notation

A human-*editable* JSON shorthand

- Keeps insertion-order (see js [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map))
- Embraces the offside-rule
    - So long, punctuation management!
    - Hello, affordances for reordering!
- Reuses JSON types
- (...)

## Syntax

See [language_reference.md](./language_reference.md) for full features

## Demo

[Hello, human!](https://planviii.com/)

## Use Cases

- Wiki Data-entry
- Software Design
- Interactive Documents

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

## Used in

- SPACE: Portable And Accessible Code Editor
- TYPE: Your Personal Encyclopedia

## Building

```Bash
node esbuild
```