import React from "react";
export class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <button
          onClick={() => {
            return this.props.getRes(true);
          }}
        >
          SignIn
        </button>
      </div>
    );
  }
}
