export const initClassComponent = `
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

export const initHookComponent = `
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

export const log50 = `
// //////////////////////////////////////////////////
`;
