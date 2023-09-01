# PraatVSCode (v0.10.6)

## 1. Summary

    ⚠️ v0.10.6 is a public test version of PraatVSCode! ⚠️
    See CHANGELOG.md for details and upcoming/test features.

PraatVSCode is an open-source Visual Studio Code extension for Praat users. Its primary aim is to address the shortcomings of the native Praat code editor, which is a plain text editor with a *Run* button.

PraatVSCode:

- Registers Praat as a valid programming language for VSCode and marks Praat files with appropriate icons
- Provides syntax highlighting
- Provides semantic highlighting (i.e., including user-defined variables and functions)
- Tracks Praat's object selection
- Provides Praat errors handling within the VSCode development environment
- Provides autocompletion suggestions/search
- Provides an array of snippets for *code that writes itself*

...alongside a long list of quality of life improvements.

The syntax highlighting and QoL features address the limitations of the native Praat editor. Support for VScode allows users to integrate Praat scripts into development environments that are likely to contain other scripts written in other langauges. PraatVSCode also gives users the ability to run scripts without opening a Praat window while still providing a Praat output console within VSCode (although users can also call the Praat GUI with a single button if needed), speeding up workflow even more.

Praat is an open-source program for doing phonetics by computer. It's developed and maintained by Paul Boersma and David Weenink. You can find out more at the [Praat repository](https://github.com/praat/praat).

Visual Studio Code is an (almost entirely but not quite) open-source code editor developed by Microsoft. You can find out more at the [VSCode repository](https://github.com/microsoft/vscode) or the [VSCode website](https://code.visualstudio.com/). This extension is fully dependent on VSCode and the production version can be installed through the built-in VSCode exetension marketplace (at no cost). Click [here](https://marketplace.visualstudio.com/items?itemName=OrhunUlusahin.praatvscode) to install PraatVSCode.

## 2. Features

### 2.1 Syntax Highlighting

One of the features of Praat that makes it difficult for starters is that its syntax can be considered somewhat unusual: Function names often contain whitespaces, most conditionals and control statements must be terminated, most of the syntax is case-sensitive, most functions can be written in multiple ways (i.e., the *ellipsis ( ... ) syntax* vs the *colon ( : ) syntax*), etc... By highlighting built-in keywords (i.e. functions, classes, pre-defined variables, etc.) as well as types and user-defined variables, PraatVSCode helps users build a better implicit understanding of Praat syntax.

Here's what Praat code typically looks like:

![syntax_before](/assets/syntax_before.png)

And here's the same code with PraatVSCode:

![syntax_after](/assets/syntax_after.png)

At a glance, the user knows what is a string, what is a comment, what is a function, what type of variable went into what function, etc. Where applicable, highlighting is also specific to *existing* Praat keywords. This means that, for instance, the extension will not highlight everything followed by an ellipsis or a colon as a function. Instead, functions will only be highlighted when the spelling (including case) is correct. So, "get number of Strings" will not be highlighted but "Get number of strings" will, to help with Praat's case-sensitivity.

Note: PraatVSCode does not impose its own color theme but simply uses the user-selected VSCode theme.

As of version 0.3.3, the extension provides highlighting and QoL features for TextGrid files as well.

### 2.2 Semantic Highlighting

As of version 0.9.0, PraatVSCode provides semantic highlighting for user-defined variables and procedures. User-defined variables and procedures are also registered as abstract symbols as the first step of giving PraatVSCode a more abstract understanding of Praat scripts.

![semantic_highlighter](/assets/semantic_hi.gif)


### 2.3 Running Scripts

Users can run scripts directly through PraatVSCode. In version 1.0.0, it is possible to:

- Run a script in the *background* (i.e., without seeing the Praat GUI)
- Open a script in Praat (but not run it)
- Open a script in Praat and run it
- Run a script in an existing instance of Praat

Note that the lattter 3 options require Praat version 6.2 and above. Additionally, if the active file is not designated as a Praat script in VSCode, the extension will not carry out these commands and will warn the user.

#### 2.3.1 Setting a Path for Praat

Before doing any of these, the user must designate a path to the Praat program so that the extension can call it and send it scripts to run. Upon activation, PraatVSCode will add an indicator to the VSCode status bar, warning the user that a path has not been set yet. By clicking the indicator, the user can bring up a prompt to enter the path to the Praat application. Bear in mind that, backslashes (\\) must be used in paths on Windows while forward-slashes (/) are used on UNIX-based systems.

![no_path](/assets/no_path.png)

Once the Praat path is set, the user gains access to the "Run in background" and "Run in Praat" buttons. Additional Run commands listed above are available under the VSCode command palette (CTRL/⌘ + SHIFT + P).

![yes_path](/assets/yes_path.png)

The path is saved in a workspace global state with a machine scope. So, users don't have to set the path at every activation of the extension but only at when switching between machines.

#### 2.3.2 Running a Script in the Background

This command, which is also accessible by the button described above, runs the active (i.e., currently visible on VSCode) Praat script using the Praat application but without opening a Praat window. When this command is used, outputs that would normally go into a Praat info window instead go to a custom output in VSCode that is automatically created and shown to the user. This option is particularly useful for speeding up batch processing of files where no intermittent manual checks are needed.

#### 2.3.3 "Sending" Scripts to Praat

Users can open scripts in Praat through the extension, optionally running them as well. These commands are particularly useful when the user requires the Praat GUI to make manual checks or adjustments. These commands rely on the VSCode-Command Line-Praat interaction and use the "--send" function which was introduced in Praat 6.2. Thus, users will only be able to "send" their scripts to Praat versions 6.2 and above.

#### 2.3.4 Organic Praat Outputs

When the user runs a script through PraatVSCode, they obtain not only the outputs that would be written into the Praat info window, but also errors as they were returned by Praat. This allows users to obtain information about where and why the error occured without leaving the PraatVSCode development environment.

Sample output:

![outputs](/assets/outputs.png)

### 2.4 Definitions & References

No more forgetting what that variable was! Users can use the right-click menu or the shortcut F12 to go to the definition/declaration of a variable.

![definitions](/assets/definitions.gif)

Users can browse all calls to a variable using tthe right click menu or the shortcut Shift+F12.

![references](/assets/references.gif)

### 2.5 Praat Object Selection

As of version 0.9.3, a status bar tool for tracking various Praat selection function can be enabled.

![selections](/assets/selectionTracker.gif)

### 2.6 Autocompletion & Hover Info

PraatVSCode will suggest autocompletion items as the user types. The list of suggested items includes user-defined variables.

![autocompletion](/assets/autocompletion.gif)

Note: Currently, the items are only indexed alphabettically and none take priority over others. However, in future versions, relevant suggestions (e.g., a numeric function for a formula instead of a string function) may be prioritized.

![hoverinfo](/assets/hoverinfo.png)

Hovering on a symbol recognized as a keyword will display relevant information to the user. This relevant information can include the type of symbol, the syntax and input types for a function, descriptions of symbols and more.

## 3. License & Contributing

PraatVSCode is licensed under the MIT license. You can use, modify, and distribute it freely. Open-source publication of modifications is encouraged but not mandatory. For more information, see [LICENSE](/LICENSE).

PraatVSCode is written largely in [TypeScript](https://www.typescriptlang.org/) and uses [TextMate grammars](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide) for syntactic analysis. Users are encouraged to report and/or address issues and otherwise contribute.
