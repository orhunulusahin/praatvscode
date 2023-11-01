// List inputs from a form in a Praat script and send default values into Praat as arguments
import { Position, Range, TextDocument } from "vscode";
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

// Unquote a string only if it's actually quoted
function unquote(input: string) {
    if (input.startsWith('"') && input.endsWith('"')) {
        return input.substring(1,input.length-1);
    }
    return input;
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

        if (line.text.trimStart().startsWith("form") && !line.text.trimStart().startsWith("endform")) {

            // Form title as string must be passed
            // if (line.text.trimStart().startsWith('form:')) {
            //     let formTitle = unquote(line.text.split('form:')[1].trim());
            //     args.push(formTitle);
            // }

            for (let j = i+1; j < endOfForm(document,i); j++) {

                let formLine = document.lineAt(j);
                let formLineText = formLine.text;

                let hasFormInputNew = formWords.some((item) => formLineText.trimStart().startsWith(item+":"));
                let hasFormInputOld = formWords.some((item) => formLineText.trimStart().startsWith(item));

                if (hasFormInputNew || hasFormInputOld) {

                    let argRange:Range|undefined;
                    let argValue = '';

                    
                    // For reasons unknown to mortals, Praat wants enum (optionmenu) inputs
                    // AS STRINGS, QUOTED, AND AS VALUES RATHER THAN KEYS
                    // Solution:
                    if ((formLineText).trimStart().startsWith("optionmenu") || (formLineText).trimStart().startsWith("choice")) {
                        let optionList:string[] = [];
                        for (let k = j+1; k < endOfOptionmenu(document,j); k++) {
                            let optLine = document.lineAt(k).text;
                            // Get rid of the word "option" and that's our value!
                            let trimValue = (hasFormInputNew) ? 7 : 6;
                            let optValue = optLine.trim().substring(trimValue).trim();
                            if (hasFormInputNew) { optValue = unquote(optValue); }
                            optionList.push(optValue);
                        }
                        // Select whatever option would be selected by Praat optionmenu number
                        let argIndex = formLineText.split(',')[1].trim();
                        // Adjust index by -1: Praat counts from 1!'
                        argValue = optionList[Number(argIndex)-1];
                        args.push(argValue);

                    } else if(hasFormInputNew) {

                        let firstColonIndex = formLineText.indexOf(':');
                        let firstSplit = formLineText.substring(firstColonIndex+1).trim();
                        let thisLine = formLineText;
                        let thisArgs:string[] = [];

                        // There may be multiple arguments
                        if (firstSplit.includes(',')) {
                            // The first is the variable name, and shouldn't be sent as argument!
                            let split = firstSplit.split(',');

                            split.forEach(arg => {
                                if (split.indexOf(arg) > 0) {
                                    unquote(args.push(arg).toString().trim());
                                }
                            });
                        } else {
                            args.push(unquote(firstSplit));
                        }
                       
                    } else if (hasFormInputOld) {

                        // Get the second word after the form input keyword
                        // That also happens to be the end of the line if you trim the spaces
                        argRange = document.getWordRangeAtPosition(new Position(j, formLineText.trimEnd().length));

                        // Exception for negative numbers
                        let beforeRange = new Range(new Position(j, formLineText.indexOf(document.getText(argRange))-1),new Position(j, formLineText.trimEnd().length));
                        if (document.getText(beforeRange).startsWith("-")) {
                            argValue = document.getText(beforeRange);
                        } else {
                            argValue = document.getText(argRange);
                        }
                        args.push(argValue);

                    }

                }
                if (formLineText.includes("endform")) {
                    break;
                }
            }
        }
    }

    // Pass empty string if no arguments are declared
    if (args.length === 0) {
        return '';
    } else {
        // Surround every argument in list with quotes
        // And then join them with spaces inbetween
        return quotify(args).join(" ");
    }
}