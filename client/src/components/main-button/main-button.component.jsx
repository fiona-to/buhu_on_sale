import React from "react";

import { Button } from "react-bootstrap";
import { Styled } from "./main-button.styles";

const MainButton = props => {
  return (
    <Styled>
      <Button {...props} />
    </Styled>
  );
};

export default MainButton;
