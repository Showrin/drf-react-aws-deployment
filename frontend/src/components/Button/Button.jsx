import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ className, children, type, onClick, href, target }) => {
  const btnClasses = classNames(
    "button",
    {
      [`button--${type}`]: type,
    },
    className
  );

  return href ? (
    <a className={btnClasses} href={href} target={target}>
      {children}
    </a>
  ) : (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  href: null,
  target: "_self",
  type: "primary",
  onClick: () => {},
};

export default Button;
