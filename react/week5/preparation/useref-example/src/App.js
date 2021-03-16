import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  // ref does not return two values like state.
  // ref returns an object with a current key.
  const renderCount = useRef(1);
  // renderCount = { current: 1 }

  // Here useRef has been used like a document.querySelector
  const inputRef = useRef();
  // You should not use this to avoid onChange functions

  const prevName = useRef("");
  // prevName = { current: "" }

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>
        My name is {name}
        <br />
        and it used to be {prevName.current}.
      </div>
      <div>I rendered {renderCount.current} times.</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;

// ref is very similar to state in that it persists between renders of your component.
// but ref does not cause your component to update and rerender when it gets changed.
// Used to reference elements inside of the html.
// html tags have a ref attribute.
// Ref is great for storing the previous value of state
