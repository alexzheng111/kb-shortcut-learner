import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { macOSKeybindings } from './macosKeybindings';

export class ShortcutProvider implements vscode.TreeDataProvider<Shortcut> {

    getTreeItem(element: Shortcut): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Shortcut): Thenable<Shortcut[]> {
        if (!element) {
            // Only root shortcuts
            return Promise.resolve(this.getKeyBindingsInJSON());
        } else {
            // There should not be any children
            return Promise.resolve([]);
        }
    }


    /**
     * Converts macOS keybindings to a list of Shortcut objects
     * @date 10/14/2023 - 3:41:18 PM
     *
     * @private
     * @returns {Shortcut[]}
     */
    private getKeyBindingsInJSON(): Shortcut[] {
        // TODO: Needs to replace the special characters
        // TODO: Needs to handle when commands have arguments
        return macOSKeybindings.map(shortcut => new Shortcut(shortcut.key, shortcut.command, vscode.TreeItemCollapsibleState.None));
    }

    private pathExists(path: string): boolean {
        try {
            fs.readFileSync(path);
        } catch {
            return false;
        }
        return true;
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