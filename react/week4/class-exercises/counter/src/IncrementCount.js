import { useContext } from "react";
import { CountContext } from "./CountContext";

export function IncrementCount() {
  const countContext = useContext(CountContext);
  return <button onClick={countContext.incrementCount}>Increment count</button>;
}
