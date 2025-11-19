import React from 'react'
//create class components
//we extend class component from React.component
class App extends React.Component{
render(){
	//we create one div element for function's return
	// console.log(this.props.title)
	console.log(this.props.children)
const {children,title}=this.props
//we destructure elements as variables
	//we create console blocks between function and return 
//so we use props for class's this prototype and we use it particulalry in main jsx
	return (
		<div>
					<h1> {this.props.title }hi React</h1>
					<h2>React is Js library {this.props?.data?.render}</h2>
					{this.props.children}
					{children} +{title}
		</div>
	)
}
}
class Student extends React.Component{
	render(){
		return (
			<div>
				{this.props.data.id} : {this.props.data.name}
			</div>
		)		
	}
}
// class Student extends React.Component{
// render(){
// 	//we create one div element for function's return
// 	return (
// 		<div>
// 					<h1>hi React your student</h1>
// 					<h2>React is Js library</h2>
// 		</div>
// 	)
// }
// }
// function App(){

// 	return (
// 		<div>
// 			<h1>my app works in host 5173</h1>
// 		</div>
// 	)
// }
//we create elements only capital letters because when we use React hooks this time returns error
//we use import and export metods for components
//we separate elements as objects,functions and variables
// export { App, Student }
// // export default Student
// let Marks ={
// 	max:5,
// 	anna:4
// }
// export { Marks }
export default Student