import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Align = styled.div`
  padding: 10px;
  display: flex;
  align-items: baseline;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const Title = () => {
  const date = new Date().toLocaleString("en-gb", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <>
      <Container>
        <Row>
          <Align>
            <Col sx={12} md={9}>
              <h1>
                Hi, Guest<span style={{ color: "#ea4c6e" }}>!</span>
              </h1>
            </Col>
            <Col sx={12} md={3}>
              <h6 style={{ textAlign: "end" }}>{date}</h6>
            </Col>
          </Align>
        </Row>
      </Container>
    </>
  );
};

export default Title;
