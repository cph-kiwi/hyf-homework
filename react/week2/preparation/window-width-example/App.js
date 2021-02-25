import React, { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // This is the same as onMount - windowWidth will change dynamically as the window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // to clean up (we don't want loads of unneccessary event listeners active, so we need to remove them when we're don't with them)
    // happens on unMount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}
