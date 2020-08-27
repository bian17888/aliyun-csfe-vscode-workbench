import * as vscode from "vscode";
import * as path from "path";

const itemsData = [
  {
    label: "公共空间",
    collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
    children: [
      {
        label: "梦琪平台",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
      },
      {
        label: "语雀平台",
        collapsibleState: vscode.TreeItemCollapsibleState.None,
      },
    ],
  },
  {
    label: "开发者",
    collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
    children: [
      {
        label: "公有云",
        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      },
      {
        label: "专有云",
        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
        children: [
          {
            label: "命令",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
          {
            label: "文档",
            collapsibleState: vscode.TreeItemCollapsibleState.None,
          },
        ],
      },
    ],
  },
];

export class DepNodeProvider implements vscode.TreeDataProvider<Dependency> {
  constructor(private workspaceRoot: string | undefined) {}

  getTreeItem(element: Dependency): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Dependency): Thenable<Dependency[]> {
    if (!this.workspaceRoot) {
      vscode.window.showInformationMessage("No dependency in empty workspace");
      return Promise.resolve([]);
    }

    const itemsDependency = itemsData.map((ele: any) => {
      return new Dependency(ele.label, ele.collapsibleState, ele.children);
    });

    if (element) {
      return Promise.resolve(element.children || []);
    } else {
      return Promise.resolve(itemsDependency);
    }
  }
}

export class Dependency extends vscode.TreeItem {
  constructor(
    public label: string,
    public collapsibleState: vscode.TreeItemCollapsibleState,
    public children?: Dependency[]
  ) {
    super(label, collapsibleState);
  }

  iconPath = {
    light: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "light",
      "dependency.svg"
    ),
    dark: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "dark",
      "dependency.svg"
    ),
  };

  command = {
    title: "tmp",
    command: "csfe.cmd.tmp",
  };
}
