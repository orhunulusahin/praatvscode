import { match } from 'assert';
import { info } from 'console';
import { posix } from 'path';
import { window, CancellationToken, commands, DocumentSymbolProvider, TextDocument, SemanticTokens, SemanticTokensBuilder, SemanticTokensLegend, DocumentSemanticTokensProvider, Event, SymbolKind, Uri, SymbolInformation, Location, Range, Position } from 'vscode';

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

interface PraatUserVariable {
	name: string;
	type?: string;
	value?: any;
}

export class PraatLegend implements SemanticTokensLegend {
	tokenTypes: string[] = tokenTypesLegend;
	tokenModifiers: string[] = tokenModifiersLegend;
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

			// Looking for variable declarations
			let variableMatch = /([a-z_\x7f-\xff][a-zA-Z0-9_$\x7f-\xff]*)(\s*)\=/g;
			let match: RegExpExecArray | null = null;

			if (line.indexOf("=") === line.lastIndexOf("=") && !line.includes('if') && !line.includes('#') && !line.includes(';')) {
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
					for (let j = i+1; j < lines.length; j++) {
						let callLine = lines[j];
						// If word is not embedded in another word...
						// There MUST be plenty of room for optimization here!
						if (callLine.includes(word) && document.getText(document.getWordRangeAtPosition(new Position(j, callLine.indexOf(word)+1))) === word && !callLine.includes('#') && !callLine.includes(';')) {
							r.push({
								line: j,
								startCharacter: callLine.indexOf(word),
								length: word.length,
								tokenType: 'variable',
								tokenModifiers: []
							});
						}
					}
				}
			}

			// And for procedure declarations
			if (line.includes('procedure')) {
				let procName:string = '';
				// See if it takes arguments
				if (line.includes(':')) {
					procName = line.substring(9,line.length).split(':')[0].trim();
				}
				else {
					procName = line.substring(9,line.length).trim();
				}
				r.push({
					line: i,
					startCharacter: line.indexOf(procName),
					length: procName.length,
					tokenType: 'function',
					tokenModifiers: ['declaration']
				});
			}
		}
		return r;
	}
}