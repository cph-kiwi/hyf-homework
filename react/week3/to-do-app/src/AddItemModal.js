import React, { useState } from "react";
import Border from "./Border";

export function AddItemModal({ onSubmitItem, show, onClose }) {
  const [newItem, setNewItem] = useState({
    description: "",
    deadline: "",
  });

  const onChangeDescription = (event) => {
    setNewItem({ ...newItem, description: event.target.value });
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

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
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
              type="datetime-local"
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
