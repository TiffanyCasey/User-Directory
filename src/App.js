import React from 'react';
import Header from "./components/Header";
import Search from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  return (
      <div>
        <Header />  
        <Search />  
        <Results />
      </div>
  );
}

export default App;