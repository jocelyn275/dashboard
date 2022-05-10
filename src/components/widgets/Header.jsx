import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import btnIcon from "../assets/teams_icon.png";
import { ImBullhorn } from "react-icons/im";

const HeaderContent = styled.div`
  background-color: #ea4c6e;
  margin: 0;
  padding: 5px 0;
`;

const Button = styled.button`
  background-color: #333e47;
  color: #fff;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  @media (max-width: 420px) {
    // width: 100%;
  }
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

function Header() {
  return (
    <>
      <HeaderContent>
        <Container>
          <Row>
            <Align>
              <Col sx={12} md={3}>
                <h4>
                  ANNOUNCEMENT
                  <ImBullhorn style={{ marginLeft: "10px" }} />
                </h4>
              </Col>
              <Col sx={12} md={6}>
                <h5>
                  COVID 19 - The Government guidelines have changed so we will
                  be returning to working from the office on Monday 24th Jan.
                </h5>
              </Col>
              <Col sx={12} md={3}>
                <Button>
                  <img src={btnIcon} alt="" style={{ height: "20px" }} />
                  Channel
                </Button>
              </Col>
            </Align>
          </Row>
        </Container>
      </HeaderContent>
    </>
  );
}

export default Header;
