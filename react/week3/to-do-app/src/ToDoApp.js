import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";

function ToDoApp() {
  const [listOfToDos, setListOfToDos] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [seconds]);

  const addRandomItem = () => {
    setListOfToDos([
      ...listOfToDos,
      {
        id: listOfToDos.length + 1,
        description: "",
        complete: false,
      },
    ]);
  };

  return (
    <div className="to-do-app">
      <p>You have used {seconds} seconds on this website</p>
      <button onClick={addRandomItem}>Add todo item to list</button>
      <ToDoList toDoItems={listOfToDos} setListOfToDos={setListOfToDos} />
    </div>
  );
}

export default ToDoApp;
