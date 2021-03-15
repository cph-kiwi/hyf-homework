import React, { createContext, useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

export const ResultsContext = createContext();

const ResultsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(["No matches"]);

  const debouncedSave = useCallback(
    debounce((nextQuery) => setResults(nextQuery), 500),
    [query]
  );

  const onChange = (event) => {
    const { query: nextQuery } = event.target;
    setQuery(nextQuery);
    debouncedSave(nextQuery);
  };

  const contextValue = {
    isLoading,
    query,
    results,
    onChange,
  };

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

  return (
    <ResultsContext.Provider value={contextValue}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;

// debounce - add a timeout. once event hasn't changed for 500 ms then call fetch.
