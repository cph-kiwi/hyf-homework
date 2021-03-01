import React, { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(1);
  const [previousDirection, setPreviousDirection] = useState();
  const [speed, setSpeed] = useState(1000);
  const [textValue, setTextValue] = useState();
  // const [isActive, SetIsActive] = useState(true);

  const buttonText = () => {
    if (direction === 1) {
      return "Decrement";
    } else if (direction === -1) {
      return "Increment";
    } else if (direction === 0 && previousDirection === 1) {
      return "Decrement";
    } else if (direction === 0 && previousDirection === -1) {
      return "Increment";
    } else {
      return "Error";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting text value now: ${textValue}`);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + direction);
    }, speed);
    return () => {
      clearTimeout(timerId);
    };
  }, [count, direction, speed, textValue]);

  // const pause = () => {
  //   setIsActive(false)
  // }

  // const start = () => {
  //   setIsActive(true)
  // }

  // const handleIsActive = () => {
  // if (isActive) {
  // pause()
  // } else {
  //   start()
  // }
  // }

  return (
    <div>
      <div>
        <span>{count}</span>
      </div>

      <div>
        <button
          onClick={() => {
            if (direction === 0) {
              setPreviousDirection(previousDirection * -1);
            } else {
              setDirection(direction * -1);
            }
          }}
        >
          {buttonText()}
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setCount(0);
            setDirection(1);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setPreviousDirection(direction);
            if (direction !== 0) {
              setDirection(0);
            } else {
              setDirection(previousDirection);
            }
          }}
        >
          {direction === 0 ? "Start" : "Pause"}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Input text:
          <input
            type="text"
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{textValue}</p>

      <label>
        Speed:
        <input
          type="number"
          value={speed}
          onChange={(event) => {
            if (Number(event.target.value) < 0) {
              setPreviousDirection(direction);
              setDirection(0);
            } else {
              setSpeed(Number(event.target.value));
            }
          }}
        />
      </label>
    </div>
  );
}

export default WatchCount;
