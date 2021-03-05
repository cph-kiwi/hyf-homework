import React from "react";
import Heading from "./Heading";
import Border from "./Border";
import PropTypes from "prop-types";

function ShiftDetails({ name, start, end, totalHours, priceOfShift }) {
  return (
    <Border>
      <Heading title={name} />
      <br />
      <p>{start}</p>
      <p>{end}</p>
      <p>{totalHours}</p>
      <p>{priceOfShift}</p>
      <br />
    </Border>
  );
}

ShiftDetails.propTypes = {
  name: PropTypes.string,
  start: PropTypes.instanceOf(Date), // should this be string?
  end: PropTypes.instanceOf(Date), // should this be string?
  totalHours: PropTypes.number,
  priceOfShift: PropTypes.number,
};

export default ShiftDetails;
