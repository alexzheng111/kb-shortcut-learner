// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ShortcutProvider } from './shortcutItems';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "kb-shortcut-learner" is now active!');

	const rootPath = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
		? vscode.workspace.workspaceFolders[0].uri.fsPath
		: ""; // TODO: This is bad. The false value is empty string, but is undefined in the docs

	const shortcutProvider = new ShortcutProvider();

	vscode.window.registerTreeDataProvider('keybindingsView', shortcutProvider);
}

// This method is called when your extension is deactivated
export function deactivate() { }
