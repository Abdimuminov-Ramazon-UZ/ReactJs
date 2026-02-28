//NinethLesson
//Advanced Context API
//State management,useContext
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Example } from "../my-react-app/src/Root/example.jsx";
import "../my-react-app/src/index.css";
import { Context } from "./src/Context/index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <div style={{ margin: "8px" }}>
        <h1>Lost</h1>
        <Example />
      </div>
    </Context>
  </StrictMode>,
);
