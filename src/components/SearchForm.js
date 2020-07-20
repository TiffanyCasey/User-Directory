import React, { Component } from "react";
import "../index.css";
import employees from "../employees.json";

class Search extends Component {
  // Setting the component's initial state
  state = {
    employees: [employees],
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    console.log("Input value", event.target.value);
    console.log("employees", employees)
    
    const newArray = this.state.employees.filter((emp)=>{
      return emp.indexOf(event.target.value) !== -1 
    });
   
    console.log("New array", newArray)
    this.setState({
      employees: [newArray],
    })
  };

  render() {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name"
        name="employees"
        className="Search"
        value={this.state.input}
        onChange={this.handleInputChange}
        id="search"
      />
    </div>
  );
  };
}
  
export default Search