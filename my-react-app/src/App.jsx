
import React from 'react'
import { student } from "./mock.js"
class State extends React.Component{

	constructor(props){
		super(props)
		this.state={
			count:0,
			title:"Academy",
			option:"male",
			checked:true,
			name:"Max",
			surname:"Brad",
			status:"",
			data:student
		}
	}
	render(){

		const onfilter=e=>{
			console.log(e)
			let res=student.filter(value=>value.name.includes(e?.target?.value))
			this.setState({data:res})
		}
		const ondelete=id=>{
			console.log(id)
			let res =this.state.data.filter((value)=>value.id!==id)
			this.setState({data:res})
		}
		const onchange=e=>{
			console.log(e.target)
			this.setState({[e.target.name]:e.target.value})
		}
		//Add datas first off Create element
		const onadd=e=>{
			console.log(e)
			let user={
				id:Date.now(),
				name:this.state.name,
				status:this.state.status
			}
			this.setState({name:"",status:""})
			console.log(user)
			this.setState({data:[...this.state.data,user],name:"",status:""})
		}
		return (
			<div>
	       <input value={this.state.name} onChange={onchange} name="name" type="text"  placeholder='name'/>
	       <input value={this.state.status} onChange={onchange} name="status" type="text"  placeholder='status'/>
					<button onClick={onadd}>add</button>
				<input onChange={onfilter} type="text"  
				placeholder='Search'/>
				<hr />
				<table border="1px" width={"100%"}>
					<thead>
						<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Status</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
					</thead>
					<tbody>
							{
								this.state.data.length?(
					this.state.data.map(({id,name,status})=>{
						return  (
						<tr>
							<td>{id}</td>
							<td>{name}</td>
							<td>{status}</td>
							{/* if we don't get here id we don't get important id id come heren map's value */}
							<td><button onClick={()=>ondelete(id)}>Delete</button></td>
							<td><button>Edit</button></td>

						</tr>
							
						)
					})
	 ):(
		<tr><th colSpan={5}><h1>No Data</h1></th></tr>
	  )
	}
	
					</tbody>
				</table>
			
			</div>
		)
	}
}
export default State