# DAMON: A Map-Oriented Notation

Dictionary-like notations for specification requirements keep increasing in numbers.

Indeed, while JSON gets considered human-*readable*, JSON-*editing* turns-out significantly harder than Markdown-editing.

I propose an insertion-order-cautious and whitespace-encoded harmonization that remains type-compatible.

## Syntax

See [language_reference.md](./language_reference.md)

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