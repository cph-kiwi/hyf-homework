import React, { useState, useEffect, useCallback } from "react";
import Border from "./Border";
import Heading from "./Heading";
import { SubmitShiftModal } from "./SubmitShift";
import ShiftDetails from "./ShiftDetails";

const API_URL =
  "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw";

function ShiftOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [shifts, setShifts] = useState([]);

  const startingShifts = useCallback(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        setShifts((prev) => {
          return prev.concat(result);
        });
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    startingShifts();
  }, [startingShifts]);

  const onSubmitShift = (shift) => {
    setShifts((prev) => {
      return prev.concat(shift);
    });
  };

  return (
    <Border>
      <Heading title="Shift Overview" />
      <SubmitShiftModal onChange={onSubmitShift} />
      <br />
      {isLoading && <div>Loading...</div>}
      <ul>
        {shifts.map((shift) => {
          return (
            <div>
              <li>
                <ShiftDetails
                  key={shift.name}
                  name={shift.name}
                  start={shift.start}
                  end={shift.end}
                />
              </li>
              <br />
            </div>
          );
        })}
      </ul>
    </Border>
  );
}

export default ShiftOverview;
