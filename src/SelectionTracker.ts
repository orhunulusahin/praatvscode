// Selection tracker for PraatVSCode
// Scans a Praat script and tells user what object(s) is selected on a given line
// Written by Orhun Ulusahin

import { praatClasses } from "./praatGlobals";
import { TextDocument, Position, workspace  } from "vscode";
import { ExecOptionsWithStringEncoding } from "child_process";

// Define a Praat selection
export interface PraatSelection {
    document: TextDocument,
    lineNumber: number,
    line: string,
    selectionType?: string,
    selectedObject?: string
}

// The colon and spaces are a way to cheat the embedded selector problem
const selectFunctions = ['selectObject:', 'select '];
const plusFunctions = ['plusObject:', 'plus '];
const allSelectors = selectFunctions.concat(plusFunctions);
const classList = Object.keys(praatClasses);

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

export default function provideSelection(doc: TextDocument, position: Position): string {
    
    // Get the line user is at
    let callLine = position.line;
    let lastSelection:string = '';
    let selectionString: string;
    let selectedType: string | undefined;
    let selectedObject: string | undefined;

    let selections: PraatSelection[] = [];

    // Loop back through document and look for the last selection
    for (let i = callLine; i >= 0; i--) {
        let line = doc.lineAt(i);
        if (hasSelection(line.text)) {

            lastSelection = (line.lineNumber+1).toString();

            // Now try to see what exactly they selected
            selectionString = line.text;

            allSelectors.forEach(selector => {
                if (selectionString.includes(selector)) {
                    // Get the part of the string that's not the selector and ditch spaces
                    selectionString = selectionString.substring(selectionString.indexOf(selector)+selector.length, selectionString.length).trim();
                    // See if we can get class info easily as well
                    classList.forEach(praatClass => {
                        // If a class keyword is found
                        if (selectionString.includes(praatClass)) {
                            // This WILL select both Pitch and PitchTier but it will finalize the value as PitchTier since that is later in the list
                            // To be optimized...
                            selectedType = praatClass;
                        }
                    });

                    // Now get what object was selected
                    if (selectedType) {
                        selectedObject = selectionString.substring(selectionString.indexOf(selectedType)+selectedType.length, selectionString.length).trim();
                    }
                    else {
                        selectedObject = selectionString;
                    }

                    // Cleanup any quotes 
                    if (selectedObject.startsWith('"') && selectedObject.endsWith('"')) {
                        selectedObject = selectedObject.substring(1,selectedObject.length-1);
                    }
                    else if (selectedObject.startsWith("'") && selectedObject.endsWith("'")) {
                        selectedObject = selectedObject.substring(1,selectedObject.length-1);
                        // Single quotes -> variable unless class is somehow already defined
                        if (!selectedType) {
                            selectedType = "Var";
                        }
                    }
                    console.log("Type: " + selectedType + " Object: " + selectedObject);

                    // If we found a plus selector instead of a select selector...
                    // We gotta keep looping before we hit a selection
                    while (selector === "plus " || selector === "plusObject:") {
                        // Recursion alert
                    }

                    // Add selection(s)
                    selections.push({
                        document: doc,
                        lineNumber: i,
                        line: line.text,
                        selectionType: selectedType,
                        selectedObject: selectedObject
                    }
                );
                }
            });

            // Stop looking now that we found a selection
            break;
        }
    }
    console.log(selections);
    return lastSelection;
}