import React, { Component } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees, 
    searchTerm: ''
  };

  render() {
    return (
      <div>
        <Header />   
        <Results/>
      </div>
    )}; 
  };

export default App;

//https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae

//https://github.com/jonathanbrierre/Simple-Dynamic-Search/blob/master/src/NamesContainer.jsx