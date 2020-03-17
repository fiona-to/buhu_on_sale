import React from "react";
import BarChartTooltip from "../bar-chart-tooltip/bar-chart-tooltip.component";
/*----------------------------------
  Styles
-----------------------------------*/
import { Styled } from "./product-sale-stats.styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";
/*--------------------------------------------------------
 COMPONENT: ProductSaleStats
  Bar Chart have to look like below format: 
  const data = [
                  {
                    name: "iPhone7",
                    stock: 12,
                    sold: 3
                  },...
                ]
--------------------------------------------------------*/
const ProductSaleStats = props => {
  const { data } = props;
  return (
    <Styled>
      <div className="container">
        <h3>Product Sales Statistics</h3>
        <ResponsiveContainer width="95%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} />
            <YAxis />
            <Tooltip content={<BarChartTooltip />} />
            <Legend />
            <Bar dataKey="sold" stackId="product" fill="#0f4c75">
              <LabelList dataKey="sold" position="middle" />
            </Bar>
            <Bar dataKey="stock" stackId="product" fill="#82ca9d">
              <LabelList dataKey="stock" position="middle" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Styled>
  );
};

export default ProductSaleStats;
