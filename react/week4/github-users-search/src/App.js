import React, { useContext } from "react";
import Results from "./Results";
import { SearchInput } from "./SearchInput";
import { ResultsContext } from "./ResultsContext";
import "./App.css";

function App() {
  const resultsContext = useContext(ResultsContext);
  // console.log(resultsContext.results);
  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <SearchInput />
      {resultsContext.isLoading && (
        <div className="loading-indicator">Loading...</div>
      )}
      <div className="loading-indicator">Loading...</div>
      <Results />
    </div>
  );
}

export default App;
