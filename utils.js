const vscode = require("vscode");

function insertText(value) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage(
      "Can not insert because no document is file"
    );
    return;
  }

  const selection = editor.selection;
  const range = new vscode.Range(selection.start, selection.end);
  editor.edit((editBuilder) => {
    editBuilder.replace(range, value);
  });
}

function getTemplate() {
  const template = `
        import React, { Component } from 'react';
        import { connect } from 'dva';

        const mapStateToProps = state => ({});
        const mapDispatchToProps = dispatch => ({
            dispatch
        });
    
        @connect(mapStateToProps, mapDispatchToProps)
        class Demo extends Component {
            componentDidMount() {
                this.props.dispatch({ type: '' });
            }

            render() {
                return <>demo - _{name}</>;
            }
        }

        export default Demo;
    `;
  return template;
}

//////////////////////////////////////////////////

module.exports = {
  insertText,
  getTemplate,
};
