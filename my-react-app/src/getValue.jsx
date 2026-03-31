import { useDebugValue, useState } from "react";
// when we use custHooks we use useDebugValue for errorhandling but we avoid use this hook because it calls re-render every time.If we use many useDebugValue localstorage returns as array elements
export default function useLocalStorage() {
  const [value, setValue] = useState([]);
  useDebugValue("testing");

  return [value, setValue];
}
