import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Navigation";
import { navbar } from "./utils/navbar";

//we use react-router-dom for change pages.react apps are simgle page application when we want use changing pages so we use routers.rrd v5 and rrd v6 are distinguished so we use some different attributes.Firstlay wrappers BrowserRouter,Routes,Route and we give path, element.we use style function instead of activeStyle and end instead of exact.we want ro know about our current pages we use useLocation hooks.we get parametres from location as search or id params.
//we create privateroute with fake token way for example
export let Example = () => {
  let location = useLocation();
  // let query = new URLSearchParams(location.search);
  // // console.log(location, query.get("status"));
  let token = JSON.parse(localStorage.getItem("token"));

  return (
    <div>
      <h1>we are here {location.pathname}</h1>

      <Routes>
        <Route element={<Nav />}>
          {navbar.map(({ id, path, element, isPrivate }) => {
            return (
              !isPrivate && <Route id={id} path={path} element={element} />
            );
          })}
          {navbar.map(({ id, path, element, isPrivate }) => {
            return (
              isPrivate && (
                <Route
                  id={id}
                  path={path}
                  element={token ? element : <Navigate to={"/templates"} />}
                />
              )
            );
          })}
          {/* <Route path={"/"} elements={<Navigate to={"/home"} />} />
          <Route path="home" element={<Home />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="elements" element={<Elements />} />
          <Route path="template" element={token ? <Template /> : <Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />*/}
        </Route>
      </Routes>

      <h1>Read and Study</h1>
    </div>
  );
};
//we wrap Nav route all elements
