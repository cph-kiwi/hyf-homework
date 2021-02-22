import React, { useState } from "react";
import ReactDOM from "react-dom";

// function Increment({counter, setCounter}) {
// function increment() {
//   setCounter(counter + 1)
// }
// return <button onClick={increment}>Increment</button>
// }

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const double = () => {
    setCounter((prev) => prev * 2);
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <div>
        {/* <Increment counter={counter} setCounter={setCounter} /> */}
        <button onClick={increment}>Increment</button>
        <button onClick={double}>Double</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
