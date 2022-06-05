'use strict';

import * as vscode from 'vscode';
import PraatCompletionItemProvider from './completionItemProvider';
import PraatHoverProvider from './HoverProvider';
import PraatDocumentSymbolProvider from './SymbolProvider';
import PraatSemanticHighlighter, { PraatLegend } from './SemanticTokensProvider';
import PraatDefinitionProvider from './DefinitionProvider';
import PraatReferenceProvider from './ReferenceProvider';
import { updatePathIndicator, updateButtons, pathIndicator } from './StatusBar';
import registerCommands from './Commands';

export function activate(context: vscode.ExtensionContext) {

	// Run status bar stuff once when the extension activates
	updatePathIndicator(context);

	// Register status bar items on the first run
	updateButtons();

	// Update status bar if user changes configuration
	vscode.workspace.onDidChangeConfiguration(changed => {
		updateButtons();
	});

	// Register commands
	registerCommands(context);

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

// this method is called when the extension is deactivated
export function deactivate() {

}