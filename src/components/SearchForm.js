import React from "react";
import "../index.css";

function Search(props) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        className="Search"
        value={props.search}
        onChange={props.handleInputChange}
        id="search"
      />
      {/* <button onClick={props.handleFormSubmit} className="btn btn-primarymt-3">
      Search
      </button> */}
    </div>
  );
}
  
export default Search