import React, { useState, useEffect, useCallback } from "react";
import Border from "./Border";
import Heading from "./Heading";
import { SubmitShiftModal } from "./SubmitShiftModal";
import ShiftDetails from "./ShiftDetails";
import Totals from "./Totals";

const API_URL =
  "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw";

function ShiftOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [shifts, setShifts] = useState([]);
  const [show, setShow] = useState(false);

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

  return (
    <Border>
      <Heading title="Shift Overview" />
      <button onClick={() => setShow(true)}>Add shift</button>
      <SubmitShiftModal
        show={show}
        onClose={() => setShow(false)}
        onSubmitShift={(shift) => {
          setShow(false);
          setShifts((prev) => {
            console.log(prev.concat(shift));
            return prev.concat(shift);
          });
        }}
      />
      <br />
      {isLoading && <div>Loading...</div>}
      <ul>
        {shifts.map((shift) => {
          return (
            <div key={shift.name}>
              <li>
                <ShiftDetails
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
      <Totals shifts={shifts} />
    </Border>
  );
}

export default ShiftOverview;
