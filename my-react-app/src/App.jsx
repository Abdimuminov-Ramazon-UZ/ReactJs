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
class State extends React.Component{
	//we create constructor function for Lifecycle which is we connect with React.components elements
	//we have react rule so constructor run first though it writes under render
	constructor(props){
		super(props)
		this.state={
			count:0,
			title:"Academy",
			option:"male",
			checked:true
		}
	}
	render(){

		const plus=()=>{
			// this.state.count=this.state.count+1
			//we change state variables with setState function and it runs render function if we click button
			if (this.state.count<10) {
				this.setState({count:this.state.count+1})
			}
			console.log(this.state.count)
		}
		const minus=()=>{
			//we add conditions for control limit
			if (this.state.count>0) {
			this.setState({count:this.state.count-1})
			}
		}
		const onchange=(event)=>{
			this.setState({title:event.target.value})
			console.log(event.target.value)
		}
		const onselect=(event)=>{
			this.setState({option:event.target.value})
		}
		const oncheck=(event)=>{
			if(event.target.checked){
				this.setState({count:1})
			}
		}
		return (
			<div>
				<h1>State {this.state.count}</h1>
				<h2>{this.state.title} {this.state.option}</h2>
				<input onChange={onchange} placeholder='name' type="text" />
				<button onClick={plus}>+</button>
				<button onClick={minus}>-</button>
				<select onChange={onselect} name="" id="">
					<option value="male">male</option>
					<option value="female">female</option>

				</select>
				<input onChange={oncheck} type="checkbox" />
			</div>
		)
	}
}
export default State