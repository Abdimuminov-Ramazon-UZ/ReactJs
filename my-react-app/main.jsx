import "antd/dist/antd.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../my-react-app/src/index.css";
import { Example } from "./src/example.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{ margin: "8px" }}>
        <Example />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
