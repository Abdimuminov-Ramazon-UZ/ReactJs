import { useRef } from "react";
export const Login = () => {
  const getUsers = () => {
    return (fetch("https://jsonplaceholder.typicode.com/users"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      body: JSON.stringify({
        email: "",
        password: "",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return localStorage.setItem(res);
      });
  };
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(typeof emailRef);

  return (
    <div>
      <span>
        email <input ref={emailRef} type="text" />
      </span>
      <span>
        password <input ref={passwordRef} type="text" />
      </span>
      <button onClick={getUsers}>Login</button>
      {/* we clear localStorage due to remove items from localStorage and we don't enter website now */}
      <button
        onClick={() => {
          return localStorage.clear();
        }}
      >
        Login
      </button>
     
    </div>
  );
};
//415 - contettype is error
//200 - All is done
//500 - whatever backend doesn't work
