import React, { useState } from "react";
import ReactDOM from "react-dom";

function ToDoItem({ task, description, datetime, deadline }) {
  return (
    <>
      <li>
        <h3>Task: {task}</h3>
        <h3>Description: {description}</h3>
        <h3>Datetime: {datetime}</h3>
        <h3>Deadline: {deadline}</h3>
      </li>
    </>
  );
}

function ToDoList(props) {
  return (
    <ul>
      {props.toDoItems.map((item) => {
        return (
          <ToDoItem
            task={item.task}
            description={item.description}
            datetime={item.datetime}
            deadline={item.deadline}
          />
        );
      })}
    </ul>
  );
}

const toDoItems = [
  {
    task: "Get out of bed",
    description:
      "Wake up and get out of bed, straighten sheets, get dressed, and tidy up",
    datetime: "Wed Sep 13 2017",
    deadline: "06:30",
  },
  {
    task: "Brush teeth",
    description:
      "Use bathroom, brush teeth, put on deoderant, brush hair, and wash face",
    datetime: "Thu Sep 14 2017",
    deadline: "06:45",
  },
  {
    task: "Eat breakfast",
    description: "Make breakfast for family and set table",
    datetime: "Fri Sep 15 2017",
    deadline: "07:15",
  },
];

ReactDOM.render(
  <ToDoList toDoItems={toDoItems} />,
  document.getElementById("root")
);

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
