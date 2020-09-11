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
  {
    label: "维纳斯平台",
    collapsibleState: vscode.TreeItemCollapsibleState.None,
    command: {
      title: "open website",
      command: "csfe.cmd.navs.openWebsite",
      arguments: ["https://microx.aliyun-inc.com/venus#/chart"],
    },
  },
];

export const developer: any = [
  {
    label: "公有云",
    collapsibleState: vscode.TreeItemCollapsibleState.Expanded,
    children: [
      {
        label: "cs dev",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
          title: "run shell",
          command: "csfe.cmd.navs.runShell",
          arguments: ["cs dev"],
        },
      },
      {
        label: "cs dev --proxy",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
          title: "run shell",
          command: "csfe.cmd.navs.runShell",
          arguments: ["cs dev --proxy"],
        },
      },
      {
        label: "cs login",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
          title: "run shell",
          command: "csfe.cmd.navs.runShell",
          arguments: ["cs login"],
        },
      },
      {
        label: "cs p",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
          title: "run shell",
          command: "csfe.cmd.navs.runShell",
          arguments: ["cs p"],
        },
      },
      {
        label: "cs p -o",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
          title: "run shell",
          command: "csfe.cmd.navs.runShell",
          arguments: ["cs p -o"],
        },
      },
    ],
  },
  {
    label: "专有云",
    collapsibleState: vscode.TreeItemCollapsibleState.Expanded,
    children: [
      {
        label: "建设中...",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
      },
    ],
  },
];
