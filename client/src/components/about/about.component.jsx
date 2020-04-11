import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Container, Row, Col } from "react-bootstrap";
import { Styled } from "./about.styles";
/*--------------------------------------------------------
 COMPONENT: About
--------------------------------------------------------*/
const About = (props) => {
  return (
    <Styled>
      <Container>
        <h3>About page goes here...</h3>
        <Row>
          <Col>
            <div></div>Website has built with: Font-end: react
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </Styled>
  );
};

export default About;
