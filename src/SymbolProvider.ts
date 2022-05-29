import praatGlobals = require('./praatGlobals');
import praatGlobalFunctions = require('./praatGlobalFunctions');
import { TextDocument, Position, Range, TextEdit, Location, window, CancellationToken, ProviderResult, SymbolInformation, SymbolKind, SymbolTag, workspace, DocumentSymbol, DocumentSymbolProvider } from 'vscode';

export default class PraatDocumentSymbolProvider implements DocumentSymbolProvider {
    
    public async provideDocumentSymbols(document: TextDocument, _token: CancellationToken): Promise<DocumentSymbol[] | SymbolInformation[] | null | undefined> {
        
        let result: DocumentSymbol[] = [];
        let symbolInfo: SymbolInformation[] = [];

        let added: any = {};

        return new Promise((resolve, reject) => {

        // loop through the document and see if you find declared variables
        for (let i = 0; i < document.lineCount; i++) {
            let line = document.lineAt(i);

            let variableMatch = /([a-z_\x7f-\xff][a-zA-Z0-9_$\x7f-\xff]*)(\s*)\=/g;
			let match: RegExpExecArray | null = null;

			while (match = variableMatch.exec(line.text)) {

                let word = match[0].substring(0, match[0].length);

                // If conditional, we're not interested
                if (match[0].endsWith("==")) {
                    continue;
                }
                if (match[0].includes('if')) {
                    continue;
                }

                // Remove possible matched space and equal sign
                if (match[0].endsWith(" =")) {
                    word = match[0].substring(0, match[0].length-2);
                } else {
                    word = match[0].substring(0, match[0].length-1);
                }

				if (!added[word]) {
                    added[word] = true;
                    let symbolStart = new Position(line.lineNumber, 0);
                    let symbolEnd = new Position(line.lineNumber, word.length-1);
                    let symbolRange = new Range(symbolStart, symbolEnd);
                    // window.showInformationMessage(word + " defined at (" + symbolStart.line + "," + symbolStart.character + ") to (" + symbolEnd.line + "," + symbolEnd.character + ")");
                    result.push({
                        name: word,
                        detail: 'UDV',
                        kind: SymbolKind.Variable,
                        range: symbolRange,
                        selectionRange: symbolRange,
                        children: []
                    });
                    symbolInfo.push({
                        name: word,
                        containerName: word,
                        kind: SymbolKind.Variable,
                        location: new Location(document.uri, symbolRange)
                    });
                    window.showInformationMessage(added);
                    // resolve(result);
                    resolve(symbolInfo);
                }
            }
        }
        }
    );}
}