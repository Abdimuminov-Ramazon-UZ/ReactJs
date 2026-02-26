// export class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 5,
//     };S
//   }
//   render() {
import { useContext } from "react";
import { DataContext } from "./data.jsx";
export let Navbar = () => {
  const data = useContext(DataContext);

  return (
    <div
      style={{
        background: "blue",
        color: "white",
        height: "40px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <h1>Home {data[0].length}</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};
