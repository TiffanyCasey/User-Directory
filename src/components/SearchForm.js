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
        value={props.value}
        id="search"
        onChange={props.handler}
        
      />
    </div>
  );
};

export default Search

