import React, { useState } from "react";
import Border from "./Border";
import { EditModal } from "./EditModal";
import PropTypes from "prop-types";

function ToDoItem({ item, onCheck, deleteItem, editItem, getDateString }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <Border>
      <div className="item-details">
        <p className="paragraph">{item.description}</p>
        <p className={item.deadline < getDateString() ? "bold" : "paragraph"}>
          {item.deadline}
        </p>
        {item.deadline < getDateString() ? <p>Deadline has passed</p> : null}

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
            getDateString={getDateString}
          />
        )}
      </div>
    </Border>
  );
}

ToDoItem.propTypes = {
  item: PropTypes.object,
  onCheck: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default ToDoItem;
