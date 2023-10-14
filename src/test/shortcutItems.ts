import * as vscode from 'vscode';


/**
 * Class wrapping the shortcut items
 * @date 10/14/2023 - 9:36:45 AM
 *
 * @class Shortcut
 * @typedef {Shortcut}
 * @extends {vscode.TreeItem}
 */
class Shortcut extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        private shortcutDescription: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
    ) {
        super(label, collapsibleState);
        this.description = shortcutDescription;
    }
}