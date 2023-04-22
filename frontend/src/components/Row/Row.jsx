import React from "react";
import PropTypes from "prop-types";

const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
