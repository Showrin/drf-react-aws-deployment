import React, { useEffect, useState } from "react";
import Section from "../Section";
import Row from "../Row";
import Col from "../Col";
import QuoteCard from "../QuoteCard";
import { apiClient } from "../../config/apiClient";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    apiClient.get("/quotes/").then((response) => setQuotes(response.data));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Section>
      <Row>
        {quotes.map((quote) => (
          <Col xl={3} lg={2} md={1}>
            <QuoteCard content={quote.quote} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default QuoteList;
