import praatGlobals = require('./praatGlobals');
import praatGlobalFunctions = require('./praatGlobalFunctions');
import { TextDocument, Position, Range, TextEdit, Location, window, CancellationToken, ProviderResult, SymbolInformation, SymbolKind, SymbolTag, workspace, DocumentSymbol, DocumentSymbolProvider } from 'vscode';

export default class PraatDocumentSymbolProvider implements DocumentSymbolProvider {
    
    public provideDocumentSymbols(document: TextDocument, _token: CancellationToken): ProviderResult<SymbolInformation[] | DocumentSymbol[]> {
        
        let result: DocumentSymbol[] = [];

		let text = document.getText();

        let added: any = {};

        // loop through the document and see if you find declared variables
        for (let i = 0; i < document.lineCount; i++) {
            let line = document.lineAt(i);

            let variableMatch = /([a-z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)(\s*)\=/g;
			let match: RegExpExecArray | null = null;

			while (match = variableMatch.exec(line.text)) {

                let word = match[0].substring(0, match[0].length);

                // remove possible matched space and equal sign
                if (match[0].endsWith(" =")) {
                    word = match[0].substring(0, match[0].length-2);
                } else {
                    word = match[0].substring(0, match[0].length-1);
                }

				if (!added[word]) {
                    added[word] = true;
                    let symbolStart = new Position(line.lineNumber, 0);
                    let symbolEnd = new Position(line.lineNumber, match[0].length-1);
                    let symbolRange = new Range(symbolStart, symbolEnd);
                    // window.showErrorMessage();

                    // window.showInformationMessage(word + " defined at (" + symbolStart.line + "," + symbolStart.character + ") to (" + symbolEnd.line + "," + symbolEnd.character + ")");
                    result.push({
                        name: word,
                        detail: 'UDV',
                        kind: SymbolKind.Variable,
                        range: symbolRange,
                        selectionRange: symbolRange,
                        children: []
                    });

                    window.showInformationMessage(added);
                }
            }
        }
        
        return Promise.resolve(result);

    }
}