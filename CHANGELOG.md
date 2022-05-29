# Change Log

All notable changes to the PraatVSCode extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
