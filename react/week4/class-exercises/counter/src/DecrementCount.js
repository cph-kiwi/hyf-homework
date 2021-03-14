import { useContext } from "react";
import { CountContext } from "./CountContext";

export function DecrementCount() {
  const countContext = useContext(CountContext);
  return <button onClick={countContext.decrementCount}>Decrement count</button>;
}
