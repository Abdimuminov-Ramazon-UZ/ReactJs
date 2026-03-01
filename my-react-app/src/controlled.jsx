import { useState } from "react";

export let Control = () => {
  let [title, setTitle] = useState();
  console.log("control");
  return (
    <div>
      <h1>control {title}</h1>
      <input onChange={(e) => setTitle(e.target.value)} type="text" />
    </div>
  );
};
