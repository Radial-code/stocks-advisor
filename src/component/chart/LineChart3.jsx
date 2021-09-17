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
function LineChart3() {
  const data = [
    {
      name: "2017",
      uv: 0,
    },
    {
      name: "2018",
      uv: 7,
    },
    {
      name: "2019",
      uv: 2,
    },
    {
      name: "2020",
      uv: 3,
    },
    {
      name: "2021",
      uv: 4,
    },
  ];
  return (
    <div className="container mt-4">
      <p className="chart-text ff-popins mb-4">E & P 500</p>
      <div className="pich-chart">
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
                <stop
                  offset="50%"
                  stopColor="#219653
"
                  stopOpacity={0.4}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="0" />

            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis dataKey="uv" axisLine={false} tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#bd4c67"
              strokeWidth="2"
              fill="#bd4c67"
            />
            <YAxis axisLine={true} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChart3;
