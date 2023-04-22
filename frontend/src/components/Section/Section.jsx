import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";

const Section = ({ children, className }) => {
  return (
    <section className="section">
      <Container className={className}>{children}</Container>
    </section>
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
