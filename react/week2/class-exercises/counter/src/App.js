import React, { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      {/* <button onClick={decrementTimer}>Decrement</button> */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default WatchCount;
