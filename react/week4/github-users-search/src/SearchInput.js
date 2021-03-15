import { useContext } from "react";
import { ResultsContext } from "./ResultsContext";

export function SearchInput() {
  const resultsContext = useContext(ResultsContext);

  return (
    <div>
      <input
        type="text"
        value={resultsContext.query}
        onChange={resultsContext.onChange}
      />
    </div>
  );
}
