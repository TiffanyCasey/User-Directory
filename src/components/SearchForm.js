import React, { Component } from "react";
import "../index.css";

class Search extends Component {

  // handleInputChange () {
  //   const [first_name] = useState('');
  // }

  render() {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        className="Search"
        value={this.search}
        onChange={this.handleInputChange}
        id="search"
      />
    </div>
  );
  };
}
  
  export default Search