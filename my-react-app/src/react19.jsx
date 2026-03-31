import React, { Suspense, useState } from "react";
// import { List } from "./list";
const List = React.lazy(() => import("./list.jsx"));
// import { flushSync } from "react-dom";
export let Version = () => {
  // let [counter, setCounter] = useState(0);
  // let [state, setState] = useState(`${counter} isn't either odd or even`);
  // let plus = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
  //     flushSync(() => {
  //       setCounter(counter + 1);
  //     });
  //     flushSync(() => {
  //       setState(counter + 2);
  //     });
  //   });
  // };
  // every render codes named batching
  // we add fetch codes and use flushSync because react 19 version don't render for every state if we want re-render for every state we use flushsync as above codes
  // console.log("render");
  // useTransition
  let [value, setvalue] = useState("");
  // let [list, setList] = useState([]);
  // let [isPending, startTransition] = useTransition();
  // if we stop to write in input then acting is done but we touch every board and run codes our project sit down pending we load useTransition for this problem
  let onChange = ({ target: { value } }) => {
    setvalue(value);
    // startTransition(() => {
    //   getList(value);
    // });
  };

  // let getList = () => {
  //   let l = [];
  //   for (let i = 0; i < 20000; i++) {
  //     l.push(`${i} : ${value}`);
  //   }
  //   setList(l);
  // };
  return (
    <div>
      {/* we have twice render when we use old React versions so we don't re-render several times in React 18 and React19 */}
      <h1>React19</h1>
      {/* <h1>Counter:{state}</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={plus}>+</button> */}
      <input onChange={onChange} value={value} type="text" />

      {/*   {isPending
        ? "loading and creating"
        : list.map((value) => {
            return <h1>{value}</h1>;
          })}  */}
      {/* <List value={value} /> */}
      {/* we add suspense for loading heavy datas  */}
      <Suspense
        fallback={
          <div>
            <h1>return loading</h1>
          </div>
        }
      >
        <List />
        <List /> <List /> <List /> <List />
      </Suspense>
      {/* new versions of react Suspense get comment all lazy loading elements as components old versions of react suspense add display:none style element to style component codes and it comes problem in rendering time */}
    </div>
  );
};
