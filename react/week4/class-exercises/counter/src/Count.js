import { useContext } from "react";
import { CountContext } from "./CountContext";

function Count() {
  const countContext = useContext(CountContext);
  return <h1>Count: {countContext.count}</h1>;
}

export default Count;
