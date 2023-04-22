import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      className={classNames("button", {
        [`button--${type}`]: type,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {},
};

export default Button;
