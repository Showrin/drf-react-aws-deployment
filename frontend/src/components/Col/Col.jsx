import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Col = ({ children, xs, sm, md, lg, xl }) => {
  return (
    <div
      className={classNames("col", {
        "xs-1": xs === 1,
        "xs-2": xs === 2,
        "xs-3": xs === 3,
        "sm-1": sm === 1,
        "sm-2": sm === 2,
        "sm-3": sm === 3,
        "md-1": md === 1,
        "md-2": md === 2,
        "md-3": md === 3,
        "lg-1": lg === 1,
        "lg-2": lg === 2,
        "lg-3": lg === 3,
        "xl-1": xl === 1,
        "xl-2": xl === 2,
        "xl-3": xl === 3,
        "col-1": xl || lg || md || sm || xs === 1,
        "col-2": xl || lg || md || sm || xs === 2,
        "col-3": xl || lg || md || sm || xs === 3,
      })}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

Col.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};

export default Col;
