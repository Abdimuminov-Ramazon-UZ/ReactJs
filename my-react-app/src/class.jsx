import React from "react";
import Hooks from "./hook.jsx";
export class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  render() {
    return (
      <div>
        <h1>Class</h1>
        <h1>Count:{this.state.count}</h1>
        {/* <Hooks count={this.state.count} /> */}
      </div>
    );
  }
}
