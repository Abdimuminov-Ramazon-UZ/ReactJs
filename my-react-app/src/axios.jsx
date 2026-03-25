import axios from "axios";
//Axios is third part library as fetch
export let Axios = () => {
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://jsonplaceholder.typicode.com/users",
  //     headers: {},
  //     body: { name: "Anna" },
  //     timeout: 3000,
  //   }).then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);
  // we use as fetch axios
  axios.post("https://jsonplaceholder.typicode.com/users", {
    headers: {},
    body: { name: "Anna" },
    timeout: 3000,
  });
  //axios does auto json parse datas,FETCH doesn't work old version brausers,we use more metods to solve problems.we set time when we want to stop request no infinity loop.we use timeout metod
  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
};
