import React, { useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import MyFuncComponent from "./MyFuncComponent";

const TodoHeader = (props) => {
  return <h2>{props.text}</h2>;
};

const TodoListRow = (props) => {
  const { todo } = props;
  return <li>{todo}</li>;
};

const TodoList = (props) => {
  const { todos, headerText } = props;

  return (
    <div>
      <TodoHeader text={headerText} />
      <ul>
        {todos.map((todo) => {
          return <TodoListRow key={todo} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

const todoArray = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

function App() {
  const [todosState, setTodosState] = useState(todoArray);
  const [isVisible, setIsVisible] = useState(true);
  const [test, setTest] = useState(0);

  const onButtonClick = () => {
    const arrayLength = todosState.length;
    const myNextTodoName = `Todo ${arrayLength + 1}`;
    const myNextToDosState = todosState.concat(myNextTodoName);
    setTodosState(myNextToDosState);
  };

  const onUnmount = () => {
    setIsVisible(!isVisible);
  };

  const onUpdate = () => {
    setTest(test + 1);
  };

  return (
    <div className="App">
      <div>
        <TodoList todos={todosState} headerText="Todo list" /> // State and
        props used on same line to see the difference between them
        <button onClick={onButtonClick}>Add new todo</button>
      </div>
      <button onClick={onUnmount}>Unmount</button>
      <button onClick={onUpdate}>Update</button>

      {isVisible && <MyComponent test={test} />}
      {isVisible && <MyFuncComponent test={test} />}
    </div>
  );
}

export default App;
