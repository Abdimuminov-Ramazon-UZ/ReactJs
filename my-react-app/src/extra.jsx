import { memo } from "react";
let Storage = (props) => {
  console.log("child");
  let dataParent = props.data;
  return (
    <div>
      <h1>{dataParent.title}</h1>
      {/* we may call callbacks as function in child codes asparent's function */}
      <h1>{props.dataCall("Home")}</h1>
      <h1>{props.dataCall("Lider")}</h1>
      <h1>{props.dataCall("Others")}</h1>
      <h1>{props.dataCall("neutralists")}</h1>
      <h1>{props.dataCall("pessimists")}</h1>
    </div>
  );
};
export default memo(Storage);
//we add memo beacuse when we don't want run child components
