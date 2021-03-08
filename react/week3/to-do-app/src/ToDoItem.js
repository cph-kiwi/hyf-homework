import React from "react";
import Border from "./Border";

function ToDoItem({
  description,
  deadline,
  checked,
  onCheck,
  deleteItem,
  editItem,
}) {
  return (
    <Border>
      <div className="item-details">
        <p className="paragraph">{description}</p>
        <p className="paragraph">{deadline}</p>
        <input
          type="checkbox"
          value={checked}
          onChange={(event) => {
            onCheck(event.target.checked);
          }}
        />
        <button onClick={deleteItem}>Delete</button>
        <button onClick={editItem}>Edit</button>
      </div>
    </Border>
  );
}

export default ToDoItem;
