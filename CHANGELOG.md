# Change Log

All notable changes to the PraatVSCode extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Planned/Test features

- **Diagnostics.** PraatVSCode will soon display errors, warnings and other relevant information before you run your code. You can demo this feature by typing the "selectObject" function with various inputs. Try an illegal call and see what happens!
- **Substantially better semantic command of documents.** A new list of Praat classes and methods is being generated. This list contains information about a particular method's input count, the input types, the operator, the separator between inputs and more. As a result, autocompletion and diagnostics will operate much more smoothly.
- **Running scripts with arguments.** It is possible to send scripts to Praat with arguments when dealing with scripts that will only run with certain inputs. The implementation of this solution will make obsolete the "open in praat -> run script" workaround.
- **Better selection provider.** In the future, the extension will also take into account Praat object methods that select their output automatically when listing selections.

## [0.9.4] - Selection provider and stability improvements

### Added

- **Praat selection provider.** You can now go to extension settings and enable the "selection tracker" to see what object(s) you have selected in Praat on a given line. The new item on the status bar will display a list of selected objects and hovering on the item will display the line numbers of selection(s).
- **Comprehensive syntactic highlighting.** A much larger number of built-in Praat functions are now registered in the Praat language grammar.

### Changed

- The description of the praatvscode.selectionProviderConfig was a copy of the description of praatvscode.runButtonTwo. It's now correct.
- Diagnostics are only provided if the active document's language is set to Praat.

## [0.9.3] - Comprehensive autocompletion, stability and QoL

### Added

- **Comprehensive autocompletion.** Almost every function that is listed in the Praat manual is now an autocompletion item. Where possible, the selection of a function will output a snippet that can be tab-browsed. However, the list of functions is automatically generated and likely contains errors. The same database of Praat functions will power upcoming features.
- **Autosaving files before running scripts.** All 3 Praat interface buttons (i.e., "Run in background", "Run in Praat", "Open in Praat") now save documents before sending them to Praat. Thus, the code the user sees will always be the code the user runs.
- **Verbosity settings for status bar items.** With two "run buttons" and a selection tracker on the way, verbosity settings for the status bar items have been introduced. Users with smaller screens or crowded status bars can enjoy shorter text.

### Changed

- A bug prevented scripts from being opened or sent to Praat if their file paths contained whitespaces. The issue has been addressed with shell prompt quoting.
- The three available status bar "run buttons" now have sligtly different icons. Thus, users who opted for the "zero verbosity" configuration for status bar items can distinguish between them.

## [0.9.2] - Faster loops and better semantic tokens

### Added

- **Semantic highlighting and definitions for user-defined functions (procedures).** The semantic features already in place for user-defined variables have been extended to user-defined functions.
- **Semantic highlighting and definitions for user-defined variables in forms.** The semantic features already in place for user-defined variables have been extended to user-defined variables in forms. For instance, the line "optionmenu tier: 3" designates "tier" as a variable and provides semantic highlighting for all occurrences. This line is also registered as a definition.
- **Semantic highlighting and definitions for user-defined variables in loops.** The semantic features already in place for user-defined variables have been extended to user-defined variables in loops. For instance, the line "for i from 2 to 16" designates "i" as a variable and provides semantic highlighting for all occurrences. This line is also registered as a definition.

### Changed

- Classes are now listed separately in the globals list.
- Improvements to syntax highlighting.
- Autocompletion item provider is faster when checking for user-defined variables.
- Defintion and semantic token providers are substantially faster (i.e., better loops) and the source code is *cleaner*.
- Added better parsing of keywords like "pause" and "comment" which should highlight the rest of the line into as a string.
- Semantic token provider and definition provider now check whether a line is a comment using a function exported from the semantic tokens provider. Comments and form lines (i.e., other than definitions), for instance, are not checked.

## [0.9.1] - Source Code Cleanup and Customizability

### Added

- **The functionality of the two status bar buttons for interacting with Praat can now be configured by the user.** The buttons will update automatically when the user goes to extension settings and updates any configuration under PraatVSCode. The default settings are the "run in background" button for the first, and the "open in Praat" button for the second.

### Changed

- The "extension.ts" *core* file has been cleaned up and the design of the extension was further modularized. Commands are now registered through a separate function exported from a separate document. Status bar items are also managed by a separate function.
- The Praat output terminal's name in VSCode has been shortened to "Praat InfoWindow".


## [0.9.0] - Abstraction Public Test Release

This update allows PraatVSCode to have a much deeper, "abstract" understanding of a Praat script using the new features listed below.

### Added

- **Symbol recognition for user-defined variables.** You can search/iterate through user-defined variables which are now registered as symbols in VSCode.
- **Semantic highlighting for defintions of user-defined variables.** Declaring a variable correctly marks its declaration position with a semantic token type "variable" and semantic token modifier "defintion". Calls to the variable *after* its declaration are also highlighted as variables.
- **Definition provider for user-defined variables.** Can't remember where you defined 'targetTier'? Just click on a call of 'targetTier' and hit F12 (or use the right click menu)!
- **Reference provider for user-defined variables.** You now want to see the references/calls to your very own defined variable? Use Shift+F12 while on a word or F12 while on a definition!

### Changed

- More readable global database for hover and autocompletion provision.
- Corrected typos in main grammar.
- Optimization of semantic context functions (They no longer look for semantics in commented lines).
- The readme file has been reorganized and now overwhelmingly uses gifs over pngs.

## [0.8.0] - Second Public Test Release

### Added

- **Autocompletion has been introduced!** Currently, some global functions (particularly those listed in the Praat manuals) are supported. More keywords and functions will be added as development continues.
- **Hover features have been introduced!** This feature uses the same keyword database as the autocompletion. Thus, symbols that can be autocompleted will also display information about themselves when hovered.
- **Syntax highlighting support for TextGRID files.** The extension also automatically activates when a TextGRID file is opened with VSCode (previously only Praat files).
- **A command to get the Praat version.** This should come in handy when users try to run functions that require relatively recent Praat versions (e.g., "Run in praat" requires 6.2 and above). The main objective was to have an easy way of fetching Praat version in real time but it's now also human-readable output for convenience.

### Changed

- The VSCode-Praat terminal interface now only creates one shell instance.
- Messages displayed in notification windows and the VSCode-Praat terminal are better decoded, allowing special characters and line breaks to be read without issues.
- A few errors in existing syntax highlighting regular expressions have been corrected.
- "fi" no longer decreases indent.
- Readme updated with new features, typos corrected, images improved.
- A certain easter egg now addresses "true phoneticians" instead of "true phonologists". Yes.

## [0.7.6] - First Public Test Release

- Initial release of the first public test version.
