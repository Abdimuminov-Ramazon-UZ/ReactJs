//Seventh Lesson
//Hooks
//useState,useEffect,useReducer
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeworkReducer } from "./hook.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ display: "flex", margin: "8px" }}>
      {/* <Hooks /> */}
      {/* <Hooks /> */}
      {/* <NoReturn /> */}
      {/* <Class /> */}
      <HomeworkReducer />
    </div>
  </StrictMode>,
);
