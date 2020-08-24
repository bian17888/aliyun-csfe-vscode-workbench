"use strict";

import * as vscode from "vscode";

import { DepNodeProvider } from "./nodeDependencies";

export function activate(context: vscode.ExtensionContext) {
  const nodeDependenciesProvider = new DepNodeProvider(
    vscode.workspace.rootPath
  );
  vscode.window.registerTreeDataProvider("docs", nodeDependenciesProvider);
}
