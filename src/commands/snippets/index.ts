import * as vscode from "vscode";
import * as snippets from "./snippets";

export const init = async () => {
  try {
    const result = await vscode.window.showQuickPick(Object.keys(snippets), {
      placeHolder: "CSFE Snippets : ",
    });
    // Notice : alert error
    // Solution : tsconfig.json -> "suppressImplicitAnyIndexErrors"  --> https://medium.com/codespace69/typescript-element-implicitly-has-an-any-type-because-index-expression-is-not-of-type-number-721bcf41c374
    insertSnippet(snippets[result!]);
  } catch (err) {
    console.log(err);
    vscode.window.showErrorMessage(err);
  }
};

// //////////////////////////////////////////////////');

const insertSnippet = function (value: string) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage(
      "Can not insert because no document is file"
    );
    return;
  }

  const selection = editor.selection;
  const range = new vscode.Range(selection.start, selection.end);
  editor.insertSnippet(new vscode.SnippetString(value));
};
