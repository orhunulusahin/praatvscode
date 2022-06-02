// Status bar item provider for PraatVSCode
// Orhun Ulusahin 06/2022

import { unlink } from 'fs';
import * as vscode from 'vscode';
// const os = require('os');

export var pathIndicator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
pathIndicator.name = 'Praat path indicator';
pathIndicator.command = 'praatvscode.definePath';
const config = vscode.workspace.getConfiguration('PraatVSCode');

// Pre-define the possible button settings
const runScript = ['praatvscode.runScript', '$(run) Run in background', 'Button to run script with no GUI', 'Click to run the script without seeing Praat'];
const runInPraat = ['praatvscode.runInPraat', '$(run) Run in Praat', 'Button to run script with GUI', 'Click to run the script in Praat'];
const openInPraat = ['praatvscode.openInPraat', '$(run) Open in Praat', 'Button to open script in Praat', 'Click to open the script in Praat'];
const commandArrays: string[][] = [runScript,runInPraat,openInPraat];

export function registerButtons(): vscode.StatusBarItem[] {
	var buttonOneCommand:string = config.get('praatvscode.runButtonOne');
	var buttonTwoCommand:string = config.get('praatvscode.runButtonTwo');

	for (let i = 0; i < commandArrays.length; i++) {
		if (commandArrays[i].includes(buttonOneCommand)) {
			var buttonOneIndex = i;
		}
		if (commandArrays[i].includes(buttonTwoCommand)) {
			var buttonTwoIndex = i;
		}
	}

		var runButtonOne = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
		runButtonOne.command = commandArrays[buttonOneIndex][0];
		runButtonOne.text = commandArrays[buttonOneIndex][1];
		runButtonOne.name = commandArrays[buttonOneIndex][2];
		runButtonOne.tooltip = commandArrays[buttonOneIndex][3];

		var runButtonTwo = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
		runButtonTwo.command = commandArrays[buttonTwoIndex][0];
		runButtonTwo.text = commandArrays[buttonTwoIndex][1];
		runButtonTwo.name = commandArrays[buttonTwoIndex][2];
		runButtonTwo.tooltip = commandArrays[buttonTwoIndex][3];
		return [runButtonOne,runButtonTwo];
}

export function getPraatButtons(context: vscode.ExtensionContext, button:number) {
	const config = vscode.workspace.getConfiguration('PraatVSCode');
	if (button === 1) {
		return config.get("praatvscode.runButtonOne");
	} else if (button === 2) {
		return config.get("praatvscode.runButtonTwo");
	} else {
		vscode.window.showErrorMessage("Cannot fetch praat configuration. Please check your settings.");
	}
}

export function updatePathIndicator(context: vscode.ExtensionContext, runButtonOne:vscode.StatusBarItem, runButtonTwo:vscode.StatusBarItem) {
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