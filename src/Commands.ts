// Commands for PraatVSCode
// Orhun Ulusahin

import * as vscode from 'vscode';
import { DiagnosticCollection } from 'vscode';
import * as cp from 'child_process';
import { updatePathIndicator } from './StatusBar';
import os = require('os');
import sendArguments from './SendArguments';
import { refreshDiagnostics, subscribeToDocumentChanges } from './Diagnostics';

// Shorthands for OS logicals
const isWin = os.type() === 'Windows_NT';
const isMac = os.type() === 'Darwin';
const isLnx = os.type() === 'Linux';
const osString = os.type();

// Fix for weird unicode characters in terminal output readouts
const outputReplace: any = /[^a-zA-Z0-9!?.:;-_$\\\t\r\n{} ]/g;

function commandClean(string: string): string {
	// Escape the escape characters
	string = string.replace(outputReplace, "");
	string = string.replace("\\", "\\\\");
	string = string.replace('"', '\\"');
	string = string.replace("'", "\\'");
	return string;
}

function quote(inputString: string) {
	return '"' + inputString + '"';
}

// VSCode API shorthands
function regCmd(context: vscode.ExtensionContext, commandId: string, run: (...args: any[]) => void): void {
	context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
}

export default function registerCommands(context: vscode.ExtensionContext) {

	function praatPath(): string { return context.globalState.get('praatPath', ''); };
	function exePath(): string { return context.globalState.get('exePath', ''); }
	var praatOut = vscode.window.createOutputChannel("PraatVSCode");

	// Command for defining Praat path
	regCmd(context, 'praatvscode.definePath', async () => {

		let ph = "";
		if (isWin) { ph = "C:\\Users\\Username..."; }
		if (isMac) { ph = "/Applications..."; }
		if (isLnx) { ph = "/usr/bin..."; }

		var promptPath = await vscode.window.showInputBox({
			prompt: "Enter the path for the praat executable (without the executable) to run Praat code from VSCode. This is NOT where your script is saved but where the Praat program is located.",
			placeHolder: ph,
			ignoreFocusOut: true,
			title: "Define Path"
		});

		// If user entered the executable on Windows, remove it
		if (isWin && promptPath?.trim().toLowerCase().endsWith('praat.exe')) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 9);
		}

		// If user entered the app root rather than app folder on Mac, remove it
		if (isMac && promptPath?.trim().toLowerCase().endsWith('Praat.app')) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 9);
		}

		// If the path ends with a slash of either kind, remove it 
		if (promptPath?.trim().endsWith("/") || promptPath?.trim().endsWith("\\")) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 1);
		}

		// Return the "raw" path with no trailing slash (might regret later lol)
		vscode.window.showInformationMessage('Praat path set as: ' + promptPath);

		// Little easter egg for the true ones
		if (promptPath?.toLowerCase().endsWith('desktop')) {
			vscode.window.showInformationMessage('Praat on the desktop... you are a true phonetician!');
		}

		await context.globalState.update('praatPath', promptPath);
		await setExePath();
		updatePathIndicator(context);

	});

	// For backwards compatibility
	setExePath();
	updatePathIndicator(context);

	async function setExePath() {
		let newExePath = "";

		if (isWin) {
			newExePath = praatPath() + '\\Praat.exe';
		} else if (isLnx) {
			newExePath = praatPath() + '/praat';
		} else if (isMac) {
			newExePath = praatPath() + '/Praat.app/Contents/MacOS/Praat';
		} else {
			return vscode.window.showInformationMessage('Fatal error. Trouble recognizing OS.');
		}
		await context.globalState.update('exePath', newExePath);
	}

	// Command for calling Praat path
	regCmd(context, 'praatvscode.getPath', () => {
		if (praatPath() === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			vscode.window.showInformationMessage('The current path for the Praat executable is: ' + praatPath());
		}
	});

	// Command for opening a script in Praat
	regCmd(context, 'praatvscode.openInPraat', () => {
		if (praatPath() === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {

				vscode.window.activeTextEditor.document.save().then((saved) => {

					if (isWin || isLnx || isMac) {
						cp.exec(quote(exePath()) + ' --open --hide-picture "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
					} else {
						vscode.window.showInformationMessage('Fatal error! Trouble recognizing OS.');
					}

				});
			} else {
				vscode.window.showErrorMessage('You do not have a Praat script open on VSCode!');
			}
		}
	});

	// Command for running a script in Praat
	regCmd(context, 'praatvscode.runInPraat', () => {
		if (praatPath() === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor.document.uri.fsPath) {
				vscode.window.activeTextEditor.document.save().then((saved) => {
					if (vscode.window.activeTextEditor?.document.uri.fsPath) {
						if (isWin || isLnx || isMac) {
							cp.exec(quote(exePath()) + ' --send --hide-picture "' + vscode.window.activeTextEditor.document.uri.fsPath + '" '.concat(sendArguments(vscode.window.activeTextEditor.document)), (error, stdout, stderr) => {
								vscode.window.showInformationMessage('Running script in Praat: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							});
						} else {
							vscode.window.showInformationMessage('Fatal error! Trouble recognizing OS.');
						}
					}
				});
			} else {
				vscode.window.showErrorMessage('You do not have a Praat script open on VSCode!');
			}
		}
	});

	// Command for running a script in the background
	regCmd(context, 'praatvscode.runScript', () => {
		if (praatPath() === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {

			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {

				vscode.window.activeTextEditor.document.save().then((saved) => {

					if (vscode.window.activeTextEditor) {

						praatOut.show();

						vscode.window.showTextDocument(vscode.window.activeTextEditor?.document);

						vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');

						let beginTime = Date.now();
						let endTime = Date.now();
						const praatShell = cp.exec(quote(exePath()) + ' --run -8 "' + vscode.window.activeTextEditor?.document.uri.fsPath + '" '.concat(sendArguments(vscode.window.activeTextEditor.document)));

						if (praatShell.pid > 0) {

							praatShell.stdout?.setEncoding('utf-8');

							praatShell.stdout?.on('data', function (data) {
								praatOut.appendLine(data.toString());
							});

							praatShell.stdout?.on('error', function (error) {
								praatOut.appendLine(error.message);
								praatShell.kill();

							});

							praatShell.stderr?.on('data', function (data) {

								praatOut.appendLine(data.toString());
								endTime = Date.now();

								let errLine = data.split('Script line ')[1].split(' not')[0];
								let errLineNum = Number(errLine);
								praatOut.appendLine('Crashed on line ' + errLine + '!');

								vscode.commands.executeCommand('revealLine', {
									lineNumber: errLineNum,
									at: 'center'
								}).then((revealed) => {
									vscode.commands.executeCommand('cursorMove', {
										to: 'viewPortCenter'
									});
								});

								praatShell.kill();

							});

							praatShell.stdout?.on('resume', function () {
								praatOut.appendLine("---SCRIPT OUTPUT BEGIN---");
							});

							praatShell.stdout?.on('end', function () {
								endTime = Date.now();
								praatOut.appendLine("---SCRIPT OUTPUT END---	Runtime: " + (endTime - beginTime) + "ms");
								praatShell.kill();
							});
						}

					}
				});
			} else {
				vscode.window.showErrorMessage('You do not have a script open on VSCode!');
			}
		}
	});

	// Command for getting user's Praat version
	regCmd(context, 'praatvscode.getPraatVersion', () => {
		if (praatPath() === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			if (isWin || isMac || isLnx) {
				cp.exec(quote(exePath()) + ' --version', (error, stdout, stderr) => {
					if (error) {
						vscode.window.showInformationMessage('Cannot fetch Praat version info.');
					} else {
						vscode.window.showInformationMessage('Praat version info: ' + stdout.replace(outputReplace, ""));
					}
				});
			} else {
				vscode.window.showInformationMessage('Fatal error. Trouble recognizing OS.');
			}
		}
	});
}

