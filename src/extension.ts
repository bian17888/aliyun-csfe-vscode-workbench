"use strict";

import * as vscode from "vscode";

import { DepNodeProvider } from "./nodeDependencies";
import { snippets } from "./commands/index";

export function activate(context: vscode.ExtensionContext) {
  const nodeDependenciesProvider = new DepNodeProvider(
    vscode.workspace.rootPath
  );
  vscode.window.registerTreeDataProvider("docs", nodeDependenciesProvider);

  /**
   * registering commands
   */
  // command for code snippets
  const codeSnippets = vscode.commands.registerCommand(
    "csfe.cmd.snippets",
    snippets.init
  );
  context.subscriptions.push(codeSnippets);

  const tmp = vscode.commands.registerCommand("csfe.cmd.tmp", () => {
    vscode.window.showInformationMessage("tmp");
  });
  context.subscriptions.push(tmp);
}
