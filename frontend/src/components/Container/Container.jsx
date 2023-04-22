import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = ({ children, className }) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
