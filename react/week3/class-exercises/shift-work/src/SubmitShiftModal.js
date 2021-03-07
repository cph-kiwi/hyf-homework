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
    // console.log("start", event.target.value);
    setShift({ ...shift, start: event.target.value });
  };

  const onChangeEnd = (event) => {
    // console.log("end", event.target.value);
    setShift({ ...shift, end: event.target.value });
  };

  const submitShift = (event) => {
    console.log(shift);
    event.preventDefault();
    onSubmitShift(shift);
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
            <label>Name:</label>
            <input
              type="text"
              value={shift.name}
              onChange={onChangeName}
              autoFocus={true}
            />
            <br />
            <label for="start">Start:</label>
            <input
              type="datetime-local"
              id="start"
              name="start"
              value={shift.start}
              onChange={onChangeStart}
            />
            <br />
            <label for="end">End:</label>
            <input
              type="datetime-local"
              id="end"
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
