import React from "react";
import Border from "./Border";

function ToDoItem({ description, complete, onCheck, deleteItem }) {
  return (
    <Border>
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
    </Border>
  );
}

export default ToDoItem;
