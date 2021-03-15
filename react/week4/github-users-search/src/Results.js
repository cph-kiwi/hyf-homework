import React, { useContext } from "react";
import { ResultsContext } from "./ResultsContext";

function Results() {
  const resultsContext = useContext(ResultsContext);

  return (
    <div>
      {resultsContext.query === "" ? (
        <p>Type in the search field to see results</p>
      ) : (
        resultsContext.results?.map((match) => {
          return (
            <div key={match.id}>
              <img
                src={match.avatar_url}
                alt="Avatar of matching github user"
                width="50"
              />
              <p>
                <a href={match.url}>{match.login}</a>
              </p>
            </div>
          );
        })
      )}

      {resultsContext.query !== "" && resultsContext.results.length === 0 ? (
        <p>No matches</p>
      ) : null}
    </div>
  );
}

export default Results;
