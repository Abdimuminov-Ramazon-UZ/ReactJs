import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export let SignIn = () => {
  let loginRef = useRef();
  let passwordRef = useRef();
  let Navigate = useNavigate();
  const onSave = () => {
    if (
      loginRef.current.value === "max" &&
      passwordRef.current.value === "1234"
    ) {
      localStorage.setItem("token", true);
      // we give path with use Navigate and when we touch submit we autojump template page
      Navigate("/templates");
      // console.log("true");
    } else {
      localStorage.setItem("token", false);
      // console.log("wrong data");
    }
  };
  const onClear = () => {
    localStorage.clear();
    return Navigate("/SignIn");
  };
  return (
    <div>
      <h1>SignIn</h1>
      <input ref={loginRef} type="text" />
      <input ref={passwordRef} type="text" />
      <button onClick={onSave}>submit</button>
      <button onClick={onClear}>clear</button>
    </div>
  );
};
