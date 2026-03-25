import { useEffect, useState } from "react";

export let Fetch = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  //we use useeffect for one time render
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // });
  const getUsers = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`,
    ).then((res) => res.json());
  };
  useEffect(() => {
    getUsers().then((res) => setData(res));
  }, []);
  const getInfo = (id) => {
    getUsers(id).then((res) => setSelected(res));
  };
  const getDelete = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "Delete",
      headers: {
        Authorization: "Bearer",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>fetch</h1>
        <h1>Data List</h1>
        {data.map((value) => (
          <h1 key={value.id}>
            {value.name} {value.id}{" "}
            <button onClick={() => getInfo(value.id)}>getInfo</button>
            <button onClick={() => getDelete(value.id)}>Delete</button>
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <div>
          {console.log(selected.id)}
          <h1 key={selected.id}>name: {selected.name}</h1>
        </div>
      </div>
    </div>
  );
};
