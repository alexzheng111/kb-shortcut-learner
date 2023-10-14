import * as vscode from 'vscode';

export class ShortcutProvider implements vscode.TreeDataProvider<Shortcut> {
    getTreeItem(element: Shortcut): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Shortcut): Thenable<Shortcut[]> {
        return Promise.resolve([]);
    }

    // TODO: Method to return all the keybindings
    private getKeyBindingsInJSON(keybindingsJsonPath: string): Shortcut[] {
        throw new Error("Not Implemented");
    }
}

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