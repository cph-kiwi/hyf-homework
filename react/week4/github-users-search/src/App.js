import React, { useContext } from "react";
import Results from "./Results";
import { SearchInput } from "./SearchInput";
import { ResultsContext } from "./ResultsContext";
import "./App.css";

function App() {
  const resultsContext = useContext(ResultsContext);

  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <SearchInput />
      {resultsContext.isLoading && (
        <div className="loading-indicator">
          <p>Loading...</p>
        </div>
      )}
      <Results />
    </div>
  );
}

export default App;
