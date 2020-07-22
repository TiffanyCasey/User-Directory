import React, { Component } from "react";
import "../index.css";
import Search from "../components/SearchForm";
import Employees from "./Employees";
import employees from "../employees.json";
// import EmployeesContainer from "./EmployeesContainer";

class Results extends Component {

  state = {
    employees, 
  };

  // Renders what shows up onto the page dynamically as letters are typed in the input field -- BREAKS APP WHEN RUN NOW. HAVE IT GREYED OUT BELOW
  dynamicSearch = () => {
    return this.props.employees.filter
    (emp => emp.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
  }

  // Sorts by first name click - not working 
  sortName = (first_name) => {
    this.setState( prevState => {
      return {
      employees: prevState.employees.sort(e => e.first_name === first_name)
      }
    });
  }

  render() {
  return (
  <div>
    <Search />
    <div className="container">
        <table className="table">
          <thead>
              <tr>
                  <th id="col">First Name</th>
                  <th id="col">Last Name</th>
                  <th id="col">Job Title</th>
                  <th id="col">Email Address</th>
              </tr>
          </thead>

            {this.state.employees.map( emp => 
              <Employees
                  key={emp.id}
                  first_name={emp.first_name} 
                  last_name={emp.last_name}
                  job_title={emp.job_title}
                  email={emp.email}
              />
            )}
        </table>
    </div>
    </div>   
  );
  };
}
  
  export default Results;