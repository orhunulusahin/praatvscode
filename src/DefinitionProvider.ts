import { DefinitionProvider, window, DeclarationProvider, Location, Declaration, Definition, Range,CancellationToken, Position, ProviderResult, TextDocument, DefinitionLink, LocationLink } from 'vscode';

export default class PraatDefinitionProvider implements DefinitionProvider {

    public provideDefinition(document: TextDocument, position: Position, _token: CancellationToken): ProviderResult<Definition | DefinitionLink[]> {

        let result:Declaration;
        let added: any = {};

        // Get the range of the current word
        let range = document.getWordRangeAtPosition(position);
        if (!range) {
			range = new Range(position, position);
		}

        // Loop through lines and match selected word
        for (let i = 0; i < document.lineCount; i++) {
            let line = document.lineAt(i);

            let declarationMatch = new RegExp(document.getText(range));
            let match: RegExpExecArray | null = null;

            if (line.text.includes("=")) {
                while (match = declarationMatch.exec(line.text.split("=")[0])) {
                    let word:string;
                    // If logical comparison...
                    if (match[0].endsWith("=")) {
                        continue;
                    }
                    if (match[0].includes('if')) {
                        continue;
                    }
                    // Ignore comments
                    if (line.text.includes("#") || line.text.includes(";")) {
                        continue;
}
                    // Get rid of spaces to isolate token
                    word = match[0].trim();

                    if (!added[word]) {
                        added[word] = true;
                        let definitionBegin = new Position (line.lineNumber, line.firstNonWhitespaceCharacterIndex);
                        let definitionEnd = new Position (line.lineNumber, word.length);
                        // Designate word range as definition
                        result = new Location(document.uri, new Range (definitionBegin, definitionEnd));
                        return Promise.resolve(result);
                    }
                }
            }
        }
    }
}