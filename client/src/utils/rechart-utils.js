import React from "react";

const RADIAN = Math.PI / 180;

/*----------------------------------
  Bar Chart have to look like below format: 
  const data = [
                {
                  name: "iPhone7",
                  stock: 12,
                  sold: 3
                }, ...
              ]
-----------------------------------*/
const convertProductToBarChartData = products => {
  let data = [];
  if (products) {
    data = products.map(item => ({
      name: item.name,
      stock: item.in_stock,
      sold: item.sold
    }));
  }
  return data;
};

/*----------------------------------
  Revert product bar chart data through
  category fetching
-----------------------------------*/
const getProductFromCategory = categories => {
  let data = [];
  if (categories) {
    data = categories.map(item => item.products_stats.products);
  }
  return data.flat();
};

const convertCategoryToProductBarChartData = categories => {
  let products = [];
  if (categories) {
    products = getProductFromCategory(categories);
  }
  return convertProductToBarChartData(products);
};

/*--------------------------------------------------------
   PIE Chart have to look like below format: 
    const data = [
                    { name: "Group A", value: 400 },
                    { name: "Group B", value: 300 },...
                ]
--------------------------------------------------------*/
const convertCategoryToPieChartData = categories => {
  let data = [];
  if (categories) {
    data = categories.map(item => ({
      name: item.name,
      value: item.products_stats.count
    }));
  }
  return data;
};

/*--------------------------------------------------------
   Usage: Customize Pie Chart Label
--------------------------------------------------------*/
const renderCustomizedPieChartLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      key={index}
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export {
  convertProductToBarChartData,
  convertCategoryToPieChartData,
  renderCustomizedPieChartLabel,
  convertCategoryToProductBarChartData
};
