// Status bar item provider for PraatVSCode
// Orhun Ulusahin 06/2022

import * as vscode from 'vscode';
// const os = require('os');

export var pathIndicator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
pathIndicator.name = 'Praat path indicator';
pathIndicator.command = 'praatvscode.definePath';

// Create status bar items
const runButtonOne = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 2);
const runButtonTwo = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);

// Pre-define the possible button settings
const runScript = ['praatvscode.runScript', '$(run) Run in background', 'Button to run script with no GUI', 'Click to run the script without seeing Praat'];
const runInPraat = ['praatvscode.runInPraat', '$(run) Run in Praat', 'Button to run script with GUI', 'Click to run the script in Praat'];
const openInPraat = ['praatvscode.openInPraat', '$(run) Open in Praat', 'Button to open script in Praat', 'Click to open the script in Praat'];
const commandArrays: string[][] = [runScript,runInPraat,openInPraat];

// Function to update status bar buttons based on user settings
export function updateButtons() {

	var config = vscode.workspace.getConfiguration('praatvscode');

	var buttonOneCommand:any = config.get('runButtonOne');
	var buttonTwoCommand:any = config.get('runButtonTwo');

	// Default settings
	var buttonOneIndex = 0;
	var buttonTwoIndex = 2;

	for (let i = 0; i < commandArrays.length; i++) {
		if (commandArrays[i].includes(buttonOneCommand)) {
			buttonOneIndex = i;
		}
		if (commandArrays[i].includes(buttonTwoCommand)) {
			buttonTwoIndex = i;
		}
	}

	runButtonOne.hide();
	runButtonOne.command = commandArrays[buttonOneIndex][0];
	runButtonOne.text = commandArrays[buttonOneIndex][1];
	runButtonOne.name = commandArrays[buttonOneIndex][2];
	runButtonOne.tooltip = commandArrays[buttonOneIndex][3];
	runButtonOne.show();

	runButtonTwo.hide();
	runButtonTwo.command = commandArrays[buttonTwoIndex][0];
	runButtonTwo.text = commandArrays[buttonTwoIndex][1];
	runButtonTwo.name = commandArrays[buttonTwoIndex][2];
	runButtonTwo.tooltip = commandArrays[buttonTwoIndex][3];
	runButtonTwo.show();
	// return [runButtonOne,runButtonTwo];
}

// Functon to update path indicator based on whether user has provided Praat executable
export function updatePathIndicator(context: vscode.ExtensionContext) {
	var praatPath:string = context.globalState.get('praatpath','');
	praatPath = context.globalState.get('praatpath',"");
	pathIndicator.hide();
	if (praatPath === undefined || praatPath === "") {
		pathIndicator.text = '$(new-folder) Praat path not set';
		pathIndicator.tooltip = 'Click to set a path and run scripts';
		pathIndicator.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
		runButtonOne.hide();
		runButtonTwo.hide();
	} else {
		pathIndicator.text = '$(folder-active)';
		pathIndicator.tooltip = 'Click to change Praat path';
		pathIndicator.backgroundColor = new vscode.ThemeColor('statusBarItem.remoteBackground');
		runButtonOne.show();
		runButtonTwo.show();
	}
	pathIndicator.show();
}