import * as vscode from "vscode";

export const team: any = [
  {
    label: "梦琪平台",
    collapsibleState: vscode.TreeItemCollapsibleState.None,
    command: {
      title: "xx",
      command: "csfe.cmd.tmp",
      arguments: ["cs dev --proxy"],
    },
  },
];

export const developer: any = [
  {
    label: "开发者",
    collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
    children: [
      {
        label: "公有云",
        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
        children: [
          {
            label: "cs dev",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
          {
            label: "cs dev --proxy",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
          {
            label: "cs login",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
          {
            label: "cs p",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
          {
            label: "cs p -o",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
        ],
      },
      {
        label: "专有云",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
      },
    ],
  },
];
