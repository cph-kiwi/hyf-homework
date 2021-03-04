import React from "react";

const ChildrenExample = (props) => {
  const { children } = props;
  return (
    <div className="child-example">
      <h2>These are my children</h2>
      {children}
    </div>
  );
};

export default ChildrenExample;
