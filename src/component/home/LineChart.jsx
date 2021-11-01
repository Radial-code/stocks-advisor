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
  const { layoutClickChanger } = useLayoutChangerProvider();

  const data = [];
  chatValue &&
    chatValue.values &&
    chatValue.values.map((value) => {
      if (value.profitOrLoss !== null) {
        data.push({ Year: value.year, Profit: `${value.profitOrLoss}%` });
      }
    });

  return (
    <div className="container px-sm-4 px-1  mt-2">
      <p className="chart-text-2 ff-popins mb-1">
        {chatValue.title} Portfolio{" "}
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
              axisLine={false}
              tickLine={false}
              tickFormatter={(number) => `${number}%`}
            />
            <Tooltip />
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
