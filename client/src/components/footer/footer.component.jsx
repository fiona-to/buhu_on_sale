import React from "react";
import { Row, Col } from "react-bootstrap";
import { Styled } from "./footer.styles";

export const Footer = () => {
  return (
    <Styled>
      <Row>
        <Col>
          <p>Copyright &copy; BuHu Website 2020</p>
        </Col>
      </Row>
    </Styled>
  );
};
