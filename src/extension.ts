"use strict";

import * as vscode from "vscode";

import { team, developer } from "./navs/data";
import { TeamProvider, TeamItem } from "./navs";
import { snippets } from "./commands/index";

export function activate(context: vscode.ExtensionContext) {
  /**
   * 导航菜单初始化
   */
  // Part 1 : 公共空间
  const teamTreeDataProvider = new TeamProvider(
    vscode.workspace.rootPath,
    team
  );
  vscode.window.registerTreeDataProvider("team", teamTreeDataProvider);

  // Part 2 : 开发者空间
  const developerTreeDataProvider = new TeamProvider(
    vscode.workspace.rootPath,
    developer
  );
  vscode.window.registerTreeDataProvider(
    "developer",
    developerTreeDataProvider
  );

  /**
   * registering commands
   */
  // command for code snippets
  const codeSnippets = vscode.commands.registerCommand(
    "csfe.cmd.snippets",
    snippets.init
  );
  context.subscriptions.push(codeSnippets);

  const tmp = vscode.commands.registerCommand(
    "csfe.cmd.tmp",
    (node: TeamItem) => {
      vscode.window.showInformationMessage("tmp");
      console.log(node);
    }
  );
  context.subscriptions.push(tmp);
}
