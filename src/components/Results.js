import React, { Component } from "react";
import "../index.css";
import employees from "../employees.json";

class Results extends Component {
  state = {
    employees
  }

  sortName = (first_name) => {
    this.setState( prevState => {
      return {
      employees: prevState.employees.sort(e => e.first_name === first_name)
      }
    });
  }

  render() {
  return (
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
        {this.state.employees.map(employee => (
          <tr>
            <td> {employee.first_name} </td> 
            <td> {employee.last_name} </td>
            <td> {employee.job_title} </td>
            <td> {employee.email} </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  };
}
  
  export default Results;