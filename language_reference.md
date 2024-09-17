# Language Reference

## Recommended file format

- File extension: .dm
- Encoding: UTF-8

## Basic Usage

### Values

Lone values remain unchanged:

```yaml
"" # Alternatively: true/false/null/number
```

Produces:

```js
"" // Alternatively: true/false/null/number
```

### Maps

This DAMON snippet:

```yaml
- {}
    - key0: {}
    - key1: []
    - key2: ""
    - key3: true
    - key4: false
    - key5: null
    - key6: 0
```

Produces this JSON snippet:

```JSON
{
    "key0": {},
    "key1": [],
    "key2": "",
    "key3": true,
    "key4": false,
    "key5": null,
    "key6": 0
}
```

### Lists

This DAMON snippet:

```yaml
- []
    - {}
    - []
    - ""
    - true
    - false
    - null
    - 0
```

Produces this JSON snippet:

```JSON
[
    {},
    [],
    "",
    true,
    false,
    null,
    0
]
```

You may nest using indentation:

```yaml
- {}
    - key0: {}
        - key0-0: []
            - []
                - ""
```

You may inline flat lists:

```yaml
- {}
    - key0: [0, 1, 2, 3]
    - key1: []
        - ["a", "b", "c"]
```

## Intermediate usage

### Headless root dictionary

This DAMON snippet:

```yaml
- key0: {}
- key1: []
- key2: ""
- key3: true
- key4: false
- key5: null
- key6: 0
```

Produces this JSON snippet:

```JSON
{
    "key0": {},
    "key1": [],
    "key2": "",
    "key3": true,
    "key4": false,
    "key5": null,
    "key6": 0
}
```

## Advanced usage

Use case: facilitating list conversion

### Implicit dictionary properties values

- You may ommit map terminators
- You may ommit null terminators
- You may not leave trailing-spaces

( ! ) Value-terminating keys still get parsed!

This:

```yaml
- : {}
- : []
- : true
- : false
- : null
- : 0
```

Produces:

```JSON
{
    "": {},
    "": [],
    "": true,
    "": false,
    "": null,
    "": 0
}
```

Yet:

```yaml
- key0
```

Produces:

```JSON
{
    "key0": null
}
```

And:

```yaml
- key0
    - key0-0
```

Produces:

```JSON
{
    "key0": {
        "key0-0": null
    }
}
```

And:

```yaml
- : {}: null
- : []: null
- : true: null
- : false: null
- : null: null
- : 0: null
```

Produces:

```JSON
{
    ": {}": null,
    ": []": null,
    ": true": null,
    ": false": null,
    ": null": null,
    ": 0": null
}
```

Finally:

```yaml
- : {}: {}
- : []: {}
- : true: {}
- : false: {}
- : null: {}
- : 0: {}
```

Produces:

```JSON
{
    ": {}": {},
    ": []": {},
    ": true": {},
    ": false": {},
    ": null": {},
    ": 0": {}
}
```

You may turn this off:

```js
new DAMON(true)
```

Cheatsheet

```js
// List Import
Array.from(map.keys());
// Multiline Strings
Array.from(map.keys()).join('\n');
// S-Expression conversion
// See [Typedown]()
// For more, see json-lisp