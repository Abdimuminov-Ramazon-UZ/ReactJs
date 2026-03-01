import { useCallback, useMemo, useState } from "react";
import Storage from "./extra.jsx";
export const Extra = () => {
  let [state, setState] = useState(1);
  console.log("parent");
  // useMemo returns value
  const data = useMemo(() => {
    return { title: "academy" };
  }, []);
  //we may call other functions with useCallback
  const dataCall = useCallback((param) => {
    return param;
  }, []);
  return (
    <div>
      <h1>State :{state}</h1>
      <button onClick={() => setState(state + 1)}>pLus</button>
      {/* <Storage data={{ title: "webbrain" }}></Storage> */}
      {/* we get dynamic elements to props and only run parent */}
      <Storage dataCall={dataCall} data={data}></Storage>
    </div>
  );
};
