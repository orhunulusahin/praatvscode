// Reference provider for PraatVSCode
// Orhun Ulusahin, updated 05/06/2022

import { TextDocument, Position, ReferenceProvider, Location, Range, CancellationToken } from 'vscode';
import { getIndices } from './SemanticTokensProvider';

export default class PraatReferenceProvider implements ReferenceProvider {
	public provideReferences(
		document: TextDocument,
		position: Position,
		options: { includeDeclaration: boolean },
		token: CancellationToken
	): Thenable<Location[]> {
		return this.findReferences(document, position, options, token);
	}

    // Method to actually fetch refs
	private findReferences(document: TextDocument, position: Position, options: { includeDeclaration: boolean }, _token: CancellationToken): Thenable<Location[]> {
		return new Promise<Location[]>((resolve, reject) => {

            let locations:Location[] = [];

			// Get selected word range
			const wordRange = document.getWordRangeAtPosition(position);
			if (!wordRange) {
				return resolve([]);
			}
            // Get word itself
            const word = document.getText(wordRange);

            // Match all instances in the document
			for (let i = 0; i < document.lineCount; i++) {
                let line = document.lineAt(i);

                // Target spotted
                if (line.text.includes(word)) {

                    let indices = getIndices(word, line.text, false);
                    indices.forEach(index => {
                        let targetStart = new Position(i, index);
                        let targetEnd = new Position(i, index + word.length);
                        let targetRange = new Range(targetStart, targetEnd);
                        locations.push(new Location(document.uri, targetRange));
                    });
                }
            }
            return resolve(locations);
		});
	}
}