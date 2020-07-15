import React from "react";
import "../index.css";


function Results(props) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <strong id="col">First Name</strong> {props.first_name}
            </th>
            <th>
              <strong id="col">Last Name</strong> {props.last_name}
            </th>
            <th>
              <strong id="col">Job Title</strong> {props.job_title}
            </th>
            <th>
              <strong id="col">Email Address</strong> {props.email}
            </th>
          </tr>
        </thead>
      </table>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
      </span>
    </div>
  );
}
  
  export default Results;