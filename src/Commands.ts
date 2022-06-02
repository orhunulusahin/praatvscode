// Commands for PraatVSCode
// Orhun Ulusahin, 06/2022

import * as vscode from 'vscode';
import * as cp from 'child_process';
import { updatePathIndicator } from './StatusBar';

function registerCommandNice(context: vscode.ExtensionContext, commandId: string, run: (...args: any[]) => void): void {
    context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
}

export default function registerCommands(context: vscode.ExtensionContext) {

    // Get Praat path
    var praatPath:string = context.globalState.get('praatpath','');

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
        // updatePathIndicator();
    });

    // Command for calling Praat path
    registerCommandNice(context, 'praatvscode.getPath', () => {
		if (praatPath === undefined) {
			vscode.window.showErrorMessage('You have not set a path for the Praat executable yet. Run the command "Define a path for the Praat executable" to set a path.');
		} else {
			vscode.window.showInformationMessage('The current path for the Praat executable is: '+ praatPath);
		}
	});
}

