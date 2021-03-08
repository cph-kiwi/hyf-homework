import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import Border from "./Border";
import ToDoItem from "./ToDoItem";
import { AddItemModal } from "./AddItemModal";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

// id, description, deadline, checked, delete, edit

function ToDoApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfToDos, setListOfToDos] = useState([]);
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        setListOfToDos((prev) => {
          return prev.concat(result);
        });
        setIsLoading(false);
      });

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // This function needs some work
  //   const addToDoItem = () => {
  //     setListOfToDos([
  //       ...listOfToDos,
  //       {
  //         id: listOfToDos.length + 1,
  //         description: "",
  //         checked: false,
  //       },
  //     ]);
  //   };

  return (
    <div className="to-do-app">
      <Border>
        <h1 className="large-title">To do list</h1>
        <p className="paragraph">
          You have used {seconds} seconds on this website
        </p>
        <div>
          <br />
          <button onClick={() => setShow(true)}>Add to do item</button>
        </div>

        <AddItemModal
          show={show}
          onClose={() => setShow(false)}
          onSubmitItem={(item) => {
            setShow(false);
            setListOfToDos((prev) => {
              return prev.concat(item);
            });
          }}
        />
        <br />
        {isLoading && <div>Loading...</div>}

        <ul>
          {listOfToDos.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  <ToDoItem
                    description={item.description}
                    deadline={item.deadline}
                  />
                </li>
                <br />
              </div>
            );
          })}
        </ul>

        <ToDoList toDoItems={listOfToDos} setListOfToDos={setListOfToDos} />
      </Border>
    </div>
  );
}

export default ToDoApp;

/* <button onClick={addRandomItem}>Add todo item to list</button> */
