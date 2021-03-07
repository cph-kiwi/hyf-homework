import React from "react";
import Heading from "./Heading";
import Border from "./Border";
import PropTypes from "prop-types";

const hourlyRate = 200;

function Totals({ shifts }) {
  // change math.sum to a reduce function
  const totalHours = Math.sum(
    ...shifts.map((shift) => {
      return new Date(shift.end).getHours() - new Date(shift.start).getHours();
    })
  );

  return (
    <Border>
      <Heading title="Totals" />
      <br />
      <p>Total hours: {totalHours}</p>
      <p>Price of shift: {totalHours * hourlyRate}kr</p>
      <br />
    </Border>
  );
}

Totals.propTypes = {
  shifts: PropTypes.array,
};

export default Totals;
