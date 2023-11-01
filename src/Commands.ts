// Commands for PraatVSCode
// Orhun Ulusahin

import * as vscode from 'vscode';
import * as cp from 'child_process';
import { updatePathIndicator } from './StatusBar';
import os = require('os');
import sendArguments from './SendArguments';

// Shorthands for OS logicals
const isWin = os.type() === 'Windows_NT';
const isMac = os.type() === 'Darwin';
const isLnx = os.type() === 'Linux';
const osString = os.type();

function quote(inputString: string) {
	return '"' + inputString + '"';
}

// VSCode API shorthands
function regCmd(context: vscode.ExtensionContext, commandId: string, run: (...args: any[]) => void): void {
	context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
}

function infoMsg(msg: string) {
	vscode.window.showInformationMessage(msg);
}
function errorMsg(msg: string) {
	vscode.window.showErrorMessage(msg);
}
function osError() {
	errorMsg('Fatal error: Trouble recognizing OS!');
}
function notPraatScript() {
	errorMsg('You do not have a Praat script opened (or focused) in VSCode!');
}
function noPraatPath() {
	errorMsg('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
}

export default function registerCommands(context: vscode.ExtensionContext) {

	function praatPath(): string { return context.globalState.get('praatPath', ''); };
	function exePath(): string { return context.globalState.get('exePath', ''); }
	var praatOut = vscode.window.createOutputChannel("PraatVSCode");

	var vSplit = (<string>context.extension.packageJSON['version']).split('.');
	const pvscVersion = {
		major: Number(vSplit[0]),
		minor: Number(vSplit[1]),
		patch: Number(vSplit[2])
	};

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

		if (isWin && promptPath?.trim().toLowerCase().endsWith('praat.exe')) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 9);
		}

		if (isMac && promptPath?.trim().toLowerCase().endsWith('Praat.app')) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 9);
		}

		if (promptPath?.trim().endsWith("/") || promptPath?.trim().endsWith("\\")) {
			promptPath = promptPath.trim().slice(0, promptPath.length - 1);
		}

		// Return the "raw" path with no trailing slash (might regret later lol)
		vscode.window.showInformationMessage('Praat path set as: ' + promptPath);

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
			return osError();
		}
		await context.globalState.update('exePath', newExePath);
	}

	// Command for calling Praat path
	regCmd(context, 'praatvscode.getPath', () => {
		if (praatPath() === undefined) {
			noPraatPath();
		} else {
			vscode.window.showInformationMessage('The current path for the Praat executable is: ' + praatPath());
		}
	});

	// Command for opening a script in Praat
	regCmd(context, 'praatvscode.openInPraat', () => {
		if (praatPath() === undefined) {
			noPraatPath();
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {

				vscode.window.activeTextEditor.document.save().then((saved) => {

					if (isWin || isLnx || isMac) {
						cp.exec(quote(exePath()) + ' --open --hide-picture "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
					} else {
						osError();
					}

				});
			} else {
				notPraatScript();
			}
		}
	});


	// regCmd(context, 'praatvscode.showPage', async () => {
	// 	await vscode.commands.executeCommand('extension.open', 'OrhunUlusahin.praatvscode');
	// });

	// Command for running a script in Praat
	regCmd(context, 'praatvscode.runInPraat', () => {
		if (praatPath() === undefined) {
			noPraatPath();
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
							osError();
						}
					}
				});
			} else {
				notPraatScript();
			}
		}
	});

	// Command for running a script in the background
	regCmd(context, 'praatvscode.runScript', () => {
		if (praatPath() === undefined) {
			noPraatPath();
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
			noPraatPath();
		} else {
			if (isWin || isMac || isLnx) {
				cp.exec(quote(exePath()) + ' --version', (error, stdout, stderr) => {
					if (error) {
						vscode.window.showInformationMessage('Cannot fetch Praat version info.');
					} else {
						vscode.window.showInformationMessage('Praat version info: ' + stdout);
					}
				});
			} else {
				osError();
			}
		}
	});
}

