// Diagnostic provider for PraatVSCode
// Orhun Ulusahin, updated: 31/08/2022

import { open } from "fs";
import { Diagnostic, DiagnosticCollection, languages, Range, Position, Location, ExtensionContext, DiagnosticSeverity, DiagnosticChangeEvent, workspace, DiagnosticRelatedInformation, DiagnosticTag, Uri, TextDocument, TextLine, window } from "vscode";

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
				// console.log('invalid string definition');
				diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, varName, varName, "String variable syntax error", "String variable names must end with the character \"$\""));
			}

			// Detect unclosed tags
			const tagPairs = [['for', 'endfor'], ['if', 'endif'], ['while', 'endwhile'], ['loop', 'until'], ['proc', 'endproc']];
			function detectUnclosedTags(startLine: number = lineIndex, endLine: number = doc.lineCount): boolean {
				let out = false;

				let thisLine = doc.lineAt(startLine);
				tagPairs.map((pair) => {
					let openers = [];
					let closers = [];
					if (thisLine.text.trim().startsWith(pair[0])) {
						openers.push(thisLine.lineNumber);
						
						console.log('tag ' + pair[0] + ' opened on line ' + thisLine.lineNumber)
					}
					if (thisLine.text.trim().startsWith(pair[1])) {
						closers.push(thisLine.lineNumber);
						console.log('tag ' + pair[1] + ' closed on line ' + thisLine.lineNumber)
					}
					if (openers.length !== closers.length) {
						diagnostics.push(createDiagnostic(doc, thisLine, thisLine.lineNumber, pair[0], pair[0], "Unmatched control tags.", "Tag `" + pair[0] + "` not properly terminated. It must be terminated with tag `" + pair[1] + "`."));
					}
				});
				return out;
			}
			detectUnclosedTags(lineIndex);

		}
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