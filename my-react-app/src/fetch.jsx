import { useEffect } from "react";

export const Fetch = () => {
  const signal = new AbortController();
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users", {
    body: {},
    headers: {},
		signal,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "fetch");
    });}, []);


  return (
    <div>
      <h1>FetchApi</h1>
    </div>
  );
};
