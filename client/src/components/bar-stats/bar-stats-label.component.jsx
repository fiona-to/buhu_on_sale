import React, { Component } from "react";
/*----------------------------------
  Styles
-----------------------------------*/
//import { Styled } from "./bar-stats-label.styles";

/*--------------------------------------------------------
 COMPONENT: BarCustomizedLabel
--------------------------------------------------------*/
class BarCustomizedLabel extends Component {
  /*----------------------------------
    RENDERING
  -----------------------------------*/
  render() {
    const { x, y, fill, value, width } = this.props;
    console.log(this.props);
    return (
      // <Styled>
      <text
        x={x + width / 2}
        y={Math.round(y + 16)}
        dy={-4}
        fontSize="68%"
        fill={fill}
        textAnchor="middle"
      >
        {value}
      </text>
      // </Styled>
    );
  }
}

export default BarCustomizedLabel;
