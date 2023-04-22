import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, type }) => {
  return (
    <button
      className={classNames("button", {
        [`button--${type}`]: type,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
