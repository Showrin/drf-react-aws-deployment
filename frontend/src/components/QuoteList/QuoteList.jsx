import React from "react";
import Section from "../Section";
import Row from "../Row";
import Col from "../Col";
import QuoteCard from "../QuoteCard";

const QuoteList = () => {
  return (
    <Section>
      <Row>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
        <Col xl={3} lg={2} md={1}>
          <QuoteCard content="A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!" />
        </Col>
      </Row>
    </Section>
  );
};

export default QuoteList;
