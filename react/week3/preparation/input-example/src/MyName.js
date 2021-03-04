import React from "react";
import PropTypes from "prop-types";

const MyName = (props) => {
  const { name, age } = props;

  return (
    <div>
      My name is: {name}
      <br />
      Age: {age}
      <br />
    </div>
  );
};

MyName.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  //   test: PropTypes.string.isRequired,
  //   onClick: PropTypes.func,
  // PropTypes.array
  // PropTypes.object
};

MyName.defaultProps = {
  name: "Sarah",
  age: 100,
  //   onClick: () => {},
};

export default MyName;
