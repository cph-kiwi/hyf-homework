import React, { createContext, useState, useEffect } from "react";

export const ResultsContext = createContext();

const ResultsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const contextValue = {
    isLoading,
    query,
    results,
    onChange,
  };

  useEffect(() => {
    const API_URL = `https://api.github.com/search/users?q=${query}`;

    if (query === "") {
      setIsLoading(false);
      return;
    } else {
      setIsLoading(true);

      const timerID = setTimeout(() => {
        fetch(API_URL)
          .then((response) => {
            if (response.ok) {
              response.json().then((matches) => {
                const { items } = matches;
                setResults(items);
                setIsLoading(false);
              });
            } else {
              console.log("Response error message", matches.message);
            }
          })
          .catch((error) => {
            console.log("Catch error message", error.message);
          });
      }, 500);

      return () => {
        clearTimeout(timerID);
      };
    }
  }, [query]);

  return (
    <ResultsContext.Provider value={contextValue}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
