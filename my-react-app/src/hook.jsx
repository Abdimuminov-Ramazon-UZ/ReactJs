// import { useEffect, useState,useReducer } from "react";

import { useReducer, useState } from "react";

// export class Hook extends React.Component {
//   name(params) {
//     console.log(params);
//   }
//   render() {
//     return (
//       <div onClick={this.name}>
//         <h1>Hooks</h1>
//       </div>
//     );
//   }
// }
// export const Hooks = (props) => {
//   // if we write some JS codes we must write return keyword
//   // const name = () => {
//   //   console.log("test");
//   // };
//   let [count, setCount] = useState(props.count);
//   const [name, setName] = useState("webbrain");
//   // console.log(state);
//   // const [data, setData] = useState({ count: 4, name: "webbrain" });
//   //case 1 when we create useeffect and change anything on the display it works without call
//   //we don't use it
//   useEffect(() => {
//     console.log(1);
//   });
//   //case 2 we give empty array and when anything changes on the  display then it works once time
//   //when we get data from backend
//   useEffect(() => {
//     console.log("case2");
//   }, []);
//   //case 3 when we give state to second argument and when this state changes then this works
//   //when changes have any state
//   // useEffect(() => {
//   //   console.log("case 3");
//   // }, [name]);
//   useEffect(() => {
//     return setCount(props.count);
//   }, [props.count]);
//   //case 4 we give two state to array elements and when we change each state so it works
//   //when we changes several states
//   useEffect(() => {
//     console.log("case 4");
//   }, [name, count]);
//   return (
//     // <div onClick={name} style={{ margin: "20px" }}>
//     <div style={{ flex: 1 }}>
//       {/* we don't write this here */}
//       <h1>Hooks with hooks</h1>
//       {/* <h1>Count : {state[0]}</h1> */}
//       <h1>Count : {count}</h1>
//       <h1>Name:{name}</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={({ target }) => setName(target.value)}
//       />
//       <h1>Complect useState</h1>
//       <h1>Count : {count}</h1>
//       <h1>Name:{name}</h1>
//       {/* <input
//         type="text"
//         value={name}
//         onChange={({ target }) => setData({  name: target.value })}
//       /> */}
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <hr />
//       <button onClick={() => setCount(count + 1)}>+</button>
//       {/* here this.state.count is th same as count */}
//     </div>
//   );
// };
// export const NoReturn = () => (
//   <div style={{ margin: "20px" }}>
//     <h1>Hooks without return</h1>
//   </div>
// );
// export const Homework = () => {
//   let [price, setPrice] = useState(0);
//   return (
//     <table style={{ border: "2px red solid collapse" }}>
//       <tr>
//         <th>Name</th>
//         <th>Product</th>
//         <th>Price</th>
//       </tr>
//       <tr>
//         <td>John</td>
//         <td>
//           <div>
//             <button onClick={() => setPrice(price + 1)}>Add</button>| {price} |
//             <button onClick={() => (price > 0 ? setPrice(price - 1) : 1)}>
//               Cut
//             </button>
//           </div>
//         </td>
//         <td>{price <= 1 ? "0$" : `${price * 1000}$`}</td>
//       </tr>
//     </table>
//   );
// };
// export const Hooks = () => {
//   let [count, setCount] = useState(10);
//   let [name, setName] = useState("heroic");
//   //so we may solve some problems with useReducer as complex troubles
//   //we may reduct codes with callback function
//   const reducer = (state, action) => {
//     console.log(state, action);
//     // return 10;
//     switch (action.type) {
//       case "plus":
//         return state + 1;
//       case "minus":
//         return state - 1;
//       case "bymount":
//         return state + action.payload;
//       default:
//         return 15;
//     }
//   };
//   let [counter, dispatch] = useReducer(reducer, 5);

//   return (
//     <div>
//       <h1>UseReducer</h1>
//       <h1>
//         Count:{count} <hr /> Name:{name}
//       </h1>
//       <h1>
//         Counter:{counter} <hr />
//       </h1>
//       <button onClick={() => dispatch({ type: "plus" })}>+</button>
//       <button onClick={() => dispatch({ type: "minus" })}>-</button>
//       <button onClick={() => dispatch({ type: "bymount", payload: 50 })}>
//         +50
//       </button>
//       <input
//         type="text"
//         value={name}
//         onChange={({ target }) => setName(target.value)}
//       />
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };
export const HomeworkReducer = () => {
  const reducer = (item, action) => {
    const curItem = Number(item);
    switch (action.type) {
      case "plus":
        return curItem + action.curValue;
      case "minus":
        return item - action.curValue;
    }
  };

  let [states, setStates] = useState({ add: "", first: "", sub: "" });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setStates((previously) => {
      return { ...previously, [name]: value };
    });
  };
  let [counter, dispatch] = useReducer(reducer, Number(0));
  return (
    <div>
      <h1>homework</h1>
      <h2>First value:{states.first}</h2>
      <input
        name="first"
        type="text"
        value={states.first}
        onChange={handleChange}
      />
      <h2>Add-on:{states.add}</h2>
      <input
        name="add"
        type="text"
        value={states.add}
        onChange={handleChange}
      />
      <h2>Subtrahend:{states.sub}</h2>
      <input
        name="sub"
        type="text"
        value={states.sub}
        onChange={handleChange}
      />
      <hr />
      <button
        style={{
          width: "36px",
          height: "36px",
          marginLeft: "20px",
          fontSize: "16px",
        }}
        onClick={() => dispatch({ type: "plus", curValue: Number(states.add) })}
      >
        +
      </button>

      <button
        style={{
          width: "36px",
          height: "36px",
          marginLeft: "20px",
          fontSize: "16px",
        }}
        onClick={() => dispatch({ type: "minus", curValue: states.sub })}
      >
        -
      </button>
      <h2>Value:{counter ? counter : states.first}</h2>
      <button
        onClick={() => {
          setStates({ add: "", first: "", sub: "" });
          {
            counter;
          }
        }}
      >
        Refresh
      </button>
    </div>
  );
};
