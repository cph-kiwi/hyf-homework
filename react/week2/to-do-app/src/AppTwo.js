import { useState, useEffect } from "react";
import "./App.css";

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const descriptions = [
  "Get out of bed",
  "Brush teeth",
  "Eat breakfast",
  "Make appointment with doctor",
  "Tidy up garden",
  "Return books to library",
  "Buy shoes",
  "Collect prescription",
  "Hang out laundry",
];

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    complete: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    complete: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    complete: false,
  },
];

function ToDoApp() {
  const [listOfToDos, setListOfToDos] = useState(todos);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [listOfToDos, seconds]);

  const addRandomItem = () => {
    setListOfToDos([
      ...listOfToDos,
      {
        id: listOfToDos.length + 1,
        description:
          descriptions[Math.round(getRandomNumber(0, descriptions.length))],
        complete: false,
      },
    ]);
  };

  if (toDoItems.length === 0) {
    return (
      <div>
        <p>No items...</p>
      </div>
    );
  } else {
    return (
      <div className="to-do-app">
        <h1 className="large-title">Beth's to-do list</h1>
        <p className="paragraph">
          You have used {seconds} seconds on this website
        </p>
        <button onClick={addRandomItem}>Add todo item to list</button>
        <ul></ul>
      </div>
    );
  }
}

function AppTwo() {
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default AppTwo;
