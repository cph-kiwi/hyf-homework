import { useState, useEffect } from "react";
import "./App.css";

const toDoItems = [
  {
    id: 1,
    title: "Doctor",
    task: "Book appointment for daughter regarding earache",
    dateCreated: "Mon Feb 22 2021",
    deadline: "Tues Feb 23 2021",
  },
  {
    id: 2,
    title: "Garden",
    task: "Tidy up garden - remove weeds and mow lawn",
    dateCreated: "Fri Feb 19 2021",
    deadline: "Mon Feb 22 2021",
  },
  {
    id: 3,
    title: "Books",
    task: "Return books to the library",
    dateCreated: "Mon Feb 22 2021",
    deadline: "Fri Feb 26 2021",
  },
  {
    id: 4,
    title: "Shoes",
    task: "Order shoes for daughter online",
    dateCreated: "Sun Feb 21 2021",
    deadline: "Thu Feb 25 2021",
  },
  {
    id: 5,
    title: "Prescription",
    task: "Collect prescription from pharmacy",
    dateCreated: "Mon Feb 22 2021",
    deadline: "Fri Feb 26 2021",
  },
  {
    id: 6,
    title: "Laundry",
    task: "Wash woolens",
    dateCreated: "Fri Feb 19 2021",
    deadline: "Mon Feb 22 2021",
  },
];

function HeadingBar() {
  return <h1 className="large-title">Beth's to-do list</h1>;
}

function ItemTitle({ title }) {
  return <h2 className="medium-title">{title}</h2>;
}

function ItemDetails({ title, task, dateCreated, deadline }) {
  return (
    <div>
      <ItemTitle title={title} />
      <p className="paragraph">Task: {task}</p>
      <p className="paragraph">Date created: {dateCreated}</p>
      <p className="paragraph">Deadline: {deadline}</p>
    </div>
  );
}

function ListItemsTable(props) {
  return (
    <div>
      <ul>
        {props.toDoItems.map((item) => {
          return (
            <li key={item.id}>
              <ItemDetails {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ToDoApp(props) {
  return (
    <div>
      <HeadingBar />
      <ListItemsTable toDoItems={props.toDoItems} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ToDoApp toDoItems={toDoItems} />
    </div>
  );
}

export default App;
