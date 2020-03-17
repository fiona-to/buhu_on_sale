import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Spinner } from "react-bootstrap";
import { Styled } from "./spinner.styles";

/*--------------------------------------------------------
 COMPONENT: AppSpinner 
--------------------------------------------------------*/
export const AppSpinner = () => {
  return (
    <Styled>
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Styled>
  );
};
