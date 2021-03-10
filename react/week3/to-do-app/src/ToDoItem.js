import React, { useState } from "react";
import Border from "./Border";
import { EditModal } from "./EditModal";

function ToDoItem({
item,
  onCheck,
  deleteItem,
  editItem,
}) {
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
            onCheck(event.target.checked);
          }}
        />
        <button onClick={deleteItem}>Delete</button>
        <button onClick={() => setShowEdit(true)}>
          Edit
        </button>

        {(showEdit) && <EditModal
          description={item.description}
          deadline={item.deadline}
          showEdit={showEdit}
          onCloseEdit={() => setShowEdit(false)}
          onSubmitEditedItem={(item) => {
              setShowEdit(false);
              setListOfToDos((i) => {
                return i.(item);
              });
            }}
        />}
      </div>
    </Border>
  );
}

export default ToDoItem;
