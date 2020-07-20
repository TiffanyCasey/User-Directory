import React, { Component } from "react";
import "../index.css";
import Search from "../components/SearchForm";
import employees from "../employees.json";

class Results extends Component {

// FILTER
  state = {
    employees,
    search: "",
    result: [],
    resultDisplay: [],
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    console.log("Input value", event.target.value);
    console.log("employees", employees);

    const userInput = event.target.value;
    // this is not filtering through correctly 
    const newArray = this.state.result.filter((emp)=>{
      return emp.includes(userInput)
    });
    console.log("newarray", newArray);

    this.setState({
      resultDisplay: newArray,
      search: userInput
    })
  };

  // SORT BY FIRST NAME
  sortName = (first_name) => {
    this.setState( prevState => {
      return {
      employees: prevState.employees.sort(e => e.first_name === first_name)
      }
    });
  }

  render() {
  return (
  <>
    <Search handler={this.handleInputChange} value={this.state.search} />
  
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <strong id="col" onClick={this.sortName}>First Name</strong> 
            </th>
            <th>
              <strong id="col">Last Name</strong> 
            </th>
            <th>
              <strong id="col">Job Title</strong> 
            </th>
            <th>
              <strong id="col">Email Address</strong> 
            </th>
          </tr>
        </thead>

        <tbody>
        {this.state.employees.map(emp => (
          <tr key={emp.id}> 
            <td> {emp.first_name} </td> 
            <td> {emp.last_name} </td>
            <td> {emp.job_title} </td>
            <td> {emp.email} </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
  };
}
  
  export default Results;