//homework of fruit
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import Fruit from './App'
// import './index.css'
// const students=[
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"},
//   {id:1,name:"Max"}
// ]

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {
//       students.map((value)=>{
//         return <Fruit data={value}/>
//       })
//     }
//   </StrictMode>,
// )
//Third lesson State
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import State from "./App.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <State/>
  </StrictMode>
)