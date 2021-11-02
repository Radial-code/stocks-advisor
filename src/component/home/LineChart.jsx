import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

function LineChart({ chatValue }) {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();

  const data = [];
  chatValue &&
    chatValue.values &&
    chatValue.values.map((value) => {
      if (value.profitOrLoss !== null) {
        data.push({ Year: value.year, Profit: value.profitOrLoss });
      }
    });

  const CustomTooltip = ({ active, payload }) => {
    for (const bar of payload)
      return (
        <div className="bg-white p-3">
          <p className="text-gray-700">
            {layoutClickChanger
              ? `${bar && bar.payload && bar.payload.Year} : ${"Year"}`
              : `${"Year"} : ${bar && bar.payload && bar.payload.Year}`}
            {bar && bar.payload && bar.payload.data && bar.payload.data.Profit}
          </p>
          {bar && bar.name} To: {bar && bar.value.toFixed(2)}%
        </div>
      );

    return null;
  };

  return (
    <div className="container px-sm-4 px-1  mt-2">
      <p className="chart-text-2 ff-popins mb-1">
        {chatValue.title} {getValueOf("Portfolio")}
      </p>
      <div
        className={`${
          chatValue.title === "Long Term"
            ? "green-chart"
            : chatValue.title === "Trading"
            ? "blue-chart"
            : "pich-chart"
        }`}
      >
        <ResponsiveContainer width="100%" height={213}>
          <AreaChart
            data={data}
            legend={false}
            margin={{
              top: 10,
              right: 20,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#219653" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="0" />

            <XAxis dataKey="Year" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="Profit"
              dx={layoutClickChanger ? -30 : -10}
              axisLine={true}
              tickLine={true}
              tickFormatter={(number) => `${number}%`}
            />
            <Tooltip
              content={<CustomTooltip />}
              labelFormatter={(value) => `${value}`}
            />
            <Area
              dataKey="Profit"
              stroke={`${
                chatValue.title === "Long Term"
                  ? "#5CBD4C"
                  : chatValue.title === "Trading"
                  ? "#4870B3"
                  : "#BD4C67"
              }`}
              strokeWidth="2"
              fill={`${
                chatValue.title === "Long Term"
                  ? "#5CBD4C"
                  : chatValue.title === "Trading"
                  ? "#4870B3"
                  : "#BD4C67"
              }`}
            />
            <YAxis axisLine={true} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChart;
