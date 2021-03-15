import React, { useContext } from "react";
import { ResultsContext } from "./ResultsContext";

function Results() {
  const resultsContext = useContext(ResultsContext);

  return (
    <div>
      {resultsContext.query === "" ? (
        <p>{resultsContext.results}</p>
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
    </div>
  );
}

export default Results;
