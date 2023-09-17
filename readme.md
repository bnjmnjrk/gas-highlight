## description

wip vscode extension for the gas assembler

## setup

```bash
npm install
> goto vs code debug window
> start debugging
```

## features
- syntax highlighting, [color orientation based on "dark+" theme](https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_plus.json)

## project structure
files to care about:
- `package.json` - specifies information about this extension
- `src/extension.js` - is being executet by vscode
- `src/language-configuration.json` - specify common vscode ide support
- `src/assembly.tmLanguage.json` - textmate grammer, tells what color for what syntax
