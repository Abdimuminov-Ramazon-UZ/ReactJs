import React from "react";

export class Signin extends React.Component {
  render() {
    return (
      <div>
        <h1>SignIn</h1>
        <button onClick={()=>{return this.props.getRes(false)}}>SignUP</button>
      </div>
    );
  }
}
