import React, { Component } from "react";
import "../index.css";

class Search extends Component  {
  
state = {
  searchTerm: ''
}

// Allows the input field to control the "searchTerm" value in the state
editSearchTerm = (event) => {
  this.setState({searchTerm: event.target.value})
  console.log("INPUT:", event.target.value);
  console.log("SEARCH TERM:", this.state.searchTerm);
}

render() {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        className="Search"
        value={ this.state.value } // example had searchTerm in here - corresponds to line 34 on Results.JS  
        id="search"
        onChange={ this.editSearchTerm }
      />
    </div>
  );
};
};

export default Search

