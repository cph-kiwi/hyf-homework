import React, { useState } from "react";
import Border from "./Border";
import { EditModal } from "./EditModal";

function ToDoItem({ item, onCheck, deleteItem, editItem }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <Border>
      <div className="item-details">
        <p className="paragraph">{item.description}</p>
        <p className="paragraph">{item.deadline}</p>
        <input
          type="checkbox"
          value={item.checked}
          onChange={(event) => {
            onCheck(item.id, event.target.checked);
          }}
        />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => setShowEdit(true)}>Edit</button>

        {showEdit && (
          <EditModal
            item={item}
            showEdit={showEdit}
            onCloseEdit={() => setShowEdit(false)}
            onSubmitEditedItem={(id, editedItem) => {
              setShowEdit(false);
              editItem(id, editedItem);
            }}
          />
        )}
      </div>
    </Border>
  );
}

export default ToDoItem;
