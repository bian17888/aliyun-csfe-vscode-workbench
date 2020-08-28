import * as vscode from "vscode";

export const team: any = [
  {
    label: "云安全前端团队 - 语雀文档",
    collapsibleState: vscode.TreeItemCollapsibleState.None,
    command: {
      title: "open website",
      command: "csfe.cmd.navs.openWebsite",
      arguments: ["https://yuque.antfin-inc.com/csfe"],
    },
  },
  {
    label: "梦琪平台",
    collapsibleState: vscode.TreeItemCollapsibleState.None,
    command: {
      title: "open website",
      command: "csfe.cmd.navs.openWebsite",
      arguments: ["https://csfe.alibaba-inc.com"],
    },
  },
  {
    label: "微前端平台",
    collapsibleState: vscode.TreeItemCollapsibleState.None,
    command: {
      title: "open website",
      command: "csfe.cmd.navs.openWebsite",
      arguments: ["https://microx.aliyun-inc.com/overview"],
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
