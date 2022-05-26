import { window, CancellationToken, TextDocument, SemanticTokens, SemanticTokensBuilder, SemanticTokensLegend, DocumentSemanticTokensProvider, Event } from 'vscode';

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
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

// Create legend to export to main
export class PraatLegend implements SemanticTokensLegend {
	tokenTypes: string[] = tokenTypesLegend;
	tokenModifiers: string[] = tokenModifiersLegend;
}

interface PraatUserVariable {
	name: string;
	type?: string;
	value: any;
}

export default class PraatSemanticHighlighter implements DocumentSemanticTokensProvider {

    onDidChangeSemanticTokens?: Event<void> | undefined;

    public async provideDocumentSemanticTokens(document: TextDocument, _token: CancellationToken): Promise<SemanticTokens | null | undefined> {
		
		const allTokens = this._parseText(document.getText());
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

	private _parseText(text: string): IParsedToken[] {
		const r: IParsedToken[] = [];
		const lines = text.split(/\r\n|\r|\n/);
		for (let i = 0; i < lines.length; i++) {

			const line = lines[i];

			// Looking for variable declaration
			let variableMatch = /([a-z_$\x7f-\xff][a-zA-Z0-9_$\x7f-\xff]*)(\s*)/g;
			let match: RegExpExecArray | null = null;

			if (line.indexOf("=") === line.lastIndexOf("=")) {
                while (match = variableMatch.exec(line.split("=")[0])) {
                    if (match[0].endsWith("=")) {
                        continue;
                    }
					let word = match[0].trimRight();
					r.push({
						line: i,
						startCharacter: line.indexOf(word),
						length: word.length,
						tokenType: 'variable',
						tokenModifiers: ['declaration']
					});
				}
			}
		}
		return r;
	}
}

export class PraatUserHighlighter implements PraatUserVariable {
	name: string = 'test';
	type?: string | undefined;
	value: any;
}