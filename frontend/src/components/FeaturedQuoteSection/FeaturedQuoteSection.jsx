import React from "react";
import Section from "../Section";
import Button from "../Button";

const FeaturedQuoteSection = () => {
  return (
    <Section className="featured-quote-section">
      <h1 className="featured-quote-section__title">
        Enjoy your cookie with a funny Quote
      </h1>
      <div className="featured-quote-section__quote">
        “A son asked his father (a programmer) why the sun rises in the east,
        and sets in the west. His response? It works, don't touch!”
      </div>
      <Button type="secondary">Get another Quote</Button>
    </Section>
  );
};

export default FeaturedQuoteSection;
