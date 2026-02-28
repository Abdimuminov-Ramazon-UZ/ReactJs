import { Data } from "../Context/context.jsx";
//if we may lose onDelete function so we now assign ondelete fuction to Funtion prototype
export const Body = () => {
  // let [group] = useState(stud
  // export const Body = ({ students, onDelete = Function.prototype }) => {ents);
  // console.log(group);
  const [data, setData] = Data();
  const dataArr = Object.values(data);
  console.log(data);
  const onDelete = (id) => {
    let res = dataArr.filter((item) => {
      return item.id !== id;
    });
    setData(res);
  };

  return (
    <div>
      <h1>useContext</h1>
      {data.map((item) => {
        return (
          <h1 key={item.id}>
            {item.name}{" "}
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </h1>
        );
      })}
    </div>
  );
};
