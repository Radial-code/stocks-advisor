import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Line,
  Legend,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { subDays } from "date-fns";
import DropDown from "../../assets/img/btnarrow.png";
function NetflixChart() {
  const data = [
    {
      name: "Jan",
      uv: 0,
    },
    {
      name: "Feb",
      uv: 2000,
    },
    {
      name: "Mar",
      uv: 1000,
    },
    {
      name: "Apr",
      uv: 4000,
    },
    {
      name: "May",
      uv: 1000,
    },
    {
      name: "Jun",
      uv: 600,
    },
    {
      name: "Jul",
      uv: 8000,
    },
    {
      name: "Aug",
      uv: 5000,
    },
    {
      name: "Sep",
      uv: 1000,
    },
    {
      name: "Oct",
      uv: 4500,
    },
    {
      name: "Nov",
      uv: 5000,
    },
    {
      name: "Dec",
      uv: 5500,
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
            <Line type="monotone" dataKey="uv" stroke="#ffff" />
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
