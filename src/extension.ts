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

  // command for navs open website
  const openWebsite = vscode.commands.registerCommand(
    "csfe.cmd.navs.openWebsite",
    (args) => {
      vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(args));
    }
  );
  context.subscriptions.push(openWebsite);

  // command for navs run shell
  const runShell = vscode.commands.registerCommand(
    "csfe.cmd.navs.runShell",
    (args) => {
      const terminal = vscode.window.createTerminal(args);
      terminal.show();
      terminal.sendText(args);
    }
  );
  context.subscriptions.push(runShell);
}
