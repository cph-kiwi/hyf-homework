import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4); // this useState will be rendered everytime (also if you write a function elsewhere and call it as the parameter here). If you write a function as the parameter for useState it is only run once when it is first rendered
  const [theme, setTheme] = useState("blue");

  /*
const [state, setState] = useState({ count: 4, theme: 'blue' });
const count = state.count;
const theme = state.theme;

function decrementCount() {
    setState(prevState => {
        return { ...prevState, count: prevState.count - 1 }
    })
}
*/

  function decrementCount() {
    setCount((prevCount) => prevCount - 1); // do not use (count - 1) - setState needs to take a function based on the previous count
    setTheme("yellow");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
