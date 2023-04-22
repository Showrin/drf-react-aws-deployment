import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Section = ({ children, className }) => {
  return (
    <section className={classNames("section", className)}>{children}</section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
};

export default Section;
