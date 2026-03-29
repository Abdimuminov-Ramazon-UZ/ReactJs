import { useState } from "react";
import { useParams } from "react-router-dom";
export let Single = () => {
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
  const [selected, setSelected] = useState(item[2]);
  // let navigate = useNavigate();
  let params = useParams();
  // setSelected(item[1]);
  // console.log(params.id);
  // we get id from home element with useNavigate hook

  // useEffect(() => {
  //   // ID ni tozalash
  //   let cleanId = params.id;
  //   if (cleanId && cleanId.includes(":")) {
  //     cleanId = cleanId.replace(":", "");
  //   }

  //   // Filtr qilish
  //   let res = item.filter((value) => value.id == cleanId);
  //   console.log(res);
  //   // Set qilish
  //   if (res.length > 0) {
  //     setSelected(item[1]); // ✅ Birinchi element
  //   } else {
  //     setSelected(null); // Topilmasa null
  //   }
  // }, [params.id, item]); // ✅ Dependency'lar

  return (
    <div style={{ display: "flex" }}>
      <h1>Single page like home</h1>
      <h1>Name:{selected?.name}</h1>
    </div>
  );
};
