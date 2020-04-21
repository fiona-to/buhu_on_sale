import React from "react";
import MainButton from "../main-button/main-button.component";
import SecondaryButton from "../secondary-button/secondary-button.component";
/*----------------------------------
  Styles
-----------------------------------*/
import { Alert } from "react-bootstrap";
import { Styled } from "./delete-alert.styles";
/*--------------------------------------------------------
 COMPONENT: BHDeleteAlert
--------------------------------------------------------*/
const DeleteAlert = (props) => {
  const { name, cancel, confirm } = props;
  return (
    <Styled>
      <Alert show={true} variant="warning">
        <Alert.Heading>Delete "{name}"?!</Alert.Heading>
        <p className="alert-message">
          Once you deleted , you won't be able to restore. Click 'Cancel' to
          discard, or 'Yes' to agree.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <MainButton onClick={(e) => cancel()}>Cancel</MainButton>
          <SecondaryButton onClick={(e) => confirm()} disabled={true}>
            Yes
          </SecondaryButton>
        </div>
      </Alert>
    </Styled>
  );
};

export default DeleteAlert;
