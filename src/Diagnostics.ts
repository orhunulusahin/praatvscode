// Diagnostic provider for PraatVSCode
// Orhun Ulusahin, updated: 31/08/2022

import { Diagnostic, DiagnosticCollection, Range, Location, ExtensionContext, DiagnosticSeverity,  workspace, DiagnosticRelatedInformation, TextDocument, TextLine, window, languages } from "vscode";

const selectDiagnostic = ["selectObject", "plusObject", "minusObject"];

export function refreshDiagnostics(doc: TextDocument, praatDiagnostics: DiagnosticCollection) {
	const diagnostics: Diagnostic[] = [];

	if (doc.languageId === "praat") {
		for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
			const lineOfText = doc.lineAt(lineIndex);

			// Selection diagnostics
			selectDiagnostic.forEach(selectword => {
				if (lineOfText.text.includes(selectword)) {
					if (!lineOfText.text.includes(':') || lineOfText.text.endsWith(":")) {
						diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, selectword + " syntax error", selectword, selectword + " syntax error `", selectword + "` must take string or variable (object) as input and ':' as operator"));
					} else if (lineOfText.text.includes('"') && (lineOfText.text.indexOf('"') === lineOfText.text.lastIndexOf('"'))) {
						diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, selectword + " syntax error", selectword, selectword + " syntax error `", selectword + "` must take string or variable (object) as input and ':' as operator"));
					}
				}
			});

			// Trying to define a string variable without "$"
			const stringDefRegex = /([a-z_.\x7f-\xff][a-zA-Z0-9_'\x7f-\xff]*)(\s*)\=(\s*)\"(.*)\"/g;
			if (lineOfText.text.match(stringDefRegex) && !lineOfText.text.includes("$")) {
				let varName = lineOfText.text.split("=")[0].trim();
				diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, varName, varName, "String variable syntax error", "String variable names must end with the character \"$\""));
			}

		}

		const tagPairs = [
			['for', 'endfor'],
			['if', 'endif'],
			['while', 'endwhile'],
			['loop', 'until'],
			['procedure', 'endproc'],
			['editor','endeditor']
		];

		function detectUnclosedTags(startline: number = 0, pair: string[]) {
			let openers: number[] = [];
			let closers: number[] = [];
			for (let lineIndex = startline; lineIndex < doc.lineCount; lineIndex++) {
				let thisText = doc.lineAt(lineIndex).text.trim();
				let openExp = new RegExp('^'+pair[0]+'(\\s|[:]|\\.\\.\\.)', 'g');
				let closeExp = new RegExp('^'+pair[1]+'(\\s|\\b|\\$)', 'g');
				if (thisText.match(openExp)) {
					openers.push(lineIndex);
				}
				if (thisText.match(closeExp)) {
					closers.push(lineIndex);
				}
			}
			// The last closer "closes" the first opener
			// Both go, leaving an array of unopened tags
			closers = closers.reverse();
			if (openers.length !== closers.length) {
				let k =0;
				while(k <= Math.min(closers.length, openers.length) && closers.length + openers.length > 1) {
					openers.shift();
					closers.pop();
					k++;
				}
				openers.forEach(opener => {
					diagnostics.push(createDiagnostic(doc, doc.lineAt(opener), opener, pair[0], pair[0], "Unmatched control tags.", "Tag `" + pair[0] + "` not properly terminated. Must be terminated with tag `" + pair[1] + "`."));
				});
				closers.forEach(closer => {
					diagnostics.push(createDiagnostic(doc, doc.lineAt(closer), closer, pair[1], pair[1], "Unmatched control tags.", "Tag `" + pair[1] + "` not properly initiated. Must be initiated with tag `" + pair[0] + "`."));
				});
			}
		}
		tagPairs.map((tagPair => detectUnclosedTags(0, tagPair)));

		praatDiagnostics.set(doc.uri, diagnostics);

	}

}

function createDiagnostic(doc: TextDocument, lineOfText: TextLine, lineIndex: number, markedCode: string, diagnosticText: string, message: string, description: string): Diagnostic {
	// find where in the line of that the diagnostic text is mentioned
	const index = lineOfText.text.indexOf(diagnosticText);

	// Create range that represents, where in the document the word is
	const range = new Range(lineIndex, index, lineIndex, index + diagnosticText.length);

	const diagnostic = new Diagnostic(range, message,
		DiagnosticSeverity.Error);
	diagnostic.code = markedCode;
	diagnostic.source = "PraatVSCode";
	diagnostic.relatedInformation = [new DiagnosticRelatedInformation(new Location(doc.uri, range), description)];
	return diagnostic;
}

// Make sure diagnostics are appropriately updated
export function subscribeToDocumentChanges(context: ExtensionContext, praatDiagnostics: DiagnosticCollection) {
	if (window.activeTextEditor) {
		refreshDiagnostics(window.activeTextEditor.document, praatDiagnostics);
	}
	context.subscriptions.push(
		window.onDidChangeActiveTextEditor(editor => {
			if (editor) {
				refreshDiagnostics(editor.document, praatDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, praatDiagnostics))
	);

	context.subscriptions.push(
		workspace.onDidCloseTextDocument(doc => praatDiagnostics.delete(doc.uri))
	);

}