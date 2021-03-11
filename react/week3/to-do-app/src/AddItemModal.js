import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

export function AddItemModal({
  length,
  onSubmitItem,
  showAddItem,
  onCloseAddItem,
}) {
  const [newItem, setNewItem] = useState({
    id: 0,
    description: "",
    deadline: "",
    checked: false,
  });

  const onChangeDescription = (event) => {
    setNewItem({
      ...newItem,
      id: length + 1,
      description: event.target.value,
    });
  };

  const onChangeDeadline = (event) => {
    setNewItem({ ...newItem, deadline: event.target.value });
  };

  const submitItem = (event) => {
    event.preventDefault();
    onSubmitItem(newItem);
    setNewItem((prev) => {
      return { ...prev, description: "", deadline: "" };
    });
  };

  if (!showAddItem) {
    return null;
  }

  return (
    <div className="modal" onClick={onCloseAddItem}>
      <div className="overlay" onClick={(event) => event.stopPropagation()}>
        <Border>
          <form className="form" onSubmit={submitItem}>
            <label htmlFor="description">Item description:</label>
            <input
              id="description"
              type="text"
              value={newItem.description}
              onChange={onChangeDescription}
              autoFocus={true}
            />
            <br />
            <label htmlFor="deadline">Deadline:</label>
            <input
              id="deadline"
              type="date"
              name="deadline"
              value={newItem.deadline}
              onChange={onChangeDeadline}
            />
            <br />
            <button type="submit">Save item</button>
          </form>
        </Border>
      </div>
    </div>
  );
}

AddItemModal.propTypes = {
  listOfToDos: PropTypes.array,
  onSubmitItem: PropTypes.func,
  showAddItem: PropTypes.bool,
  onCloseAddItem: PropTypes.func,
};
