import React, { Component } from "react";
import "../index.css";
import employees from "../employees.json";

class Search extends Component {
  // Setting the component's initial state
  state = {
    employees
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name"
        name="first_name"
        className="Search"
        value={this.state.first_name}
        onChange={this.handleInputChange}
        id="search"
      />
    </div>
  );
  };
}
  
  export default Search