import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

export function EditModal({ item, onSubmitEditedItem, onCloseEdit }) {
  const [editedItem, setEditedItem] = useState(item);

  const onChangeEditDescription = (event) => {
    setEditedItem({ ...editedItem, description: event.target.value });
  };

  const onChangeEditDeadline = (event) => {
    setEditedItem({ ...editedItem, deadline: event.target.value });
  };

  const submitItem = (event) => {
    event.preventDefault();
    onSubmitEditedItem(item.id, editedItem);
  };

  return (
    <div className="modal" onClick={onCloseEdit}>
      <div className="overlay" onClick={(event) => event.stopPropagation()}>
        <Border>
          <form className="form" onSubmit={submitItem}>
            <label htmlFor="description">Item description:</label>
            <input
              id="description"
              type="text"
              value={editedItem.description}
              onChange={onChangeEditDescription}
              autoFocus={true}
            />
            <br />
            <label htmlFor="deadline">Deadline:</label>
            <input
              id="deadline"
              type="date"
              name="deadline"
              value={editedItem.deadline}
              onChange={onChangeEditDeadline}
            />
            <br />
            <button type="submit">Save item</button>
          </form>
        </Border>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  item: PropTypes.object,
  onSubmitEditedItem: PropTypes.func,
  onCloseEdit: PropTypes.func,
};
