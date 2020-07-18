import React, { Component } from "react";
import "../index.css";
import employees from "../employees.json";

class Results extends Component {
  state = {
    employees
  }

  render() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <strong id="col">First Name</strong> 
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

      {/* <span onClick={() => props.sortEmployees(props.id)} className="sort">
      </span> */}

    </div>
  );
  };
}
  
  export default Results;