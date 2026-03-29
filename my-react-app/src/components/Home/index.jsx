import { useState } from "react";
import { useNavigate } from "react-router-dom";
export let Home = () => {
  let [item] = useState([
    {
      id: 1,
      name: "Max",
      description: "noSkill",
    },
    {
      id: 2,
      name: "Max",
      description: "noSkill",
    },
    {
      id: 3,
      name: "Max",
      description: "noSkill",
    },
    {
      id: 4,
      name: "Max",
      description: "noSkill",
    },
    {
      id: 5,
      name: "Max",
      description: "noSkill",
    },
    {
      id: 6,
      name: "Max",
      description: "noSkill",
    },
  ]);
  let [selected] = useState({});
  let navigate = useNavigate();
  // we get id from home element with useNavigate hook
  // console.log(navigate);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>home</h1>
        {item.map((value) => {
          return (
            <h1 id={value.id}>
              {value.id}:{value.name}
              <button onClick={() => navigate(`/home/:${value.id}`)}>
                Select
              </button>
              {/* <button onClick={() => history("/elements")}>Select</button> */}
            </h1>
          );
        })}
      </div>
      <div>
        <h1>
          {selected?.id}:{selected?.name}
        </h1>
      </div>
    </div>
  );
};
