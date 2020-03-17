import React from "react";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./bar-chart-tooltip.styles";
/*--------------------------------------------------------
 COMPONENT: CategoryAdmin
--------------------------------------------------------*/
const BarChartTooltip = props => {
  const { active, payload, label } = props;
  if (active) {
    const reversePayload = payload.reverse();
    return (
      <Styled>
        <div className="tooltip-container">
          <p className="tooltip-title">{label}</p>
          <div className="tooltip-list">
            {reversePayload.map(item => (
              <p
                className="tooltip-item"
                key={item.dataKey}
                style={{ color: `${item.fill}` }}
              >{`${item.dataKey}: ${item.value}`}</p>
            ))}
          </div>
        </div>
      </Styled>
    );
  }

  return null;
};

export default BarChartTooltip;
