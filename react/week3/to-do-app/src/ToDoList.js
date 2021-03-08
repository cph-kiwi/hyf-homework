import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoItems, setListOfToDos }) {
  // pull deleteItem out here
  // Write editItem function here

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
              <li key={item.id} className={item.checked ? "ruled-out" : ""}>
                <ToDoItem
                  description={item.description}
                  complete={item.checked}
                  onCheck={(check) => {
                    setListOfToDos(
                      toDoItems.map((i) => {
                        if (i.id === item.id) {
                          return { ...i, checked: check };
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

export default ToDoList;
