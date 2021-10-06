import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Line,
  Tooltip,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { subDays } from "date-fns";
import DropDown from "../../assets/img/btnarrow.png";
function NetflixChart() {
  const data = [
    {
      name: "JAN",
      uv: 4000,
      pv: 1982,
      amt: 2400,
    },
    {
      name: "FEB",
      uv: 3000,
      pv: 1398,
      amt: 4739,
    },
    {
      name: "MAR",
      uv: 2000,
      pv: 9800,
      amt: 9056,
    },
    {
      name: "APR",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      uv: 1890,
      pv: 4678,
      amt: 2181,
    },
    {
      name: "JUN",
      uv: 2390,
      pv: 3800,
      amt: 2873,
    },
    {
      name: "JUL",
      uv: 2000,
      pv: 9800,
      amt: 9056,
    },
    {
      name: "AUG",
      uv: 2390,
      pv: 3800,
      amt: 2873,
    },
    {
      name: "SEP",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "OCT",
      uv: 4000,
      pv: 1982,
      amt: 2400,
    },
    {
      name: "NOV",
      uv: 5000,
      pv: 1982,
      amt: 2400,
    },
    {
      name: "DEC",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="container">
      <div className="netflix-chart mt-5">
        <div className="d-sm-flex  d-none align-items-sm-center justify-content-sm-between ms-xl-5 ms-sm-4 ps-sm-4 ps-xl-5 pt-2">
          <div className="mx-sm-3">
            <button className="chart-btn ff-popins mx-1 border-0">
              1 Year
            </button>
            <button className="chart-btn ff-popins mx-1 border-0">
              1 Month
            </button>
            <button className="chart-btn ff-popins mx-1 border-0">
              1 Week
            </button>
            <button className="chart-btn ff-popins mx-1 border-0">1 Day</button>

            <button className="chart-btn ff-popins mx-1 border-0">1 Hr</button>

            <button className="chart-btn ff-popins mx-1 border-0">
              {" "}
              1 Min
            </button>
          </div>
          <p className="chart-text ff-popins text-white mb-0">.Netflix Inc</p>
        </div>
        <div className="d-sm-none d-flex align-items-center justify-content-between ms-xl-5 ms-4 ps-4 ps-xl-5 pt-2">
          <div className="mx-3">
            <button className="chart-btn ff-popins mx-1 border-0">
              <span className="px-1">
                <img src={DropDown} alt="DropDown" />
              </span>
              1 Hr
            </button>
          </div>
          <p className="chart-text ff-popins text-white mb-0">.Netflix Inc</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 40,
              left: 0,
              bottom: 10,
            }}
          >
            <Line type="monotone" dataKey="uv" />

            <CartesianGrid stroke="0" />
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4870b3" stopOpacity={0.9}></stop>
                <stop
                  offset="75%"
                  stopColor="#4870b3"
                  stopOpacity={0.04}
                ></stop>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={true}
              tick={{ fill: "#fff" }}
              align="center"
              dy={7}
              tickLine={false}
            />
            <YAxis
              dataKey="uv"
              axisLine={true}
              tick={{ fill: "#fff" }}
              tickLine={false}
              width={90}
              dx={-63}
              tickFormatter={(number) => `$${number}`}
            />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#fff"
              color="#ffff"
              strokeWidth="2"
              fill="url(#color)"
            />
            <YAxis axisLine={true} style={{ color: "white" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default NetflixChart;
