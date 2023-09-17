// extension boilerplate

// called by vscode
function activate(context) {
    console.log("activating gas-highlight")

    context.subscriptions.push(
        hover_feature(), format_feature(), semantic_highlight_feature()
    )
}

// called by vscode
function deactivate() { }

module.exports = {
    activate,
    deactivate
}



const vscode = require("vscode")

const file_type = "assembly"

function hover_feature() {
    const hover_texts = JSON.parse(`
        {
            "section": "section test",
            "data": "section .data test"
        }
    `)

    return vscode.languages.registerHoverProvider(
        file_type, {
        provideHover(document, position, token) {
            const string_under_cursor = document.getText(document.getWordRangeAtPosition(position))
            const hover_text = hover_texts[string_under_cursor]
            console.log(hover_text)
            return new vscode.Hover(hover_text)
        }
    }
    )
}

function format_feature() {
    return vscode.languages.registerDocumentFormattingEditProvider(
        file_type, {
        provideDocumentFormattingEdits(document, options, token) {

        }
    }
    )
}

function semantic_highlight_feature() {
    return vscode.languages.registerDocumentSemanticTokensProvider(
        file_type, {
        provideDocumentSemanticTokens(document, token) {

        }
    }
    )
}
