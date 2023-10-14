import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class NodeDependenciesProvider implements vscode.TreeDataProvider<Dependency> {
    /**
     * EventEmitter property of the class
     * @date 10/13/2023 - 12:03:52 PM
     *
     * @private
     * @type {vscode.EventEmitter<Dependency | undefined | null | void>}
     */
    private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | null | void> = new vscode.EventEmitter<Dependency | undefined | null | void>();

    /**
     * readonly event triggering when tree data changes
     * @date 10/13/2023 - 12:05:34 PM
     *
     * @readonly
     * @type {vscode.Event<Dependency | undefined | null | void>}
     */
    readonly onDidChangeTreeData: vscode.Event<Dependency | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor(private workspaceRoot: string) { }


    /**
     * Refresh the view on a change in package.json (not part of the interface, just calls the onDidChangeTreeData)
     * @date 10/13/2023 - 8:03:30 PM
     */
    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    /**
     * Get tree element
     * @date 10/13/2023 - 8:02:39 PM
     *
     * @param {Dependency} element - dependency element
     * @returns {vscode.TreeItem} - dependency as a treeItem
     */
    getTreeItem(element: Dependency): vscode.TreeItem {
        return element;
    }


    /**
     * Get the children of the provided element as a resolved promise.
     * If the element is not provided, get the root element's children.
     * This implements the interface of TreeDataProvider, which runs on a dropdown of a TreeData element.
     * @date 10/13/2023 - 8:04:24 PM
     *
     * @param {?Dependency} [element] - nullable Dependency element
     * @returns {Thenable<Dependency[]>} - The list of child Dependencies
     */
    getChildren(element?: Dependency): Thenable<Dependency[]> {
        if (!this.workspaceRoot) {
            vscode.window.showInformationMessage('No dependency in empty workspace');
            return Promise.resolve([]);
        }

        if (element) {
            return Promise.resolve(
                this.getDepsInPackageJson(
                    path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')
                )
            );
        } else {
            const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
            if (this.pathExists(packageJsonPath)) {
                return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
            } else {
                vscode.window.showInformationMessage('Workspace has no package.json');
                return Promise.resolve([]);
            }
        }
    }


    /**
     * Get the dependencies at the package.json path as a list
     * @date 10/13/2023 - 8:06:51 PM
     *
     * @private
     * @param {string} packageJsonPath
     * @returns {Dependency[]}
     */
    private getDepsInPackageJson(packageJsonPath: string): Dependency[] {
        if (this.pathExists(packageJsonPath)) {
            // Function to convert a module_name to a dependency
            const toDep = (moduleName: string, version: string): Dependency => {
                if (this.pathExists(path.join(this.workspaceRoot, 'node_modules', moduleName))) {
                    return new Dependency(
                        moduleName,
                        version,
                        vscode.TreeItemCollapsibleState.Collapsed
                    );
                } else {
                    return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None);
                }
            };

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

            const deps = packageJson.dependencies
                ? Object.keys(packageJson.dependencies).map(dep =>
                    toDep(dep, packageJson.dependencies[dep])
                )
                : [];
            const devDeps = packageJson.devDependencies
                ? Object.keys(packageJson.devDependencies).map(dep =>
                    toDep(dep, packageJson.devDependencies[dep])
                )
                : [];
            return deps.concat(devDeps);
        } else {
            return [];
        }
    }

    /**
     * @date 10/13/2023 - 12:02:10 PM
     *
     * @private
     * @param {string} p - path to check
     * @returns {boolean} - if path exists from workspace
     */
    private pathExists(p: string): boolean {
        try {
            fs.accessSync(p);
        } catch (err) {
            return false;
        }
        return true;
    }
}


/**
 * Class for the node dependencies
 * @date 10/13/2023 - 8:33:45 PM
 *
 * @class Dependency
 * @typedef {Dependency}
 * @extends {vscode.TreeItem}
 */
class Dependency extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        private version: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
    ) {
        super(label, collapsibleState);
        this.tooltip = `${this.label}-${this.version}`;
        this.description = this.version;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}
