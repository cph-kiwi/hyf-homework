import { useState, useEffect } from "react";
import "./App.css";

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const descriptions = [
  "Set up playdate for children",
  "Call plumber",
  "Fix bicycle",
  "Make appointment with doctor",
  "Tidy up garden",
  "Return books to library",
  "Buy shoes",
  "Collect prescription",
  "Hang out laundry",
  "Order groceries online",
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

function HeadingBar() {
  return <h1 className="large-title">Beth's to-do list</h1>;
}

function ItemDetails({ description, complete, onCheck, deleteItem }) {
  return (
    <div className="item-details">
      <p className="paragraph">{description}</p>
      <input
        type="checkbox"
        value={complete}
        onChange={(event) => {
          onCheck(event.target.checked);
        }}
      />
      <button onClick={deleteItem}>Delete item from list</button>
    </div>
  );
}

function ListItemsTable({ toDoItems, setListOfToDos }) {
  if (toDoItems.length === 0) {
    return (
      <div>
        <p>No items...</p>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {toDoItems.map((item) => {
            return (
              <li key={item.id} className={item.complete ? "ruled-out" : ""}>
                <ItemDetails
                  description={item.description}
                  complete={item.complete}
                  onCheck={(done) => {
                    setListOfToDos(
                      toDoItems.map((i) => {
                        if (i.id === item.id) {
                          return { ...i, complete: done };
                        } else {
                          return i;
                        }
                      })
                    );
                  }}
                  deleteItem={() => {
                    setListOfToDos(
                      toDoItems.filter((i) => {
                        return i.id !== item.id;
                      })
                    );
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

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
  }, [ seconds]);

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

  return (
    <div className="to-do-app">
      <HeadingBar />
      <p>You have used {seconds} seconds on this website</p>
      <button onClick={addRandomItem}>Add todo item to list</button>
      <ListItemsTable
        toDoItems={listOfToDos}
        id={listOfToDos.id}
        description={listOfToDos.description}
        setListOfToDos={setListOfToDos}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default App;
