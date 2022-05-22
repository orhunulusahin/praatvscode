import { CompletionItemProvider, CompletionItem, CompletionItemKind, CancellationToken, TextDocument, Position, Range, TextEdit, workspace, CompletionContext } from 'vscode';
import praatGlobals = require('./praatGlobals');
import praatGlobalFunctions = require('./praatGlobalFunctions');

export default class PraatCompletionItemProvider implements CompletionItemProvider {

	public provideCompletionItems(document: TextDocument, position: Position, _token: CancellationToken, context: CompletionContext): Promise<CompletionItem[]> {
		let result: CompletionItem[] = [];

		let shouldProvideCompletionItems = workspace.getConfiguration('praat').get<boolean>('suggest.basic', true);
		if (!shouldProvideCompletionItems) {
			return Promise.resolve(result);
		}

		let range = document.getWordRangeAtPosition(position);
		let prefix = range ? document.getText(range) : '';
		if (!range) {
			range = new Range(position, position);
		}

		if (context.triggerCharacter === '>') {
			const twoBeforeCursor = new Position(position.line, Math.max(0, position.character - 2));
			const previousTwoChars = document.getText(new Range(twoBeforeCursor, position));
			if (previousTwoChars !== '->') {
				return Promise.resolve(result);
			}
		}

		let added: any = {};
		let createNewProposal = function (kind: CompletionItemKind, name: string, entry: praatGlobals.IEntry | null): CompletionItem {
			let proposal: CompletionItem = new CompletionItem(name);
			proposal.kind = kind;
			if (entry) {
				if (entry.description) {
					proposal.documentation = entry.description;
				}
				if (entry.signature) {
					proposal.detail = entry.signature;
				}
			}
			return proposal;
		};

		let matches = (name: string) => {
			return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
		};

		if (matches('praat') && range.start.character >= 2) {
			let twoBeforePosition = new Position(range.start.line, range.start.character - 2);
			let beforeWord = document.getText(new Range(twoBeforePosition, range.start));

			if (beforeWord === '<?') {
				let proposal = createNewProposal(CompletionItemKind.Class, '<?praat', null);
				proposal.textEdit = new TextEdit(new Range(twoBeforePosition, position), '<?praat');
				result.push(proposal);
				return Promise.resolve(result);
			}
		}

		for (let globalvariables in praatGlobals.globalvariables) {
			if (praatGlobals.globalvariables.hasOwnProperty(globalvariables) && matches(globalvariables)) {
				added[globalvariables] = true;
				result.push(createNewProposal(CompletionItemKind.Variable, globalvariables, praatGlobals.globalvariables[globalvariables]));
			}
		}
		for (let globalfunctions in praatGlobalFunctions.globalfunctions) {
			if (praatGlobalFunctions.globalfunctions.hasOwnProperty(globalfunctions) && matches(globalfunctions)) {
				added[globalfunctions] = true;
				result.push(createNewProposal(CompletionItemKind.Function, globalfunctions, praatGlobalFunctions.globalfunctions[globalfunctions]));
			}
		}
		for (let compiletimeconstants in praatGlobals.compiletimeconstants) {
			if (praatGlobals.compiletimeconstants.hasOwnProperty(compiletimeconstants) && matches(compiletimeconstants)) {
				added[compiletimeconstants] = true;
				result.push(createNewProposal(CompletionItemKind.Field, compiletimeconstants, praatGlobals.compiletimeconstants[compiletimeconstants]));
			}
		}
		for (let keywords in praatGlobals.keywords) {
			if (praatGlobals.keywords.hasOwnProperty(keywords) && matches(keywords)) {
				added[keywords] = true;
				result.push(createNewProposal(CompletionItemKind.Keyword, keywords, praatGlobals.keywords[keywords]));
			}
		}

		let text = document.getText();
		if (prefix[0] === '$') {
			let variableMatch = /\$([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)/g;
			let match: RegExpExecArray | null = null;
			while (match = variableMatch.exec(text)) {
				let word = match[0];
				if (!added[word]) {
					added[word] = true;
					result.push(createNewProposal(CompletionItemKind.Variable, word, null));
				}
			}
		}
		let functionMatch = /function\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\s*\(/g;
		let match2: RegExpExecArray | null = null;
		while (match2 = functionMatch.exec(text)) {
			let word2 = match2[1];
			if (!added[word2]) {
				added[word2] = true;
				result.push(createNewProposal(CompletionItemKind.Function, word2, null));
			}
		}
		return Promise.resolve(result);
	}
}