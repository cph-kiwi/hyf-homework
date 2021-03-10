import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ listOfToDos, setListOfToDos }) {
  // pull deleteItem out here
  // Write editItem function here

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
                  onCheck={(check) => {
                    setListOfToDos(
                      listOfToDos.map((i) => {
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
                      listOfToDos.filter((i) => {
                        return i.id !== item.id;
                      })
                    );
                  }}
                  editItem={(event) => {
                    setListOfToDos(
                      listOfToDos.map((i) => {
                        if (i.id === item.id) {
                          return {
                            ...i,
                            description: event.target.value,
                            deadline: event.target.value,
                          };
                        } else {
                          return i;
                        }
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
