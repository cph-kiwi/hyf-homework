import React, { useState } from "react";
import Border from "./Border";
import Heading from "./Heading";

export function SubmitShiftModal({ onSubmitShift }) {
  const [shift, setShift] = useState({
    name: "",
    start: new Date().toString(),
    end: new Date().toString(),
  });

  const onChangeName = (event) => {
    setShift({ ...shift, name: event.target.value });
  };

  const onChangeStart = (event) => {
    console.log("start", event.target.value);
    setShift({ ...shift, start: new Date(event.target.value) });
  };

  const onChangeEnd = (event) => {
    console.log("end", event.target.value);
    setShift({ ...shift, end: new Date(event.target.value) });
  };

  const submitShift = (event) => {
    event.preventDefault();
    onSubmitShift(shift);
  };

  return (
    <Border>
      <Heading title="Submit Shift" />
      <form className="form" onSubmit={submitShift}>
        <label>Name:</label>
        <input type="text" value={shift.name} onChange={onChangeName} />
        <br />
        <label for="start">Start:</label>
        <input
          type="datetime-local"
          id="start"
          name="start"
          value={shift.start.toString()}
          min="2020-01-07T00:00"
          max={Date.now().toString()}
          onChange={onChangeStart}
        />
        <br />
        <label for="end">End:</label>
        <input
          type="datetime-local"
          id="end"
          name="end"
          value={shift.end.toString()}
          min="2020-01-07T00:00"
          max={Date.now().toString()}
          onChange={onChangeEnd}
        />
        <br />

        <button type="submit">Save shift</button>
      </form>
    </Border>
  );
}
