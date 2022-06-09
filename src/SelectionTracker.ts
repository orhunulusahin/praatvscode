// Selection tracker for PraatVSCode
// Scans a Praat script and tells user what object(s) is selected on a given line
// Written by Orhun Ulusahin, last modified on 09/06/2022

import { praatClasses } from "./praatGlobals";

import { TextDocument, Position, workspace  } from "vscode";

const selectFunctions = ['selectObject', 'select'];
const plusFunctions = ['plusObject', 'plus'];
const allSelectors = selectFunctions.concat(plusFunctions);

function hasSelection(string:string):boolean {
    let found = false;
    allSelectors.some((item) => {
        if (string.includes(item)) {
            found = true;
        }
    });
    selectFunctions.some((item) => {
        if (string.includes(item)) {
            found = true;
        }
    });
    if (found) {
        return true;
    }
     else {
        return false;
    }
}

export default function provideSelection(document: TextDocument, position: Position): string {
    
    // Get the line user is at
    let callLine = position.line;
    let lastSelection:string = '';

    // Loop back through document and look for the last selection
    for (let i = callLine; i >= 0; i--) {
        let line = document.lineAt(i);
        if (hasSelection(line.text)) {
            lastSelection = (line.lineNumber+1).toString();
            break;
        }
    }
    return lastSelection;
}