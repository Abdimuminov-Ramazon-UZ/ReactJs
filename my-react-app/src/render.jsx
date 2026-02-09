import React from "react";
// import { Signin } from "./Signin";
// import { Signup } from "./SignUp";
// import { stories } from "./mock";
// const list = stories;
// console.log(list);
export class Render extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { active: true, list: list };
  // }
  constructor(props) {
    super(props);
    this.state = {
      count: "countless",
    };
  }
  // componentWillMount() {
  //   console.log("willmount");
  // }
  // it runs before render
  // componentDidMount() {
  //   console.log("didmount");
  // }
  //it runs after render
  // componentWillReceiveProps() {
  //   console.log("receivePropsmount");
  // }
  //when prop come from parent to child
  // shouldComponentUpdate() {
  //   console.log("shouldaUpdate");
  //   return false;
  // }
  //when machine asks component update or not
  // componentWillUpdate() {
  //   console.log("willupdate");
  // }
  //when it runs as shouldComponentupdate but before render function
  // componentDidUpdate() {
  //   console.log("didupdate");
  // }
  //when machine begins making DOM elements
  // componentWillUnmount() {
  //   console.log("willunmount");
  // }
  //when we change or threat DOM elements this function runs
  //these functions don't through render function so that we write they under render and they are working the same
  plus() {
    this.setState({ count: this.state.count + "limitless" });
    console.log(this);
    this.plus = this.plus.bind(this);
    // we may bind this here as old way
  }
  render() {
    // const getRes = (value) => {
    //   console.log(value);
    //   this.setState({ active: value });
    // };
    // const onDelete = (value) => {
    //   let res = this.state.list.filter((item) => item.id !== value);
    //   this.setState({ list: res });
    // };
    // console.log("render");
    const plus = () => {
      this.setState({ count: this.state.count + "limitless" });
      console.log(this);
      this.plus = this.plus.bind(this);
    };
    return (
      //
      // <div>
      //   {this.state.active ? (
      //     <Signin getRes={getRes} />
      //   ) : (
      //     <Signup getRes={getRes} />
      //   )}
      // </div>
      // new lesson of list
      // <div>
      //   <h1>list</h1>
      //   {this.state.list.map((value) => {
      //     return (
      //       <div key={value.id}>
      //         {/* if we don't get key so render function read all datas if we get key render function read only key=id. Please don't use index as key because we may use CRUD so all indexes must change as firstly exapmle */}
      //         <h1>
      //           {value.id}:{value.name}{" "}
      //           <button
      //             onClick={() => {
      //               onDelete(value.id);
      //             }}
      //           >
      //             delete
      //           </button>
      //         </h1>
      //       </div>
      //     );
      //   })}
      // </div>
      //React Lifecycle
      // <div>
      //   <h1>React Lifecylce</h1>
      //   <h1>{this.state.count}</h1>
      //   <button
      //     onClick={() => {
      //       return this.state.count == "counter";
      //     }}
      //   >
      //     Click
      //   </button>
      //   {/* so we may change state some functions run background but these functions deprecated we use hooks instead its */}
      // </div>
      <div>
        <h1>binding</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.plus.bind(this)}>Click</button>
        {/* first way depends on bind() metod */}
        <button onClick={() => this.plus()}>Click</button>
        {/* second way is we bind this in constructor */}
        <button onClick={plus}>Click</button>
        {/* third way is new way which creates arrow function without bind() */}
      </div>
      // if we don't bind this machine don't find parent object datas
    );
  }
}
