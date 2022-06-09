import { CompletionItemProvider, window, CompletionItem, CompletionItemKind, CancellationToken, TextDocument, Position, Range, TextEdit, workspace, CompletionContext, SnippetString } from 'vscode';
import praatGlobals = require('./praatGlobals');
import praatGlobalFunctions = require('./praatGlobalFunctions');
import praatManuals = require('./PraatObjectFunctions');

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
				let completeSnippet = new SnippetString(entry?.preSnippet);
				if (entry.description) {
					proposal.documentation = entry.description;
				}
				if (entry.signature) {
					proposal.detail = entry.signature;
				}
				if (entry.preSnippet) {
					// Always insert the full snippet with tab key interface
					proposal.insertText = completeSnippet;
				}
			}
			return proposal;
		};

		let createMethodProposal = function (kind: CompletionItemKind, name: string, entry: praatManuals.ObjectMethod | null): CompletionItem {
			let proposal: CompletionItem = new CompletionItem(name);
			proposal.kind = kind;
			if (entry) {
				let completeSnippet = new SnippetString(entry?.preSnippet);
				if (entry.description) {
					proposal.documentation = entry.description;
				}
				// if (entry.signature) {
				// 	proposal.detail = entry.signature;
				// }
				if (entry.preSnippet) {
					// Always insert the full snippet with tab key interface
					proposal.insertText = completeSnippet;
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
		for (let keywords in praatGlobals.classes) {
			if (praatGlobals.classes.hasOwnProperty(keywords) && matches(keywords)) {
				added[keywords] = true;
				result.push(createNewProposal(CompletionItemKind.Class, keywords, praatGlobals.keywords[keywords]));
			}
		}
		for (let keywords in praatGlobals.keywords) {
			if (praatGlobals.keywords.hasOwnProperty(keywords) && matches(keywords)) {
				added[keywords] = true;
				result.push(createNewProposal(CompletionItemKind.Keyword, keywords, praatGlobals.keywords[keywords]));
			}
		}
		// Include every single built-in Praat function
		let thisClass: keyof typeof praatManuals.praatMethods;
		for ( thisClass in praatManuals.praatMethods) {
			// Looping through classes now 
			console.log(thisClass);
			for (let thisMethod in praatManuals.praatMethods[thisClass].praatMethods) {
				console.log(thisMethod);
				added[thisMethod] = true;
				result.push(createMethodProposal(CompletionItemKind.Function, thisMethod, praatManuals.praatMethods[thisClass].praatMethods[thisMethod]));
			}
		}

		// Scan the document
		let text = document.getText();

		// const followingCharacter = new Position(range.start.line, position.character + 1);
		// const secondFollowingCharacter = new Position(range.start.line, position.character + 2);
	
		// Find user-defined variables
		let variableMatch = /([a-z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)(\s*)\=/g;
		let match: RegExpExecArray | null = null;
		while (match = variableMatch.exec(text)) {
			let word:string;
			if (match[0].endsWith(" =")) {
				word = match[0].substring(0,match[0].length-2);
			}
			else {
				word = match[0].substring(0,match[0].length-2);
			}
			if (!added[word]) {
				added[word] = true;
				// Offer user-defined variables as completion items
				result.push(createNewProposal(CompletionItemKind.Variable, word, null));
			}
		}

		// Now do user-defined functions ("procedures" in Praat)
		let functionMatch = /procedure\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\s*\(/g;
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