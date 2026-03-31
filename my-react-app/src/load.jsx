import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Clicked } from "./counter";
// import { Hover } from "./hover";
// when we loaded elements with lazyload and suspense we add fallback and we use it for progress our project
const Hover = React.lazy(() => import("./hover.jsx"));
export const Load = () => {
  return (
    <div>
      <h1>loading...</h1>
      {/* <Hover />
      <Clicked /> */}
      <div style={{ display: "flex" }}>
        <NavLink style={{ marginLeft: "10px" }} to={"/counter"}>
          Counter
        </NavLink>
        <NavLink style={{ marginLeft: "10px" }} to={"/hover"}>
          Hover
        </NavLink>
      </div>
      <div>
        <Routes>
          <Route path="counter" element={<Clicked />} />
          <Route
            path="hover"
            element={
              <React.Suspense fallback={<h1>loading..</h1>}>
                <Hover />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
