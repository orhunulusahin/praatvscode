'use strict';

import * as vscode from 'vscode';
import PraatCompletionItemProvider from './CompletionItemProvider';
import PraatHoverProvider from './HoverProvider';
import PraatDocumentSymbolProvider from './SymbolProvider';
import PraatSemanticHighlighter, { PraatLegend } from './SemanticTokensProvider';
import PraatDefinitionProvider from './DefinitionProvider';
import PraatReferenceProvider from './ReferenceProvider';
import { updatePathIndicator, updateButtons, pathIndicator, updateTracker } from './StatusBar';
import registerCommands from './Commands';
import { subscribeToDocumentChanges, refreshDiagnostics } from './Diagnostics';

export function activate(context: vscode.ExtensionContext) {

	// Run status bar stuff once when the extension activates
	updatePathIndicator(context);
	updateButtons();
	updateTracker();

	// Update status bar if user changes configuration
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(changed => {
		if (changed.affectsConfiguration("praatvscode")) {
			vscode.window.showInformationMessage('PraatVSCode config changed!');
			updatePathIndicator(context);
			updateButtons();
			updateTracker();
		}
	}));
	
	// Track selection or file changes for status bar items
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(changed => {
		updatePathIndicator(context);
	}));
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateTracker));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateTracker));
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateButtons));

	// Register commands
	// Defined in Commands.ts
	registerCommands(context);

	// Test feature
	// Diagnostics
	const collection = vscode.languages.createDiagnosticCollection("praatDiagnostics");
	subscribeToDocumentChanges(context, collection);
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(vscode.window.activeTextEditor?.document, collection);
	}

	// Autocompletion
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('praat', new PraatCompletionItemProvider(), '>', '$'));
	// Hover info
	context.subscriptions.push(vscode.languages.registerHoverProvider('praat', new PraatHoverProvider()));
	// Recognize user-defined symbols
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('praat', new PraatDocumentSymbolProvider()));
	// Semantic highlighting for user defined variables
	context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider('praat', new PraatSemanticHighlighter(), new PraatLegend()));
	// Symbol declaration provider for user defined variables
	context.subscriptions.push(vscode.languages.registerDefinitionProvider('praat', new PraatDefinitionProvider()));
	// Reference provider for finding references to variables
	context.subscriptions.push(vscode.languages.registerReferenceProvider('praat', new PraatReferenceProvider()));
}

// This method is called when the extension is deactivated
export function deactivate() {

}