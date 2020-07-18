import React from "react";
import "../index.css";


function Results(props) {
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
          <tr>
            <td> {props.first_name} </td> 
            <td> {props.last_name} </td>
            <td> {props.job_title} </td>
            <td> {props.email} </td>
          </tr>
        </tbody>
      </table>

      {/* <span onClick={() => props.sortEmployees(props.id)} className="sort">
      </span> */}

    </div>
  );
}
  
  export default Results;