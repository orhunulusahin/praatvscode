// Diagnostic provider for PraatVSCode
// Orhun Ulusahin, updated: 07/06/2022

import { Diagnostic, DiagnosticCollection, languages, Range, Position, Location, ExtensionContext, DiagnosticSeverity, DiagnosticChangeEvent, workspace, DiagnosticRelatedInformation, DiagnosticTag, Uri, TextDocument, TextLine, window } from "vscode";

export const textDiagnostic = "selectObject";
export const textMention = 'selectObject';

export function refreshDiagnostics(doc: TextDocument, praatDiagnostics: DiagnosticCollection) {
	const diagnostics: Diagnostic[] = [];

	if (doc.languageId === "praat") {
		for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
			const lineOfText = doc.lineAt(lineIndex);
			if (lineOfText.text.includes(textDiagnostic)) {
				if (!lineOfText.text.includes(':')) {
					diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex));
				} else if (lineOfText.text.includes('"') && (lineOfText.text.indexOf('"') === lineOfText.text.lastIndexOf('"'))) {
					diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex));	
				}
			}
		}
		praatDiagnostics.set(doc.uri, diagnostics);
	}
}

function createDiagnostic(doc: TextDocument, lineOfText: TextLine, lineIndex: number): Diagnostic {
	// find where in the line of that the 'selectObject' is mentioned
	const index = lineOfText.text.indexOf(textDiagnostic);

	// create range that represents, where in the document the word is
	const range = new Range(lineIndex, index, lineIndex, index + textDiagnostic.length);

	const diagnostic = new Diagnostic(range, "selectObject syntax error",
		DiagnosticSeverity.Error);
	diagnostic.code = textMention;
	diagnostic.source = "PraatVSCode";
	diagnostic.relatedInformation = [ new DiagnosticRelatedInformation(new Location(doc.uri, range), "selectObject must take string or variable (object) as input and ':' as operator") ];
	return diagnostic;
}

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