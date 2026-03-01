import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../my-react-app/src/index.css";
import { Example } from "./src/example.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ margin: "8px" }}>
      <Example />
    </div>
  </StrictMode>,
);
