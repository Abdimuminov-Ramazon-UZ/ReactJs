// import { useDeferredValue, useMemo } from "react";
import { useEffect, useId } from "react";
// let List = ({ value }) => {
const List = () => {
  // const defValue = useDeferredValue(value);
  // we use useDefferedvalue for loading input values for postponed times
  // const list = useMemo(() => {
  //   let l = [];
  //   for (let i = 0; i < 10000; i++) {
  //     l.push(`${defValue}`);
  //   }
  //   return l;
  // }, [defValue]);
  // const isPending = value !== defValue;
  // return isPending ? "loading..." : list;
  // Don't write return in Useeffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos");
  }, []);
  const id = useId();
  // we add unique Id for every element
  return <h1> {id}:Data loading with suspense</h1>;
};
export default List;
