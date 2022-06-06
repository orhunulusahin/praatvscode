// Definition provider for PraatVSCode
// Orhun Ulusahin, 06/2022

import { DefinitionProvider, Location, Declaration, Definition, Range,CancellationToken, Position, ProviderResult, TextDocument, DefinitionLink } from 'vscode';
import { isComment, formWords } from './SemanticTokensProvider';

export default class PraatDefinitionProvider implements DefinitionProvider {

    public provideDefinition(document: TextDocument, position: Position, _token: CancellationToken): ProviderResult<Definition | DefinitionLink[]> {

        let result:Declaration;
        let added: any = {};

        // Get the range of the current word
        let range = document.getWordRangeAtPosition(position);
        if (!range) {
			range = new Range(position, position);
		}

        let needle = document.getText(range);

        // Loop through lines and match selected word
        // If a procedeure is being called, definition can come after the call
        if (document.lineAt(range.start.line).text.includes('call')) {
            var loopTarget = document.lineCount;
        }
        else {
            var loopTarget = range.start.line;
        }
        for (let i = 0; i < loopTarget; i++) {
            let line = document.lineAt(i);

            // First look for a regular declaration (i.e., var = value)
            if (line.text.includes("=")) {
                let split = line.text.split("=")[0];
                if (split.trimStart().startsWith(needle)) {
                    // If logical comparison...
                    if (split[0].endsWith("=")) {
                        continue;
                    }
                    if (split[0].includes('if')) {
                        continue;
                    }
                    // Ignore formula
                    if(split[0].includes('Formula')) {
                        continue;
                    }
                    // Ignore comments
                    if (line.text.trimLeft().startsWith("#") || line.text.trimLeft().startsWith(";")) {
                        continue;
                    }

                    if (!added[needle]) {
                        added[needle] = true;
                        let definitionBegin = new Position (line.lineNumber, line.text.indexOf(needle));
                        let definitionEnd = new Position (line.lineNumber, line.text.indexOf(needle)+needle.length);
                        // Designate word range as definition
                        result = new Location(document.uri, new Range (definitionBegin, definitionEnd));
                        return Promise.resolve(result);
                    }
                }
            }

            // Now look for a declaration as an iterator
            if (line.text.includes("for") && line.text.includes("to") && line.text.includes(needle) && !isComment(line.text)) {
                if (!added[needle]) {
                    added[needle] = true;
                    let definitionBegin = new Position (line.lineNumber, line.text.indexOf(needle));
                    let definitionEnd = new Position (line.lineNumber, line.text.indexOf(needle)+needle.length);
                    // Designate word range as definition
                    result = new Location(document.uri, new Range (definitionBegin, definitionEnd));
                    return Promise.resolve(result);
                }
            }

            // Define user declared functions (procedures)
            if (line.text.includes("procedure") && line.text.includes(needle) && !isComment(line.text)) {
                if (!added[needle]) {
                    added[needle] = true;
                    let definitionBegin = new Position (line.lineNumber, line.text.indexOf(needle));
                    let definitionEnd = new Position (line.lineNumber, line.text.indexOf(needle)+needle.length);
                    // Designate word range as definition
                    result = new Location(document.uri, new Range (definitionBegin, definitionEnd));
                    return Promise.resolve(result);
                }
            }

            let hasFormInput = formWords.some((item) => line.text.trimStart().startsWith(item));
			if (hasFormInput && line.text.includes(needle) && !isComment(line.text)) {
                if (!added[needle]) {
                    added[needle] = true;
                    let definitionBegin = new Position (line.lineNumber, line.text.indexOf(needle));
                    let definitionEnd = new Position (line.lineNumber, line.text.indexOf(needle)+needle.length);
                    // Designate word range as definition
                    result = new Location(document.uri, new Range (definitionBegin, definitionEnd));
                    return Promise.resolve(result);
                }
			}
        }
    }
}