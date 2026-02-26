//Eightth Lesson
//Context API
//State management,useContext
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataList } from "./context.jsx";
import { Example } from "./example.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataList>
      <div style={{ margin: "8px" }}>
        <Example />
      </div>
    </DataList>
  </StrictMode>,
);
