import React, { useEffect, useState } from "react";
import Section from "../Section";
import Button from "../Button";
import { apiClient } from "../../config/apiClient";

const FeaturedQuoteSection = () => {
  const [quote, setQuote] = useState("");

  const fetchRandomQuote = () => {
    apiClient
      .get("/quotes/random/")
      .then((response) => setQuote(response.data.quote));
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Section className="featured-quote-section">
      <h1 className="featured-quote-section__title">
        Enjoy your cookie with a funny Quote
      </h1>
      <div className="featured-quote-section__quote">“{quote}”</div>
      <Button type="secondary" onClick={fetchRandomQuote}>
        Get another Quote
      </Button>
    </Section>
  );
};

export default FeaturedQuoteSection;
