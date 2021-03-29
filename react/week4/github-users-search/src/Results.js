import React, { useContext } from "react";
import { ResultsContext } from "./ResultsContext";

function Results() {
  const resultsContext = useContext(ResultsContext);

  return (
    <div className="results-list">
      {resultsContext.query === "" ? (
        <p>Type in the search field to see results</p>
      ) : (
        resultsContext.results?.map((result) => {
          return (
            <div className="list-item" key={result.id}>
              <img
                src={result.avatar_url}
                alt={`Avatar of GitHub user ${result.login}`}
                width="100"
              />
              <p>
                <a href={result.url}>{result.login}</a>
              </p>
            </div>
          );
        })
      )}

      {resultsContext.query !== "" && resultsContext.results.length === 0 ? (
        <p>No results...</p>
      ) : null}
    </div>
  );
}

export default Results;
