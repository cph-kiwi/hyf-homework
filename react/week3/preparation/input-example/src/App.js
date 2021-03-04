import React from "react";
import ControlledInput from "./ControlledInput";
import DataFetching from "./DataFetching";
import MyName from "./MyName";
import ChildrenExample from "./ChildrenExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Controlled inputs</h2>
      <ControlledInput />
      <br />
      <h2>Data fetching</h2>
      <DataFetching />
      <br />
      <h2>My name (prop-types example)</h2>
      <MyName name="Beth" age="Beth" />
      <br />
      <h2>Children example</h2>
      <ChildrenExample>
        <p>Hello world</p>
      </ChildrenExample>
      <br />
      <ChildrenExample>
        <button>Click me!</button>
      </ChildrenExample>
    </div>
  );
}

export default App;
