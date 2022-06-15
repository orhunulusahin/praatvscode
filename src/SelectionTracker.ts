// Selection tracker for PraatVSCode
// Scans a Praat script and tells user what object(s) is selected on a given line
// Written by Orhun Ulusahin

import { praatClasses } from "./praatGlobals";
import { TextDocument, Position, workspace  } from "vscode";
import { isComment } from "./SemanticTokensProvider";

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

export default function provideSelection(doc: TextDocument, position: Position): PraatSelection[] {
    
    // Get the line user is at
    var selectedType: string | undefined;
    var selectedObject: string | undefined;
    var lastSelector: string;
    var selections: PraatSelection[] = [];

    function getSelectionDetails(startline: number): string {
        // Loop back through document and look for the last selection
        for (let i = startline; i >= 0; i--) {
            let line = doc.lineAt(i);

            // Nearest line that contains selection function
            if (hasSelection(line.text) && !isComment(line.text)) {

                // Now try to see what exactly they selected
                let selectionString = line.text;

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
                        lastSelector = selector;
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
                // Add selection(s)
                selections.push({
                    document: doc,
                    lineNumber: i,
                    line: line.text,
                    selectionType: selectedType,
                    selectedObject: selectedObject
                });

            }

            // If we found a plus selector instead of a select selector...
            // We gotta keep looping before we hit a non-plus selection
            // RECURSION ALERT!!!
            // IT WORKS DON'T TOUCH IT
            if (lastSelector === "plus " || lastSelector === "plusObject:" || lastSelector === undefined) {
                lastSelector = getSelectionDetails(i-1);
                // console.log(lastSelector);
            }
            // Stop looking now that we found all selections
            break;
        }
        return lastSelector;
    }

    getSelectionDetails(position.line);

    // console.log(selections);
    return selections;
}