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
      {resultsContext.query === ""
        ? resultsContext.isLoading && <div>Loading...</div>
        : null}
      <Results />
    </div>
  );
}

export default App;
