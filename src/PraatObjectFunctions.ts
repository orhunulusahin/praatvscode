/* eslint-disable @typescript-eslint/naming-convention */

// Praat object function list A

import { classes } from "./praatGlobals";

// Create string array of Praat Classes
const classList:string[] = [];
for (let praatClass in classes) {
    if (praatClass !== "all") {
        classList.push(praatClass);
    }
}

export function listClasses() {
    console.log(classList);
}

const enum OperatorType {
    None = 0,
    Colon = 1,
    Ellipsis = 2
}

export interface ObjectFunction {
    name: string, // Name of this function
    class: string[], // Which class(es) implements this method
    description?: string, // What the user will see 
    signature: string, // What the hover window will display for the "formula" of this method
    preSnippet: string, // What will be provided to the completion item provider that will create a snippet
    operator: OperatorType, // What operator the method requires
    argCount?: number, // How many arguments does this method take?
    argSeparator?: string[], // What character(s) separates these arguments
    inputType?: string[], // What input types are allowed?
    outputType?: string, // What type is the output of this method?
    outputName?: string, // Name of the variable of object the method writes to
    selectOutput: boolean // Whether the output is selected after the method runs
}

interface functionList { [ name:string ]: ObjectFunction}

export const soundFunctions: functionList = {
    // "Create": {
    //     name: 
    // };
};