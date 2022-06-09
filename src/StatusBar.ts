// Status bar item provider for PraatVSCode
// Orhun Ulusahin 06/2022

import * as vscode from 'vscode';
import provideSelection from './SelectionTracker';

export var pathIndicator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
pathIndicator.name = 'Praat path indicator';
pathIndicator.command = 'praatvscode.definePath';

// Create status bar items
const runButtonOne = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 3);
const runButtonTwo = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 2);
const selectionTracker = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
selectionTracker.name = "Praat selection tracker";

// Pre-define the possible button settings
const runScript = ['praatvscode.runScript', '$(run)', 'Button to run script with no GUI', 'Click to run the script without seeing Praat'];
const runInPraat = ['praatvscode.runInPraat', '$(run-above)', 'Button to run script with GUI', 'Click to run the script in Praat'];
const openInPraat = ['praatvscode.openInPraat', '$(run-view-icon)', 'Button to open script in Praat', 'Click to open the script in Praat'];
const commandArrays: string[][] = [runScript,runInPraat,openInPraat];

const runScriptShort = ['praatvscode.runScript', '$(run) Background', 'Button to run script with no GUI', 'Click to run the script without seeing Praat'];
const runInPraatShort = ['praatvscode.runInPraat', '$(run-above) inPraat', 'Button to run script with GUI', 'Click to run the script in Praat'];
const openInPraatShort = ['praatvscode.openInPraat', '$(run-view-icon) Open', 'Button to open script in Praat', 'Click to open the script in Praat'];
const commandArraysShort: string[][] = [runScriptShort,runInPraatShort,openInPraatShort];

const runScriptLong = ['praatvscode.runScript', '$(run) Run in background', 'Button to run script with no GUI', 'Click to run the script without seeing Praat'];
const runInPraatLong = ['praatvscode.runInPraat', '$(run-above) Run in Praat', 'Button to run script with GUI', 'Click to run the script in Praat'];
const openInPraatLong = ['praatvscode.openInPraat', '$(run-view-icon) Open in Praat', 'Button to open script in Praat', 'Click to open the script in Praat'];
const commandArraysLong: string[][] = [runScriptLong,runInPraatLong,openInPraatLong];

// Function to update status bar buttons based on user settings
export function updateButtons() {

	var config = vscode.workspace.getConfiguration('praatvscode');

	var buttonOneCommand:any = config.get('runButtonOne');
	var buttonTwoCommand:any = config.get('runButtonTwo');
	var verbosity: any = config.get('statusBarItemVerbosity');

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

	if (verbosity === "Icons only") {
		runButtonOne.command = commandArrays[buttonOneIndex][0];
		runButtonOne.text = commandArrays[buttonOneIndex][1];
		runButtonOne.name = commandArrays[buttonOneIndex][2];
		runButtonOne.tooltip = commandArrays[buttonOneIndex][3];
		runButtonTwo.command = commandArrays[buttonTwoIndex][0];
		runButtonTwo.text = commandArrays[buttonTwoIndex][1];
		runButtonTwo.name = commandArrays[buttonTwoIndex][2];
		runButtonTwo.tooltip = commandArrays[buttonTwoIndex][3];
	}
	else if (verbosity === "Short text") {
		runButtonOne.command = commandArraysShort[buttonOneIndex][0];
		runButtonOne.text = commandArraysShort[buttonOneIndex][1];
		runButtonOne.name = commandArraysShort[buttonOneIndex][2];
		runButtonOne.tooltip = commandArraysShort[buttonOneIndex][3];
		runButtonTwo.command = commandArraysShort[buttonTwoIndex][0];
		runButtonTwo.text = commandArraysShort[buttonTwoIndex][1];
		runButtonTwo.name = commandArraysShort[buttonTwoIndex][2];
		runButtonTwo.tooltip = commandArraysShort[buttonTwoIndex][3];
	} else {
		runButtonOne.command = commandArraysLong[buttonOneIndex][0];
		runButtonOne.text = commandArraysLong[buttonOneIndex][1];
		runButtonOne.name = commandArraysLong[buttonOneIndex][2];
		runButtonOne.tooltip = commandArraysLong[buttonOneIndex][3];
		runButtonTwo.command = commandArraysLong[buttonTwoIndex][0];
		runButtonTwo.text = commandArraysLong[buttonTwoIndex][1];
		runButtonTwo.name = commandArraysLong[buttonTwoIndex][2];
		runButtonTwo.tooltip = commandArraysLong[buttonTwoIndex][3];
	}
	runButtonOne.show();
	runButtonTwo.show();

	// Hide buttons if language isn't Praat
	// if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
	// 	runButtonOne.hide();
	// 	runButtonTwo.hide();
	// }
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
	// Hide path indicator if file isn't Praat script
	// if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
	// 	pathIndicator.hide();
	// }
}

// Function to 
export function updateTracker() {
	var config = vscode.workspace.getConfiguration('praatvscode');
	var trackerEnabled:any = config.get('selectionTrackerConfig');
	var verbosity: any = config.get('statusBarItemVerbosity');

	let preText: string;
	if (verbosity === "Icons only") {
        preText = "$(symbol-misc)";
    }
    else if (verbosity === "Short text") {
        preText = "$(symbol-misc) Selected: ";
    } else {
        preText = "$(symbol-misc) Selection at ln ";
    }

	if (trackerEnabled) {
		if (vscode.window.activeTextEditor) {
			let lastSelection = provideSelection(
				vscode.window.activeTextEditor.document,
				new vscode.Position(
					vscode.window.activeTextEditor.selection.active.line,
					vscode.window.activeTextEditor.selection.active.character
				)
			);
			selectionTracker.tooltip = "Last selection at line " + lastSelection;
			selectionTracker.text = preText + lastSelection;
			
		}
		selectionTracker.show();
	}
	else {
		selectionTracker.hide();
	}

	// Hide selector if file isn't Praat script
	if (vscode.window.activeTextEditor?.document.languageId !== "praat") {
		selectionTracker.hide();
	}
}