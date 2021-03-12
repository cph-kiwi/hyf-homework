import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

export function EditModal({
  item,
  onSubmitEditedItem,
  onCloseEdit,
  getDateString,
}) {
  const [editedItem, setEditedItem] = useState(item);
  const [errorMessage, setErrorMessage] = useState();

  const onChangeEditDescription = (event) => {
    setEditedItem({ ...editedItem, description: event.target.value });
  };

  const onChangeEditDeadline = (event) => {
    setEditedItem({ ...editedItem, deadline: event.target.value });
  };

  const submitItem = (event) => {
    event.preventDefault();
    if (editedItem.description === "" || editedItem.deadline === "") {
      setErrorMessage("Description and deadline are required feilds");
    } else if (editedItem.deadline < getDateString()) {
      setErrorMessage("Deadline must be in the future");
    } else {
      setErrorMessage();
      onSubmitEditedItem(item.id, editedItem);
    }
  };

  return (
    <div className="modal" onClick={onCloseEdit}>
      <div className="overlay" onClick={(event) => event.stopPropagation()}>
        <Border>
          <h2 className="medium-title">Edit item</h2>
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
            <p>{errorMessage}</p>
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
