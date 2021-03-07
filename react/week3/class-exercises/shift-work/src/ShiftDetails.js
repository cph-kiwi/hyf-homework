import React from "react";
import Heading from "./Heading";
import Border from "./Border";
import PropTypes from "prop-types";

const hourlyRate = 200;

function ShiftDetails({ name, start, end }) {
  const shiftLength = new Date(end).getHours() - new Date(start).getHours();

  return (
    <Border>
      <Heading title={name} />
      <br />
      <p>Start: {start}</p>
      <p>End: {end}</p>
      <p>Total hours: {shiftLength}</p>
      <p>Price of shift: {shiftLength * hourlyRate}kr</p>
      <br />
    </Border>
  );
}

ShiftDetails.propTypes = {
  name: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  totalHours: PropTypes.number,
  priceOfShift: PropTypes.number,
};

export default ShiftDetails;
