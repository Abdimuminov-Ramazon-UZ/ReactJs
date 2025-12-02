//homeworks with fruit
// import React from 'react'
// class Fruit extends React.Component{

// 	render(){
// 		console.log(this.props)
// 		return (
// 			<div class="container">
// 						{this.props.data?.id} : {this.props.data?.name}
// 			</div>
// 		)
// 	}
// }
// export default Fruit
import React from 'react'
import { student } from "./mock.js"
class State extends React.Component{
	//we create constructor function for Lifecycle which is we connect with React.components elements
	//we have react rule so constructor run first though it writes under render
	constructor(props){
		super(props)
		this.state={
			count:0,
			title:"Academy",
			option:"male",
			checked:true,
			name:"Max",
			surname:"Brad",
			data:student
		}
	}
	render(){

		// const plus=()=>{
		// 	// this.state.count=this.state.count+1
		// 	//we change state variables with setState function and it runs render function if we click button
		// 	if (this.state.count<10) {
		// 		this.setState({count:this.state.count+1})
		// 	}
		// 	console.log(this.state.count)
		// }
		// const minus=()=>{
		// 	//we add conditions for control limit
		// 	if (this.state.count>0) {
		// 	this.setState({count:this.state.count-1})
		// 	}
		// }
		// we get default DOM parametr which is event
		// const onchange=(event)=>{
		// 	this.setState({title:event.target.value})
		// 	console.log(event.target.value)
		// }
			// const onchange=(event)=>{
			// 	// event.target.value={}
			// 	console.log(event,this.state)
				//we get name title for input element and we get universal onchange funtion important view is the same keys we get similar names for state properties and input's name title
		// 		console.log(event.target.name)
		// 	this.setState({[event.target.name]:event.target.value})
		// 	console.log(event.target.value)
		// }
		// const onselect=(event)=>{
		// 	this.setState({option:event.target.value})
		// }
		// const oncheck=(event)=>{
		// 	if(event.target.checked){
		// 		this.setState({count:1})
		// 	}
		// }
		// const onchangename=e=>{
		// 	console.log(e)//e is special object for react DOM 
		// 	this.setState({name:e.target.value})
		// }
		// 	const onchangesurname=e=>{
		// 	// this.setState({name:e.target.value})
		// 	//we call e 's target
		// 	this.setState({surname:e?.target?.value})

		// }
		// we filter data elements with name
		const onfilter=e=>{
			console.log(e)
			let res=student.filter(value=>value.name.includes(e?.target?.value))
			this.setState({data:res})
		}
		return (
			<div>
			{/* // 	<h1>State {this.state.count}</h1>
			//    <h1>name: {this.state.name}</h1>
			//    <h1>surname: {this.state.surname}</h1>
			// 	<input name='name' onChange={onchange} type="text" placeholder='name' /> */}
				{/* first input is returns free because we give default parametr to event */}
						{/* <input onChange={()=>{onchangesurname("hey")}} type="text" placeholder='surname' /> */}
						{/* second input obeys React's rules and it changes surname
						<input onChange={onchangesurname} type="text" placeholder='surname' /> */}
						{/* third input changes surname too because we call function as callback function though we give it e as event 
						<input onChange={(e)=>{onchangesurname(e,"hey")}} type="text" placeholder='surname' /> */}
				{/* <h2>{this.state.title} {this.state.option}</h2>
				<input onChange={onchange} placeholder='name' type="text" />
				<button onClick={plus}>+</button>
				<button onClick={minus}>-</button>
				<select onChange={onselect} name="" id="">
					<option value="male">male</option>
					<option value="female">female</option>

				</select>
				<input onChange={oncheck} type="checkbox" /> */}
				<input onChange={onfilter} type="text"  placeholder='Search'/>
				<hr />
				{
					this.state.data.map(({id,name,status})=>{
						return  (
							<h1>{id}:{name} {status}</h1>
						)
					})
				}
			</div>
		)
	}
}
export default State