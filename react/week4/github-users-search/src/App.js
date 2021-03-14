import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(["No matches"]);

  useEffect(() => {
    setIsLoading(true);
    const API_URL = `https://api.github.com/search/users?q=${query}`;

    if (query === "") {
      return null;
    } else {
      fetch(API_URL)
        .then((response) => response.json())
        .then((matches) => {
          const { items } = matches;
          setResults(items);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("error fetching (reason why it failed)...", error);
        });
    }
  }, [query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  // console.log("results", results);

  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <input type="text" value={query} onChange={onChange} />

      {query === "" ? isLoading && <div>Loading...</div> : null}

      {query === "" ? (
        <p>{results}</p>
      ) : (
        results?.map((match) => {
          return <p key={match.id}>{match.login}</p>;
        })
      )}
    </div>
  );
}

export default App;

// debounce - add a timeout. once event hasn't changed for 500 ms then call fetch.
// add avatar
// add link to github account
