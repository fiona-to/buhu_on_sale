import React, { Component } from "react";
/*----------------------------------
  GraphQL, MobX
-----------------------------------*/
import { inject, observer } from "mobx-react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./check-out.styles";
/*--------------------------------------------------------
 COMPONENT: CheckOut 
--------------------------------------------------------*/
const CheckOut = inject("store")(
  observer(
    class CheckOut extends Component {
      render() {
        return (
          <Styled>
            <div>Check out page goes here</div>
          </Styled>
        );
      }
    }
  )
);

export default CheckOut;
