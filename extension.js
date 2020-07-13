// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

const utils = require("./utils");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "csfe-snippets" is now active!');

  let fileLinkDisposible = vscode.commands.registerCommand(
    "csfe-snippets.insertLink",
    () => {
      const linkTypeList = ["File", "Image"];
      vscode.window
        .showQuickPick(linkTypeList, { placeHolder: "Link Type" })
        .then((result) => {
          if (result === "File") {
            // utils.insertText(
            //   vscode.workspace.getConfiguration("csfe")["filePathTemplate"]
            // );
            utils.insertText(utils.getTemplate());
          } else {
            utils.insertText(
              vscode.workspace.getConfiguration("csfe")["imagePathTemplate"]
            );
          }
        });
    }
  );
  context.subscriptions.push(fileLinkDisposible);

  let figureDisposible = vscode.commands.registerCommand(
    "csfe-snippets.insertFigure",
    () => {
      vscode.window.showInformationMessage("insert figure tag");
    }
  );
  context.subscriptions.push(figureDisposible);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
