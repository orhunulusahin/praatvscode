// Semantic token provider for PraatVSCode
// Orhun Ulusahin, updated 06/06/2022

import { window, CancellationToken, TextDocument, SemanticTokens, SemanticTokensBuilder, SemanticTokensLegend, DocumentSemanticTokensProvider, Event, Position, DocumentHighlight, Hover, Range, CancellationTokenSource } from 'vscode';
import PraatHoverProvider, { textToMarkedString } from './HoverProvider';

// Gets array of indices for multiple occurences of substring
export function getIndices(needle: string, haystack: string, matchCase: boolean): number[] {
	let searchStrLen = needle.length;
	if (searchStrLen === 0) {
		return [];
	}
	let searchOnset = 0, index, indices = [];
	if (!matchCase) {
		needle = needle.toLowerCase();
		haystack = haystack.toLowerCase();
	}
	while ((index = haystack.indexOf(needle, searchOnset)) > -1) {
		indices.push(index);
		searchOnset = index + searchStrLen;
	}
	return indices;
}

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

// interface PraatUserVariable {
// 	name: string;
// 	type?: string;
// 	value?: any;
// }

export class PraatLegend implements SemanticTokensLegend {
	tokenTypes: string[] = tokenTypesLegend;
	tokenModifiers: string[] = tokenModifiersLegend;
}

// Function for determining if a line is a comment
export function isComment(line: string): boolean | null {
	line = line.trimStart();
	if (line.length === 0) {
		return null;
	}
	else if (line.startsWith("#") || line.startsWith(";")) {
		return true;
	} else {
		return false;
	}
}

// function isWholeWord(substring:string, host:string): boolean | null {
// 	if (substring.trim() === substring) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Words used for catching variable declarations in forms
const enumFormWords = ['optionmenu', 'boolean', 'choice'];
const numFormWords = ['real', 'number', 'integer', 'positive', 'natural'];
const strFormWords = ['word', 'sentence', 'text', 'infile', 'outfile', 'folder']; // 'comment', 'option', and 'form' should be omitted
export const formWords = enumFormWords.concat(numFormWords).concat(strFormWords);

// Function for ruling out keywords that should deny highlighting in line
export const noHighlightWords = formWords;
export function shouldHighlight(line: string): boolean | null {
	let shouldNotHighlight: boolean = formWords.some((item) => line.includes(item));
	if (line.length === 0) {
		return null;
	}
	else if ((line.includes('Formula') && line.endsWith("\"")) || line.includes('option')) {
		return false;
	}
	else if (shouldNotHighlight) {
		return false;
	}
	else {
		return true;
	}
}

// Map the legend
const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const tokenTypesLegend = [
	'comment', 'variable', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
	'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
	'method', 'decorator', 'macro', 'parameter', 'property', 'label'
];
tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

const tokenModifiersLegend = [
	'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
	'modification', 'async'
];
tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

export default class PraatSemanticHighlighter implements DocumentSemanticTokensProvider {

	onDidChangeSemanticTokens?: Event<void> | undefined;

	public async provideDocumentSemanticTokens(document: TextDocument, _token: CancellationToken): Promise<SemanticTokens | null | undefined> {

		// Gets all declarations
		const allTokens = this._parseText(document);
		const builder = new SemanticTokensBuilder();
		allTokens.forEach((token) => {
			builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
		});

		return builder.build();
	}

	private _encodeTokenType(tokenType: string): number {
		if (tokenType === 'variable') {
			return 1;
		} else if (tokenTypes.has(tokenType)) {
			return tokenTypes.get(tokenType)!;
		} else if (tokenType === 'notInLegend') {
			return tokenTypes.size + 2;
		}
		return 0;
	}

	private _encodeTokenModifiers(strTokenModifiers: string[]): number {
		let result = 0;
		for (let i = 0; i < strTokenModifiers.length; i++) {
			const tokenModifier = strTokenModifiers[i];
			if (tokenModifiers.has(tokenModifier)) {
				result = result | (1 << tokenModifiers.get(tokenModifier)!);
			} else if (tokenModifier === 'notInLegend') {
				result = result | (1 << tokenModifiers.size + 2);
			}
		}
		return result;
	}

	private _parseText(document: TextDocument): IParsedToken[] {
		const r: IParsedToken[] = [];
		const lines = document.getText().split(/\r\n|\r|\n/);

		for (let i = 0; i < lines.length; i++) {

			const line = lines[i];
			let hasFormInput = formWords.some((item) => line.trimStart().startsWith(item));

			// Looking for variable declarations
			let variableMatch = /([a-z_.\x7f-\xff][a-zA-Z0-9_$'\x7f-\xff]*)(\s*)\=/g;
			let match: RegExpExecArray | null = null;
			if (line.indexOf("=") === line.lastIndexOf("=") && !line.includes('if') && !isComment(line)) {
				// Look for standard declaration
				while (match = variableMatch.exec(line)) {
					if (match[0].endsWith("==")) {
						continue;
					}
					let word = match[0].split("=")[0].trimRight();
					r.push({
						line: i,
						startCharacter: line.indexOf(word),
						length: word.length,
						tokenType: 'variable',
						tokenModifiers: ['declaration']
					});

					// Now try to catch and highlight all calls to the newly defined variable
					for (let j = 0; j < lines.length; j++) {
						let callLine = lines[j];
						// If word is not embedded in another word...
						// There MUST be plenty of room for optimization here!
						if (callLine.includes(word) && !isComment(callLine) && shouldHighlight(callLine)) {
							let indices = getIndices(word, callLine, false);
							indices.forEach(index => {
								let wordAtFollowing = document.getText(document.getWordRangeAtPosition(new Position(j, index + 1)));
								let wordAtPrevious = document.getText(document.getWordRangeAtPosition(new Position(j, index)));
								if (wordAtFollowing === word && word === wordAtPrevious) {
									r.push({
										line: j,
										startCharacter: index,
										length: word.length,
										tokenType: 'variable',
										tokenModifiers: []
									});
								}
							});
						}
					}
				}
			}

			// Look for loop iterator declaration
			// The target is trapped between the words "for" and "from"
			let loopMatch = /(for)(\s*)([a-z_.\x7f-\xff][a-zA-Z0-9_'\x7f-\xff]*)(\s*)(?:from)(?:.*)(to)/g;
			let loopMatchArray: RegExpExecArray | null = null;
			if (line.includes("for")) {
				while (loopMatchArray = loopMatch.exec(line)) {
					// Use position to fetch the whole word
					let catchPosition: Position;
					if (line.includes('from')) {
						catchPosition = new Position(i, line.indexOf("from") - 2);
					} else {
						catchPosition = new Position(i, line.indexOf("to") - 2);
					}
					let iterator = document.getText(document.getWordRangeAtPosition(catchPosition));
					iterator = iterator.trim();
					r.push({
						line: i,
						startCharacter: line.indexOf(iterator),
						length: iterator.length,
						tokenType: 'variable',
						tokenModifiers: ['declaration']
					});
					for (let j = i + 1; j < lines.length; j++) {
						let callLine = lines[j];
						// If word is not embedded in another word...
						// There MUST be plenty of room for optimization here!
						if (!isComment(callLine) && shouldHighlight(callLine)) {
							let indices = getIndices(iterator, callLine, false);
							indices.forEach(index => {
								let wordAtFollowing = document.getText(document.getWordRangeAtPosition(new Position(j, index + 1)));
								let wordAtPrevious = document.getText(document.getWordRangeAtPosition(new Position(j, index)));
								if (wordAtFollowing === iterator && iterator === wordAtPrevious) {
									r.push({
										line: j,
										startCharacter: index,
										length: iterator.length,
										tokenType: 'variable',
										tokenModifiers: []
									});
								}
							});
						}
					}
				}
			}

			// And for procedure declarations
			if (line.includes('procedure') && !isComment(line)) {
				let procName: string = '';
				// See if it takes arguments
				let spacecount = line.length - line.trimStart().length;
				if (line.includes(':')) {
					procName = line.substring(spacecount + 9, line.length).split(':')[1].trim();
				}
				else {
					procName = line.substring(spacecount + 9, line.length).split(' ')[1].trim();
				}
				r.push({
					line: i,
					startCharacter: line.indexOf(procName),
					length: procName.length,
					tokenType: 'function',
					tokenModifiers: ['declaration']
				});

				// Now find the calls
				for (let j = 0; j < lines.length; j++) {
					let callLine = lines[j];
					if (callLine.includes(" " + procName) || callLine.includes("@" + procName) && !isComment(callLine) && shouldHighlight(callLine)) {
						// Add space to avoid embedded words
						let indices = getIndices(procName, callLine, false);
						indices.forEach(index => {
							r.push({
								line: j,
								startCharacter: index,
								length: procName.length,
								tokenType: 'function',
								tokenModifiers: []
							});
							if (callLine.includes("@" + procName)) {
								r.push({
									line: j,
									startCharacter: index - 1,
									length: 1,
									tokenType: 'keyword',
									tokenModifiers: []
								});
							}
						});
					}
				}
			}

			// Also get variables declared in forms
			// If line contains a form element corresponding to any of the above...
			if (hasFormInput && !isComment(line)) {
				let inputName: string = '';
				let keywordIndex = formWords.findIndex((item) => line.includes(item));
				// Find name of variable
				// Special case for optionmenu which takes ":" as operator
				if (line.includes('optionmenu')) {
					inputName = line.split('optionmenu')[1].trimStart().split(':')[0].trim();
				} else {
					inputName = line.split(formWords[keywordIndex])[1].trimStart().split(' ')[0].trim();
				}
				r.push({
					line: i,
					startCharacter: line.indexOf(inputName),
					length: inputName.length,
					tokenType: 'variable',
					tokenModifiers: ['declaration']
				});

				// Now find the calls
				for (let j = 0; j < lines.length; j++) {
					let callLine = lines[j];
					if ((callLine.includes(" " + inputName) || callLine.includes(inputName + " ")) && !isComment(callLine) && shouldHighlight(callLine)) {
						// Add space to avoid embedded words
						let indices = getIndices(inputName, callLine, false);
						indices.forEach(index => {
							r.push({
								line: j,
								startCharacter: index,
								length: inputName.length,
								tokenType: 'variable',
								tokenModifiers: []
							});
						});
					}
				}
			}
		}

		// r.forEach(token => {
		// 	if (token.tokenType === "variable") {
		// 		let tokenPosition = new Position(token.line, token.startCharacter);
		// 		let tokenRange = document.getWordRangeAtPosition(tokenPosition);
		// 		let contents = textToMarkedString(document.getText(tokenRange));
		// 		new PraatHoverProvider().provideHover(document, tokenPosition, new CancellationTokenSource().token, new Hover(contents, tokenRange) );
		// 		// new PraatHoverProvider().addHover(new Hover(contents,tokenRange));
		// 	}
		// });

		return r;
	}
}