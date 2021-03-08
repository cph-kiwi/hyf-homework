import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoItems, setListOfToDos }) {
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
                <ToDoItem
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

export default ToDoList;
