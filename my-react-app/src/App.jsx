import React from "react";
import { stories } from "./mock.js";
export class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "online",
      data: stories,
      id: 0,
      name: "",
      type: "",
      search: "id",
      example: "",
      active: {},
    };
  }
  render() {
    //Assigning every input value to state
    //More common formulation
    const onchange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    //Second Element is Read
    //Assign selector's value
    const onselect = (event) => {
      this.setState({ search: event.target.value });
    };
    const onget = (event) => {
      this.setState({ example: event.target.value });
    };
    const onsearch = (event) => {
      console.log(event.target);
      if (this.state.example) {
        let search = `${this.state.search}`;

        let res = [];
        if (typeof this.state.data[0][search] === "number") {
          res = this.state.data.filter(
            (value) => value[search] == this.state.example
          );
        } else {
          res = this.state.data.filter((value) =>
            value[search]
              .toLowerCase()
              .includes(this.state.example.toLowerCase())
          );
        }
        this.setState({ data: res, search: "id" });
      } else {
        this.setState({ data: stories });
      }
    };
    //First element of Create
    const onAdd = (event) => {
      console.log(event);
      let user = {
        id: this.state.data.length + 1,
        name: this.state.name,
        type: this.state.type,
      };
      this.setState({ data: [...this.state.data, user], name: "", type: "" });
    };
    //Fourth element of Delete
    const ondelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    //Third element of Update
    const onedit = ({ id, name, type }, isSave) => {
      console.log(this.state.active);
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, type: this.state.type }
            : value
        );
        this.setState({ active: null, data: res });
        // this.setState({ data: res, edited: null });
      } else {
        this.setState({
          active: { id, type, name },
          name: name,
          type: type,
        });
      }
      // this.setState({ data: stories, active: "false" });
    };
    return (
      <div>
        <div>
          <select onChange={onselect}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input
            value={this.state.example}
            onChange={onget}
            type="text"
            placeholder="search"
          />
          <button value={this.state.search} onClick={onsearch}>
            search
          </button>
        </div>
        {this.state.data.map(({ id, name, type }) => {
          return (
            <div>
              <h1>
                {this.state.active?.id === id ? (
                  <input
                    onChange={onchange}
                    value={this.state.id}
                    name="id"
                    type="text"
                    placeholder="enter new id"
                  />
                ) : (
                  id
                )}
              </h1>
              <p>
                {this.state.active?.id === id ? (
                  <input
                    onChange={onchange}
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="enter new name"
                  />
                ) : (
                  name
                )}
              </p>
              <p>
                {this.state.active?.id === id ? (
                  <input
                    onChange={onchange}
                    value={this.state.type}
                    name="type"
                    type="text"
                    placeholder="enter new type"
                  />
                ) : (
                  type
                )}
              </p>
              <button onClick={() => ondelete(id)}>Delete</button>
              <button
                value="true"
                onClick={() =>
                  onedit({ id, name, type }, this.state.active?.id === id)
                }
              >
                {this.state.active?.id === id ? "Save" : "Edit"}
              </button>
            </div>
          );
        })}
        <hr />
        <div>
          <p>Name of market</p>
          <input
            name="name"
            onChange={onchange}
            type="text"
            placeholder="Please enter your market name"
          />
          <p>Market's place</p>
          <input
            name="type"
            onChange={onchange}
            type="text"
            placeholder="Please enter your place type"
          />
          <hr />
          <button onClick={onAdd}>Add</button>
        </div>

        <h1>{}</h1>
      </div>
    );
  }
}

// import { student } from "./mock.js";
// class State extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       title: "Academy",
//       option: "male",
//       checked: true,
//       name: "Max",
//       surname: "Brad",
//       status: "",
//       data: student,
//       search: "Name",
//       active: {},
//     };
//   }
//   render() {
//     const onfilter = (e) => {
//       console.log(e);
//       const { value } = e.target;
//       let res = student.filter((item) =>
//         `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
//       );
//       this.setState({ data: res });
//     };
//     const ondelete = (id) => {
//       console.log(id);
//       let res = this.state.data.filter((value) => value.id !== id);
//       this.setState({ data: res });
//     };
//     const onchange = (e) => {
//       console.log(e.target);
//       this.setState({ [e.target.name]: e.target.value });
//     };
//     //Add datas first off Create element
//     const onadd = (e) => {
//       console.log(e);
//       let user = {
//         id: Date.now(),
//         name: this.state.name,
//         status: this.state.status,
//       };
//       this.setState({ name: "", status: "" });
//       console.log(user);
//       this.setState({ data: [...this.state.data, user], name: "", status: "" });
//     };
//     const onselect = (e) => {
//       this.setState({ search: e.target.value });
//     };
//     const onedit = ({ id, status, name }, isSave) => {
//       if (isSave) {
//         let res = this.state.data.map((value) =>
//           value.id === this.state.active.id
//             ? { ...value, name: this.state.name, status: this.state.status }
//             : value
//         );
//         this.setState({ active: null, data: res });
//       } else {
//         this.setState({
//           active: { id, status, name },
//           name: name,
//           status: status,
//         });
//       }
//     };
//     return (
//       <div>
//         <input
//           value={this.state.name}
//           onChange={onchange}
//           name="name"
//           type="text"
//           placeholder="name"
//         />
//         <input
//           value={this.state.status}
//           onChange={onchange}
//           name="status"
//           type="text"
//           placeholder="status"
//         />
//         <button onClick={onadd}>add</button>
//         <hr />
//         <select onChange={onselect}>
//           <option value="id">ID</option>
//           <option value="status">Status</option>
//           <option value="name">Name</option>
//         </select>
//         <input onChange={onfilter} type="text" placeholder="Search" />
//         <hr />
//         <table border="1px" width={"100%"}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Delete</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.length ? (
//               this.state.data.map(({ id, name, status }) => {
//                 return (
//                   <tr>
//                     <td>{id}</td>
//                     <td>
//                       {this.state.active?.id === id ? (
//                         <input
//                           onChange={onchange}
//                           name="name"
//                           value={this.state.name}
//                           type="text"
//                         ></input>
//                       ) : (
//                         name
//                       )}
//                     </td>
//                     <td>
//                       {this.state.active?.id === id ? (
//                         <input
//                           onChange={onchange}
//                           name="status"
//                           value={this.state.status}
//                           type="text"
//                         ></input>
//                       ) : (
//                         status
//                       )}
//                     </td>
//                     {/* if we don't get here id we don't get important id id come heren map's value */}
//                     <td>
//                       <button onClick={() => ondelete(id)}>Delete</button>
//                     </td>
//                     <td>
//                       <button
//                         onClick={() =>
//                           onedit(
//                             { id, status, name },
//                             this.state.active?.id === id
//                           )
//                         }
//                       >
//                         {this.state.active?.id === id ? "Save" : "Edit"}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <th colSpan={5}>
//                   <h1>No Data</h1>
//                 </th>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
// export default State;
