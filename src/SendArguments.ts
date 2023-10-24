// List inputs from a form in a Praat script and send default values into Praat as arguments

import { getLatestInsidersMetadata } from "@vscode/test-electron/out/util";
import { argv } from "process";
import { isNumber } from "util";
import { CommentThreadCollapsibleState, Position, QuickInputButtons, Range, TextDocument } from "vscode";
import { formWords } from "./SemanticTokensProvider";

// Surround arguments in quotes unless they are numeric
function quotify(stringList:string[]): string[] {
    let newList:string[] = [];
    stringList.forEach(string => {
        // It's not a number!
        if (isNaN(Number(string))) {
            newList.push('"'+string+'"');
        }
        else {
            newList.push(string);
        }
    });
    return newList;
}

// Find the end of a form
function endOfForm(doc:TextDocument, startLine: number): number {
    for (let i = startLine+1; i < doc.lineCount; i++) {
        if (doc.lineAt(i).text.trimStart().startsWith('endform')) {
            return i;
        }
    }
    return doc.lineCount;
}

// Find the end of an enum (optionmenu)
function endOfOptionmenu(doc:TextDocument, startLine: number): number {
    for (let i = startLine+1; i < doc.lineCount; i++) {
        if (!doc.lineAt(i).text.trimStart().startsWith('option')) {
            return i;
        }
    }
    return doc.lineCount;
}

// Get form inputs from Praat script
// Return them in a form appropriate for the command line
export default function sendArguments(document: TextDocument): string {

    var args:string[] = [];

    for (let i=0; i<document.lineCount; i++) {
        let line = document.lineAt(i);

        // Look for a form
        if (line.text.trimStart().startsWith("form") && !line.text.trimStart().startsWith("endform")) {

            // Now loop within form for all inputs
            let formLine:string = '';
            // let inputCount = 0;
            for (let j = i+1; j < endOfForm(document,i); j++) {

                formLine = document.lineAt(j).text;

                let hasFormInput = formWords.some((item) => formLine.trimStart().startsWith(item));
                if (hasFormInput) {

                    // Get the second word after the form input keyword
                    // That also happens to be the end of the line if you trim the spaces
                    let argRange = document.getWordRangeAtPosition(new Position(j, formLine.trimEnd().length));

                    let argValue = "";

                    // Exception for negative numbers
                    let beforeRange = new Range(new Position(j, formLine.indexOf(document.getText(argRange))-1),new Position(j, formLine.trimEnd().length));
                    if (document.getText(beforeRange).startsWith("-")) {
                        argValue = document.getText(beforeRange);
                    } else {
                        argValue = document.getText(argRange);
                    }

                    // For reasons unknown to mortals, Praat wants enum (optionmenu) inputs
                    // AS STRINGS, QUOTED, AND AS VALUES RATHER THAN KEYS
                    // Solution:
                    if ((formLine).trimStart().startsWith("optionmenu")) {
                        let optionList:string[] = [];
                        for (let k = j+1; k < endOfOptionmenu(document,j); k++) {
                            let optLine = document.lineAt(k).text;
                            // Get rid of the word "option" and that's our value!
                            let optValue = optLine.trim().substring(6).trim();
                            optionList.push(optValue);
                        }
                        // Select whatever option would be selected by Praat optionmenu number
                        // Adjust index by -1: Praat counts from 1!
                        argValue = optionList[Number(argValue)-1];

                    }
                    args.push(argValue);
                    // inputCount++;
                }
                if (formLine.includes("endform")) {
                    break;
                }
            }
        }
    }

    // Pass empty string if no arguments are declared
    if (args.length === 0) {
        return '';
    }
    else {
        // Surround every argument in list with quotes
        // And then join them with spaces inbetween
        return quotify(args).join(" ");
    }
}