import { HoverProvider, Hover, MarkedString, TextDocument, CancellationToken, Position, workspace } from 'vscode';
import praatGlobals = require('./praatGlobals');
import praatGlobalFunctions = require('./praatGlobalFunctions');

function textToMarkedString(text: string): MarkedString {
	return text.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
}

export default class PraatHoverProvider implements HoverProvider {

	public provideHover(document: TextDocument, position: Position, _token: CancellationToken): Hover | undefined {
		let enable = workspace.getConfiguration('praat').get<boolean>('suggest.basic', true);
		if (!enable) {
			return undefined;
		}

		let wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			return undefined;
		}

		let name = document.getText(wordRange);

		let entry = praatGlobalFunctions.globalfunctions[name] || praatGlobals.globalvariables[name] || praatGlobals.classes[name] || praatGlobals.keywords[name];
		if (entry && entry.description) {
			let signature = name + (entry.signature || '');
			let contents: MarkedString[] = [textToMarkedString(entry.description), { language: 'praat', value: signature }];
			return new Hover(contents, wordRange);
		}

		return undefined;
	}
}