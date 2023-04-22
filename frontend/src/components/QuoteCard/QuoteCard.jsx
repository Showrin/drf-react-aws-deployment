import React from "react";
import PropTypes from "prop-types";

const QuoteCard = ({ content }) => {
  return <div className="quote-card">{content}</div>;
};

QuoteCard.propTypes = {
  content: PropTypes.string.isRequired,
};

export default QuoteCard;
