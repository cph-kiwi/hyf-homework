import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import Border from "./Border";
import { AddItemModal } from "./AddItemModal";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function ToDoApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfToDos, setListOfToDos] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const checkItem = (id, check) => {
    setListOfToDos(
      listOfToDos.map((item) => {
        if (item.id === id) {
          return { ...item, checked: check };
        } else {
          return item;
        }
      })
    );
  };

  const deleteItem = (id) => {
    setListOfToDos(listOfToDos.filter((item) => item.id !== id));
  };

  const editItem = (id, editedItem) => {
    setListOfToDos(
      listOfToDos.map((item) => {
        if (item.id === id) {
          return editedItem;
        } else {
          return item;
        }
      })
    );
  };

  function getDateString() {
    return new Date().toISOString().slice(0, 10);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        setListOfToDos(result.map((item) => ({ ...item, checked: false })));
        setIsLoading(false);
      });

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="to-do-app">
      <Border>
        <h1 className="large-title">To do list</h1>
        <p className="paragraph">
          You have used {seconds} seconds on this website
        </p>
        <div>
          <br />
          <button onClick={() => setShowAddItem(true)}>Add to do item</button>
        </div>

        <AddItemModal
          length={listOfToDos.length}
          showAddItem={showAddItem}
          onCloseAddItem={() => setShowAddItem(false)}
          onSubmitItem={(item) => {
            if (item.description === "" || item.deadline === "") {
              alert("Description and deadline are required feilds");
            } else if (item.deadline < getDateString()) {
              alert("Deadline must be in the future");
            } else {
              setShowAddItem(false);
              setListOfToDos((prev) => {
                return prev.concat(item);
              });
            }
          }}
        />
        <br />
        {isLoading && <div>Loading...</div>}
        <ToDoList
          listOfToDos={listOfToDos}
          checkItem={checkItem}
          deleteItem={deleteItem}
          editItem={editItem}
          getDateString={getDateString}
        />
      </Border>
    </div>
  );
}

export default ToDoApp;
