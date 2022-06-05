// Reference provider for PraatVSCode
// Orhun Ulusahin, 06/2022

import { TextDocument, Position, ReferenceProvider, Location, Range, CancellationToken } from 'vscode';
import { getIndicesOf } from './SemanticTokensProvider';

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

                    let indices = getIndicesOf(word, line.text, false);
                    indices.forEach(index => {
                        let targetStart = new Position(i, index);
                        let targetEnd = new Position(i, index + word.length);
                        let targetRange = new Range(targetStart, targetEnd);
                        locations.push(new Location(document.uri, targetRange));
                    });

                    // // Get the first reference, the easy part
                    // let targetStart = new Position(i, line.text.indexOf(word));
                    // let targetEnd = new Position(i, line.text.indexOf(word) + word.length);
                    // let targetRange = new Range(targetStart, targetEnd);
                    // locations.push(new Location(document.uri, targetRange));

                    // // Split the line at the first iteration of target (offset = word.length)
                    // let splitLine = line.text.slice(line.text.indexOf(word) + word.length);
                    // let splitCount = 1;
                    // let whitespaces = 0;

                    // // If there are more references to the target on the same line, find the first of those
                    // // As long as we have more "copies" and the length is sufficient, loop
                    // while (splitLine.includes(word) && splitLine.length > word.length) {

                    //     // Keep track of whitespaces at the start of the split part
                    //     whitespaces = whitespaces + splitLine.length-splitLine.trimStart().length;

                    //     // Add offsets based on number of splits
                    //     targetStart = new Position(i, line.text.indexOf(word) + (splitCount*word.length) + whitespaces);
                    //     targetEnd = new Position(i, line.text.indexOf(word) + ((1+splitCount)*word.length) + whitespaces);
                    //     targetRange = new Range(targetStart, targetEnd);
                    //     locations.push(new Location(document.uri, targetRange));
                    //     splitLine = splitLine.slice(splitLine.indexOf(word) + word.length);

                    //     // Track splits
                    //     splitCount++;
                    // }
                }
            }
            return resolve(locations);
		});
	}
}