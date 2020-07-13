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
  const templateForClass = `
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
  const templateForHooks = `
    import React, { useState } from 'react';

    function Example() {
      // Declare a new state variable, which we'll call "count"
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
  `;
  const result = {
    templateForClass,
    templateForHooks,
  };
  return result;
}

//////////////////////////////////////////////////

module.exports = {
  insertText,
  getTemplate,
};
