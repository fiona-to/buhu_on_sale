import React from "react";
import { renderCustomizedPieChartLabel } from "../../utils/rechart-utils";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./category-stats.styles";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
/*----------------------------------
  Rechart data
-----------------------------------*/
const COLORS = ["#0088FE", "#00C49F", "#4DD0E1", "#FFBB28", "#FF8042"];

/*--------------------------------------------------------
   COMPONENT: CategoryStats
   PIE Chart have to look like below format: 
    const data = [
                    { name: "Group A", value: 400 },
                    { name: "Group B", value: 300 },...
                ]
--------------------------------------------------------*/
const CategoryStats = props => {
  const { data } = props;
  return (
    <Styled>
      <div className="container">
        <h3>Category Statistics</h3>
        <ResponsiveContainer width="95%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cy={120}
              labelLine={false}
              label={renderCustomizedPieChartLabel}
              outerRadius="80%"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Styled>
  );
};

export default CategoryStats;
