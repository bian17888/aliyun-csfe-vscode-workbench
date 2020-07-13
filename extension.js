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
  console.log('Congratulations, your extension "csfe" is now active!');

  let fileLinkDisposible = vscode.commands.registerCommand(
    "extend.insertLink",
    () => {
      const linkTypeList = ["classComponent", "hooksComponent"];
      vscode.window
        .showQuickPick(linkTypeList, { placeHolder: "Snippets - React" })
        .then((result) => {
          if (result === "classComponent") {
            utils.insertText(utils.getTemplate().templateForClass);
          } else {
            utils.insertText(utils.getTemplate().templateForHooks);
          }
        });
    }
  );
  context.subscriptions.push(fileLinkDisposible);

  let figureDisposible = vscode.commands.registerCommand(
    "extend.insertFigure",
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
