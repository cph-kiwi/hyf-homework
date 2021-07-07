import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

function ToDoList({
  listOfToDos,
  checkItem,
  deleteItem,
  editItem,
  getDateString,
}) {
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
                  getDateString={getDateString}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ToDoList.propTypes = {
  listOfToDos: PropTypes.array,
  checkItem: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default ToDoList;
