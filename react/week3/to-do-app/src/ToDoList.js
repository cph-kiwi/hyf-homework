import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ listOfToDos, checkItem, deleteItem, editItem }) {
  if (listOfToDos.length === 0) {
    return (
      <div>
        <p>No items...</p>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {listOfToDos.map((item) => {
            return (
              <li key={item.id} className={item.checked ? "ruled-out" : ""}>
                <ToDoItem
                  item={item}
                  onCheck={checkItem}
                  deleteItem={deleteItem}
                  editItem={editItem}
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
