import React from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./logout.styles";

/*--------------------------------------------------------
 COMPONENT: Logout 
--------------------------------------------------------*/
const Logout = props => {
  const onLogoutConfirmed = e => {
    props.history.push({
      pathname: "/",
      state: {
        isHome: true
      }
    });
  };

  /*----------------------------------
    RENDERING
  -----------------------------------*/
  return (
    <Styled>
      <div>Log out</div>
      <button onClick={onLogoutConfirmed}>Confirm</button>
    </Styled>
  );
};

export default withRouter(Logout);
