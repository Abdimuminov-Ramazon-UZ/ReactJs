import { UpdateCounter } from "./withcounter";
export let Hover = (props) => {
  return (
    <div>
      <h1>Count with click</h1>
      <h1>now I know errors and don't return {props.test}</h1>
      <button onMouseOver={props.onCount}>
        counting {props.item} if button is hovered
      </button>
    </div>
  );
};
export let Hovered = UpdateCounter(Hover);
