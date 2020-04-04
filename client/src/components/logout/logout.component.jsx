import React from "react";
import { withRouter } from "react-router-dom";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./logout.styles";

/*--------------------------------------------------------
 COMPONENT: Logout 
--------------------------------------------------------*/
const Logout = inject("store")(
  observer(props => {
    const { uiStore } = props.store;
    const onLogoutConfirmed = e => {
      uiStore.visitHomePage();
      props.history.push({
        pathname: "/"
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
  })
);

export default withRouter(Logout);
