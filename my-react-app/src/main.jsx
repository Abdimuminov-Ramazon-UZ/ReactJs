import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Student } from './App'
//we use vite for create react app so we make git repo for this project and we use main jsx format also react components
// import App from './App.jsx'
// import './index.css'
// //we have only Html page in project and we name single page project which is created by React
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import "./index.html"
//we load only changes react-dom determines changes 
// ReactDOM.render(<h1>"hi react"</h1>,document.getElementById("root"))
//React machine print elements in the Strict mode elements
// import Department from "./App.jsx"
//we call default exports with desirable names though it's names other in origin file
// let mark=Marks.anna
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App title="React"/>
//     <App title="VUe,Svelte"/>
//     <App title="Angular "/>
//     <App data={{status:"low",render:"yes"}}/>
//     <App title="Angular ">
//       <h1>I'm the child</h1> </App>
 
//   </StrictMode>
// )
//we use different components for App.jsx
//we  change names for don't conflict default exports
//we create data object in third call App and we must use optional chaining and we give ? before dot
//we create childs in main.jsx and we get it through this from class
import Student from "./App.jsx"
const student=[
  {id:1,name:"max"},
  {id:1,name:"max"},{id:1,name:"max"},{id:1,name:"max"},{id:1,name:"max"},{id:1,name:"max"},{id:1,name:"max"},{id:1,name:"max"},
]
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {student.map((value)=>{
      return (
        <Student data={value}/>

        
      )
    })}
  </StrictMode>
)