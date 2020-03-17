import React from "react";

import { Button } from "react-bootstrap";
import { Styled } from "./secondary-button.styles";

export default class SecondaryButton extends React.Component {
  render() {
    return (
      <Styled>
        <Button {...this.props} />
      </Styled>
    );
  }
}
