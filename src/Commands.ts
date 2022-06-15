// Commands for PraatVSCode
// Orhun Ulusahin, 05/06/2022

import * as vscode from 'vscode';
import * as cp from 'child_process';
import { updatePathIndicator } from './StatusBar';
import os = require('os');
import provideSelection from './SelectionTracker';
import sendArguments from './SendArguments';
import { escape, stringify } from 'querystring';
import { errorMonitor } from 'events';

// Fix for weird unicode characters in terminal output readouts
const outputReplace:any = /[^a-zA-Z0-9!?.:;-_$\\\t\r\n{} ]/g;

function commandClean(string:string): string {
	// Escape the escape characters
	string = string.replace(outputReplace, "");
	string = string.replace("\\", "\\\\");
	string = string.replace('"', '\\"');
	string = string.replace("'", "\\'");
	return string;
}

function registerCommandNice(context: vscode.ExtensionContext, commandId: string, run: (...args: any[]) => void): void {
    context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
}

export default function registerCommands(context: vscode.ExtensionContext) {

    // Get Praat path
    var praatPath:string = context.globalState.get('praatpath','');

    // Create an output window to emulate Praat's
	var praatOut = vscode.window.createOutputChannel("PraatVSCode");

    // Command for defining Praat path
    registerCommandNice(context, 'praatvscode.definePath', async() => {
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
        updatePathIndicator(context);
    });

    // Command for calling Praat path
    registerCommandNice(context, 'praatvscode.getPath', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			vscode.window.showInformationMessage('The current path for the Praat executable is: '+ praatPath);
		}
	});

    // Command for opening a script in Praat
    registerCommandNice(context, 'praatvscode.openInPraat', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {
				vscode.window.activeTextEditor.document.save().then((saved) => {
					if (os.type() === 'Windows_NT') {
						cp.exec('"'+praatPath +'\\Praat.exe" --open "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							praatOut.appendLine(stdout.replace(outputReplace, ""));
							praatOut.appendLine(stderr.replace(outputReplace, ""));
							if (error) {
								praatOut.appendLine('The script did not run.\nPraat sent:\n' + error.message.replace(outputReplace, ""));
								throw error;
							} else {
								praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + stdout.replace(outputReplace, "") + ' ' + stderr.replace(outputReplace, ""));
							}
						});
					} else if (os.type() === 'Linux') {
						cp.exec(praatPath +'/praat --open "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
						});
					} else if (os.type() === 'Darwin') {
						cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --open "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
						});
					} else {
						vscode.window.showInformationMessage('Fatal error! Trouble recognizing OS.');
					}
				}		
				);
			} else {
				vscode.window.showErrorMessage('You do not have a Praat script open on VSCode!');
			}
		}
	});

    // Command for running a script in Praat
	registerCommandNice(context, 'praatvscode.runInPraat', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor.document.uri.fsPath) {
				vscode.window.activeTextEditor.document.save().then((saved) => {
					if (vscode.window.activeTextEditor?.document.uri.fsPath) {
						if (os.type() === 'Windows_NT') {
							cp.exec('"'+praatPath +'\\Praat.exe" --send "' + vscode.window.activeTextEditor.document.uri.fsPath + '" '.concat(sendArguments(vscode.window.activeTextEditor.document)), (error, stdout, stderr) => {
								vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							});
						} else if (os.type() === 'Linux') {
							cp.exec(praatPath +'/praat --send "' + vscode.window.activeTextEditor.document.uri.fsPath + '"', (error, stdout, stderr) => {
								vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							});
						} else if (os.type() === 'Darwin') {
							cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --send "' + vscode.window.activeTextEditor.document.uri.fsPath + '"', (error, stdout, stderr) => {
								vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
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
    registerCommandNice(context, 'praatvscode.runScript', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
			vscode.window.showErrorMessage('The active selection is not a Praat script!');
		} else {
			if (vscode.window.activeTextEditor?.document.uri.fsPath !== undefined) {
				vscode.window.activeTextEditor.document.save().then((saved) => {
					if (vscode.window.activeTextEditor) {
						praatOut.show();
						vscode.window.showTextDocument(vscode.window.activeTextEditor?.document);
					}
					if (os.type() === 'Windows_NT') { // Gate check
						cp.exec('"'+praatPath +'\\Praat.exe" --run "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							if (error) {
								praatOut.appendLine('The script did not run.\nPraat sent:\n' + commandClean(error.message));
								throw error;
							} else {
								praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + commandClean(stdout) + ' ' + commandClean(stderr));
							}
						});
					} else if (os.type() === 'Linux') { // Penguin check
						cp.exec(praatPath +'/praat --run "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							if (error) {
								praatOut.appendLine('The script did not run.\nPraat sent:\n' + commandClean(error.message));
								throw error;
							} else {
								praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + commandClean(stdout) + ' ' + commandClean(stderr));
							}
						});
					} else if (os.type() === 'Darwin') { // Steve check
						cp.exec(praatPath +'/Praat.app/Contents/MacOS/Praat --run "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"', (error, stdout, stderr) => {
							vscode.window.showInformationMessage('Running script: "' + vscode.window.activeTextEditor?.document.uri.fsPath + '"');
							if (error) {
								praatOut.appendLine('The script did not run.\nPraat sent:\n' + commandClean(error.message));
								throw error;
							} else {
								praatOut.appendLine('The script ran nominally.\nPraat sent:\n' + commandClean(stdout) + ' ' + commandClean(stderr));
							}
						});
					} else {
						// What distro are they even running?
						vscode.window.showInformationMessage('Fatal error. Trouble recognizing OS.');
					}
				});
			} else {
				vscode.window.showErrorMessage('You do not have a script open on VSCode!');
			}
		}
	});

	// Command for getting user's Praat version
	registerCommandNice(context, 'praatvscode.getPraatVersion', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			if (os.type() === 'Windows_NT') { // Gate check
				cp.exec('"'+praatPath +'\\Praat.exe" --version', (error, stdout, stderr) => {
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
}

