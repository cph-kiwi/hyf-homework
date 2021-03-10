import React from "react";
import Border from "./Border";

export function EditModal({ item, onSubmitEditedItem, onCloseEdit }) {
  const onChangeEditDescription = (event) => {
    return { ...item, description: event.target.value };
  };

  const onChangeEditDeadline = (event) => {
    return { ...item, deadline: event.target.value };
  };

  const submitItem = (event) => {
    event.preventDefault();
    onSubmitEditedItem(item);
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
              value={description}
              onChange={onChangeEditDescription}
              autoFocus={true}
            />
            <br />
            <label htmlFor="deadline">Deadline:</label>
            <input
              id="deadline"
              type="date"
              name="deadline"
              value={deadline}
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
