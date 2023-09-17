the syntax highlighting is oriented on the vscode "dark+" theme to test all unique colors do:

```json
// replace contents of assembly.tmLanguage.json with:
{
    "scopeName": "source.asm",
    "patterns": [
        {
            "match": "1",
            "name": "entity.name.function"
        },
        {
            "match": "2",
            "name": "support.type"
        },
        {
            "match": "3",
            "name": "keyword.control"
        },
        {
            "match": "4",
            "name": "variable"
        },
        {
            "match": "5",
            "name": "variable.other.constant"
        },
        {
            "match": "6",
            "name": "support.constant.property-value"
        },
        {
            "match": "7",
            "name": "constant.character.set.regexp"
        },
        {
            "match": "8",
            "name": "keyword.operator.quantifier.regexp"
        },
        {
            "match": "9",
            "name": "constant.character"
        }
    ]
}
```

```json
// view_me.asm
1111111111111111111111111
2222222222222222222222222
3333333333333333333333333
4444444444444444444444444
5555555555555555555555555
6666666666666666666666666
7777777777777777777777777
8888888888888888888888888
9999999999999999999999999
```