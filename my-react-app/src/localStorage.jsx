import { useState } from "react";
export const Storage = () => {
  // const [count, setCount] = useState(Number(localStorage.getItem("count")));
	// if we have oject datas we must use JSON parse and stringfy when we set and get value from localstorage
  const [count, setCount] = useState(
    Number(JSON.parse(localStorage.getItem("count"))),
  );
  const plus = () => {
    //we add item to localstorage
    // localStorage.setItem("count", count + 1);
    localStorage.setItem("count", JSON.stringify({ data: count + 1 }));
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      \{/* we get item from localstorage */}
      <h1>Counter: {count}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      {/* we may item some element from localstorage */}
      <button onClick={() => localStorage.removeItem("count")}>Delete</button>
      {/* we may delete all jweys from localstorage */}
      <button onClick={() => localStorage.clear()}>Delete All</button>
    </div>
  );
};
