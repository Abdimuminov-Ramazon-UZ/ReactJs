import { UpdateCounter } from "./withcounter";
export let Click = (props) => {
  return (
    <div>
      <h1>Count with click {props.test}</h1>
      <button onClick={props.onCount}>
        counting {props.item} if button is clicked
      </button>
    </div>
  );
};

export let Clicked = UpdateCounter(Click);
//we export counter and print it with UpdateCounter wrapper
