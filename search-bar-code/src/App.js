import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <button>Search</button>
      <SearchBar placeholder="Enter Dog Name..." data={BookData} />
    </div>
  );
}

export default App;
