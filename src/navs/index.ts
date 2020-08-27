import * as vscode from "vscode";

export class TeamProvider implements vscode.TreeDataProvider<TeamItem> {
  constructor(private workspaceRoot: string | undefined, public items: any) {}

  getTreeItem(element: TeamItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: TeamItem): Thenable<TeamItem[]> {
    if (!this.workspaceRoot) {
      vscode.window.showInformationMessage(
        "没有找到项目, 你可以添加项目到 vscode 中"
      );
    }

    let teamItems;
    let rawTeamItems;
    if (element) {
      if (element.children) {
        rawTeamItems = element.children;
      }
    } else {
      rawTeamItems = this.items;
    }

    teamItems = rawTeamItems.map((ele: any) => {
      return new TeamItem(
        ele.label,
        ele.collapsibleState,
        ele.command,
        ele.children
      );
    });
    return Promise.resolve(teamItems);
  }
}

export class TeamItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
    public children?: TeamItem[]
  ) {
    super(label, collapsibleState);
  }
}
