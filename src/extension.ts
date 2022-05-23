'use strict';

// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import * as cp from 'child_process';
import PraatCompletionItemProvider from './completionItemProvider';
import PraatHoverProvider from './HoverProvider';

// A semantic highlighter may be developed here after the syntax highlighter is sufficiently capable

export function activate(context: vscode.ExtensionContext) {

	const os = require('os');

	// Check if user pre-defined path for Praat. If not, return empty string.
	var praatPath:string = context.globalState.get('praatpath','');

	// Auto-sub to vscode context so commands are properly removed if the extension is deactivated
	function registerCommandNice(commandId: string, run: (...args: any[]) => void): void {
		context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
	}

	// Status bar button for running the current script (NO GUI)
	var runBackgroundButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	runBackgroundButton.command = 'praatvscode.runScript';
	runBackgroundButton.text = '$(run) Run in background';
	runBackgroundButton.name = 'Button to run script with no GUI';
	runBackgroundButton.tooltip = 'Click to run the script without seeing Praat';

	// Status bar button for running the current script (w/ GUI)
	var runPraatButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	runPraatButton.command = 'praatvscode.runInPraat';
	runPraatButton.text = '$(run) Run in Praat';
	runPraatButton.name = 'Button to run script with GUI';
	runPraatButton.tooltip = 'Click to run the script in Praat';

	// Status bar item for Praat executable path status
	var pathIndicator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
	pathIndicator.name = 'Praat path indicator';
	pathIndicator.command = 'praatvscode.definePath';	

	// Let user provide a path for the Praat executable
	registerCommandNice('praatvscode.definePath', async() => {
		var promptPath = await vscode.window.showInputBox({
				prompt: "Enter the path for the praat executable (without the executable) to run Praat code from VSCode. This is NOT where your script is saved but where the Praat program is located.",
				placeHolder: "C:\\Users\\Username...",
				ignoreFocusOut: true,
				title: "Define Path"
			});
			// If user entered the executable on Windows, remove it
			if (promptPath?.includes('Praat.exe')) {
				promptPath = promptPath.slice(0, promptPath.length - 9);
			}
			// If the path ends with a slash of either kind, remove it 
			if (promptPath?.substring(promptPath.length - 1) === "/" || promptPath?.substring(promptPath.length - 1) === "\\") {
				promptPath = promptPath.slice(0, promptPath.length - 1);
			}
		// Return the "raw" path with no trailing slash (might regret later lol)
		vscode.window.showInformationMessage('Praat path set as: '+ promptPath);
		// Little easter egg for the true ones
		if (promptPath?.includes('desktop') || promptPath?.includes('Desktop')) {
			vscode.window.showInformationMessage('Praat on the desktop... you are a true phonetician!');
		}
		// Push to global context
		await context.globalState.update('praatpath', promptPath);
		// Update status bar
		updatePathIndicator();
	});

	// Let user view the currently set path for the Praat executable
	registerCommandNice('praatvscode.getPath', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			vscode.window.showInformationMessage('The current path for the Praat executable is: '+ praatPath);
		}
	});

	// Fix for weird unicode characters in terminal output readouts
	const outputReplace:any = /[^a-zA-Z0-9!?.:;\n{}\[\] ]/g;	

	// Get user's Praat version
	registerCommandNice('praatvscode.getPraatVersion', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			if (os.type() === 'Windows_NT') { // Gate check
				cp.exec(praatPath +'\\Praat.exe --version', (error, stdout, stderr) => {
					if (error) {
						vscode.window.showInformationMessage('Cannot fetch Praat version info.');
					} else {
						vscode.window.showInformationMessage('Praat version info: ' + stdout.replace(outputReplace,  ""));
					}
				});
			} else if (os.type() === 'Linux') { // Penguin check
				cp.exec(praatPath +'/praat --version', (error, stdout, stderr) => {
					if (error) {
						vscode.window.showInformationMessage('Cannot fetch Praat version info.');
					} else {
						vscode.window.showInformationMessage('Praat version info: ' + stdout.replace(outputReplace, ""));
				}});
			} else if (os.type() === 'Darwin') { // Steve check
				cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --version', (error, stdout, stderr) => {
					if (error) {
						vscode.window.showInformationMessage('Cannot fetch Praat version info.');
					} else {
						vscode.window.showInformationMessage('Praat version info: ' + stdout.replace(outputReplace, ""));
				}});
			} else {
				vscode.window.showInformationMessage('Fatal error. Trouble recognizing OS.');
			}
		}
	});

	// Create an output window to emulate Praat's
	let praatOut = vscode.window.createOutputChannel("Script Output (From Praat)");

	// Major feature!! Let user run Praat code without ever opening Praat
	// This uses VSCode's terminal interactions to run Praat in the background

	registerCommandNice('praatvscode.runScript', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The current file is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {
				if (os.type() === 'Windows_NT') { // Gate check
					cp.exec(praatPath +'\\Praat.exe --run ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'\\Praat.exe --run ' + vscode.window.activeTextEditor?.document.uri.fsPath);
						praatOut.show();
						if (error) {
							praatOut.appendLine('The script did not run.\nPraat sent:\n' + error);
						} else {
							praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + stdout.replace(outputReplace, "") + ' ' + stderr.replace(outputReplace, ""));
						}
					});
				} else if (os.type() === 'Linux') { // Penguin check
					cp.exec(praatPath +'/praat --run ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/praat --run ' + vscode.window.activeTextEditor?.document.uri.fsPath);
						let praatOut = vscode.window.createOutputChannel("Script Output (From Praat)");
						praatOut.show();
						if (error) {
							praatOut.appendLine('The script did not run.\nPraat sent:\n' + error);
						} else {
							praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + stdout.replace(outputReplace, "") + ' ' + stderr.replace(outputReplace, ""));
						}
					});
				} else if (os.type() === 'Darwin') { // Steve check
					cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --run ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/Praat.app/Contents/MacOS/Praat --run ' + vscode.window.activeTextEditor?.document.uri.fsPath);
						let praatOut = vscode.window.createOutputChannel("Script Output (From Praat)");
						praatOut.show();
						if (error) {
							praatOut.appendLine('The script did not run.\nPraat sent:\n' + error);
						} else {
							praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + stdout.replace(outputReplace, "") + ' ' + stderr.replace(outputReplace, ""));
						}
					});
				} else {
					// What distro are they even running?
					vscode.window.showInformationMessage('Fatal error. Trouble recognizing OS.');
				}
			} else {
				vscode.window.showErrorMessage('You do not have a script open on VSCode!');
			}
		}
	});

	registerCommandNice('praatvscode.openInPraat', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The current file is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {
				if (os.type() === 'Windows_NT') {
					cp.exec(praatPath +'\\Praat.exe --open ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'\\Praat.exe --open ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else if (os.type() === 'Linux') {
					cp.exec(praatPath +'/praat --open ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/praat --open ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else if (os.type() === 'Darwin') {
					cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --open ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/Praat.app/Contents/MacOS/Praat --open ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else {
					vscode.window.showInformationMessage('Fatal error! Trouble recognizing OS.');
				}
			} else {
				vscode.window.showErrorMessage('You do not have a Praat script open on VSCode!');
			}
		}
	});

	registerCommandNice('praatvscode.runInPraat', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The current file is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {
				if (os.type() === 'Windows_NT') {
					cp.exec(praatPath +'\\Praat.exe --send ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'\\Praat.exe --send ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else if (os.type() === 'Linux') {
					cp.exec(praatPath +'/praat --send ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/praat --send ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else if (os.type() === 'Darwin') {
					cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --send ' + vscode.window.activeTextEditor?.document.uri.fsPath, (error, stdout, stderr) => {
						vscode.window.showInformationMessage('Running command: ' + praatPath +'/Praat.app/Contents/MacOS/Praat --send ' + vscode.window.activeTextEditor?.document.uri.fsPath);
					});
				} else {
					vscode.window.showInformationMessage('Fatal error! Trouble recognizing OS.');
				}
			} else {
				vscode.window.showErrorMessage('You do not have a Praat script open on VSCode!');
			}
		}
	});

	// Make status bar items respond to path status
	function updatePathIndicator() {
		praatPath = context.globalState.get('praatpath',"");
		pathIndicator.hide();
		if (praatPath === undefined || praatPath === "") {
			pathIndicator.text = '$(new-folder) Praat path not set';
			pathIndicator.tooltip = 'Click to set a path and run scripts';
			pathIndicator.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
			runBackgroundButton.hide();
			runPraatButton.hide();
		} else {
			pathIndicator.text = '$(folder-active)';
			pathIndicator.tooltip = 'Click to change path';
			pathIndicator.backgroundColor = new vscode.ThemeColor('statusBarItem.remoteBackground');
			runBackgroundButton.show();
			runPraatButton.show();
		}
		pathIndicator.show();
	}

	// Run status bar stuff once when the extension activates
	updatePathIndicator();

	// Experimental features
	// Autocompletion
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('praat', new PraatCompletionItemProvider(), '>', '$'));
	// Hover info
	context.subscriptions.push(vscode.languages.registerHoverProvider('praat', new PraatHoverProvider()));

}

// this method is called when the extension is deactivated
export function deactivate() {

}