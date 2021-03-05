import React from "react";
import PropTypes from "prop-types";

function Heading(props) {
  const { title } = props;

  return <h1 className="Title">{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};

export default Heading;
