import React from "react";
import Heading from "./Heading";
import Border from "./Border";
import PropTypes from "prop-types";

const hourlyRate = 200;

function Totals({ shifts, filteredShifts }) {
  const totalHours = shifts
    .map((shift) => {
      return new Date(shift.end).getHours() - new Date(shift.start).getHours();
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const filteredTotalHours = filteredShifts
    .map((shift) => {
      return new Date(shift.end).getHours() - new Date(shift.start).getHours();
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (totalHours === []) {
    return "No hours to report";
  } else {
    return (
      <Border>
        <Heading title="Totals" />
        <br />
        <p>
          Total hours:
          {filteredShifts === [] ? totalHours : filteredTotalHours}
        </p>
        <p>
          Price of shift:
          {filteredShifts === []
            ? totalHours * hourlyRate
            : filteredTotalHours * hourlyRate}
          kr
        </p>
        <br />
      </Border>
    );
  }
}

Totals.propTypes = {
  shifts: PropTypes.array,
  filteredShifts: PropTypes.array,
};

export default Totals;
