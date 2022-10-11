import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  const totalQuestion = data.reduce(
    (prevData, newObj) => prevData + newObj.total,
    0
  );

  const pieData = data.map((item) => {
    const name = item.name;
    const total = item.total;
    const totalPercent = parseFloat(((total * 100) / totalQuestion).toFixed(2));
    const newObj = {
      name: name,
      value: totalPercent,
    };
    return newObj;
  });

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#000",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="w-11/12 md:w-10/12 mx-auto text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-10">
        Pie Chart of Topic Questions
      </h2>
      <div className="flex justify-center">
        <PieChart width={790} height={400}>
          <Pie
            data={pieData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
