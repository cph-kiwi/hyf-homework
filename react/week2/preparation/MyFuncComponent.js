import React, { useEffect } from "react";

const MyFuncComponent = (props) => {
  // console.log(props);

  const { test } = props; // see array below to see why we add props in

  // useEffect takes two arguments - a callback and an array of dependencies

  // this will run the first time but not after an update
  useEffect(() => {
    console.log("My functional component mounted");
    return () => {
      console.log("My functional component unmounted");
    };
  }, []);

  // This will run after every update
  useEffect(() => {
    console.log("My functional component updated", test);

    // return () => {
    //   console.log("My functional component changed");
    // };
  }, [test]);

  return <div>My functional component</div>;
};

export default MyFuncComponent;
