import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/SearchForm";
import Results from "./components/Results";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  }

  render() {
    return (
      <div>
        <Header />  
        <Search />  
        {this.state.employees.map(employee => (
          <Results 
            id={employee.id}
            first_name={employee.first_name}
            last_name={employee.last_name}
            job_title={employee.job_title}
            email={employee.email}
          />
        ))}
      </div>
    );
  }
};

export default App;