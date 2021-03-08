import React, { useState } from "react";
import Border from "./Border";
import Heading from "./Heading";

export function SubmitShiftModal({ onSubmitShift, show, onClose }) {
  const [shift, setShift] = useState({
    name: "",
    start: "",
    end: "",
  });

  const onChangeName = (event) => {
    setShift({ ...shift, name: event.target.value });
  };

  const onChangeStart = (event) => {
    setShift({ ...shift, start: event.target.value });
  };

  const onChangeEnd = (event) => {
    setShift({ ...shift, end: event.target.value });
  };

  const submitShift = (event) => {
    event.preventDefault();
    onSubmitShift(shift);
    setShift((prev) => {
      return { ...prev, name: "", start: "", end: "" };
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="overlay" onClick={(event) => event.stopPropagation()}>
        <Border>
          <Heading title="Submit Shift" />
          <form className="form" onSubmit={submitShift}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={shift.name}
              onChange={onChangeName}
              autoFocus={true}
            />
            <br />
            <label htmlFor="start">Start:</label>
            <input
              id="start"
              type="datetime-local"
              name="start"
              value={shift.start}
              onChange={onChangeStart}
            />
            <br />
            <label htmlFor="end">End:</label>
            <input
              id="end"
              type="datetime-local"
              name="end"
              value={shift.end}
              onChange={onChangeEnd}
            />
            <br />

            <button type="submit">Save shift</button>
          </form>
        </Border>
      </div>
    </div>
  );
}
