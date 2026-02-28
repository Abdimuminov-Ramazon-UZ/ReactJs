import { useContext, useState } from "react";
import { DataContext } from "./data.jsx";

export const DataList = ({ children }) => {
  let [data, setData] = useState([
    { id: 1, name: "MAx1", surname: "Brad" },
    { id: 12, name: "MAx2", surname: "Brad" },
    { id: 13, name: "MAx3", surname: "Brad" },
    { id: 14, name: "MAx4", surname: "Brad" },
    { id: 15, name: "MAx5", surname: "Brad" },
    { id: 16, name: "MAx6", surname: "Brad" },
    { id: 17, name: "MAx6", surname: "Brad" },
    { id: 18, name: "MAx7", surname: "Brad" },
  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
export const Data = () => useContext(DataContext);
