// Diagnostic provider for PraatVSCode
// Orhun Ulusahin, updated: 07/06/2022

import { Diagnostic, DiagnosticCollection, languages, Range, Position, Location, ExtensionContext, DiagnosticSeverity, DiagnosticChangeEvent, workspace, DiagnosticRelatedInformation, DiagnosticTag, Uri, TextDocument, TextLine, window } from "vscode";

export const textDiagnostic = "selectObject";
export const textMention = 'selectObject';

export function refreshDiagnostics(doc: TextDocument, praatDiagnostics: DiagnosticCollection): void {
	const diagnostics: Diagnostic[] = [];

	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const lineOfText = doc.lineAt(lineIndex);
		if (lineOfText.text.includes(textDiagnostic)) {
			diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex));
		}
	}

	praatDiagnostics.set(doc.uri, diagnostics);
}

function createDiagnostic(doc: TextDocument, lineOfText: TextLine, lineIndex: number): Diagnostic {
	// find where in the line of that the 'selectObject' is mentioned
	const index = lineOfText.text.indexOf(textDiagnostic);

	// create range that represents, where in the document the word is
	const range = new Range(lineIndex, index, lineIndex, index + textDiagnostic.length);

	const diagnostic = new Diagnostic(range, "Wanna select smth?",
		DiagnosticSeverity.Error);
	diagnostic.code = textMention;
	diagnostic.source = "PraatVSCode";
	diagnostic.relatedInformation = [ new DiagnosticRelatedInformation(new Location(doc.uri, range), "Select mistake!") ];
	return diagnostic;
}

export function subscribeToDocumentChanges(context: ExtensionContext, praatDiagnostics: DiagnosticCollection): void {
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

// export function activate(context: ExtensionContext) {

// 	const collection = languages.createDiagnosticCollection('test');
// 	if (window.activeTextEditor) {
// 		updateDiagnostics(window.activeTextEditor.document, collection);
// 	}
// 	context.subscriptions.push(window.onDidChangeActiveTextEditor(editor => {
// 		if (editor) {
// 			updateDiagnostics(editor.document, collection);
// 		}
// 	}));
// }

// function updateDiagnostics(document: TextDocument, collection: DiagnosticCollection): void {
// 	if (document) {
// 		collection.set(document.uri, [{
// 			code: '',
// 			message: 'cannot assign twice to immutable variable `x`',
// 			range: new Range(new Position(3, 4), new Position(3, 10)),
// 			severity: DiagnosticSeverity.Error,
// 			source: '',
// 			relatedInformation: [
// 				new DiagnosticRelatedInformation(new Location(document.uri, new Range(new Position(1, 8), new Position(1, 9))), 'first assignment to `x`')
// 			]
// 		}]);
// 	} else {
// 		collection.clear();
// 	}
// }