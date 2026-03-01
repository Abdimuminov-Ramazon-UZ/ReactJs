import { useRef } from "react";

export let UnControl = () => {
  // let [title, setTitle] = useState();
  //when we don't want re-render we use useRef it gives no render works
  //we create useRef() and chain click button and when we touch button then rendered button so we avoid fast refresh
  let data = useRef();
  console.log("uncontrol");
  return (
    <div>
      <h1>Uncontrol</h1>
      <h1>Uncontrol </h1>
      {/* <input onChange={(e) => setTitle(e.target.value)} type="text" /> */}
      <input ref={data} type="text" />
      <button
        onClick={() => {
          console.log("unctonrol");
          alert(data.current.value);
        }}
      >
        Click
      </button>
    </div>
  );
};
