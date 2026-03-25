import axios from "axios";
import { Axios } from "./axios";
import { Fetch } from "./fetch";
export let Example = () => {
  axios.interceptors.request.use((req) => {
    console.log(req, "request");
    req.headers.Authorization = "Bearer webbrain";
    return req;
  });
  axios.interceptors.response.use((res) => {
    console.log(res, "res");
    return res;
  });
  // we use interceptors as fetch body element
  return (
    <div>
      <h1>Ready and Study</h1>
      <Axios />
      <Fetch />
    </div>
  );
};
