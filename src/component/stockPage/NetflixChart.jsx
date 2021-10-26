import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
import DropDown from "../../assets/img/btnarrow.png";

const NetflixChart = ({ setType, type }) => {
  const stockChatList = useSelector((state) => state.list.stockChatList);
  const [chatList, setChatList] = useState([]);
  const getMonth = (date, index) => {
    let m = date.split("-");
    return m[1] + "/" + m[0];
  };

  const getKey = (type) => {
    if (type === "1m") {
      return "minuteData";
    } else if (type === "1h") {
      return "hourData";
    } else if (type === "1d") {
      return "dayData";
    } else if (type === "1w") {
      return "weekData";
    } else {
      return "yearData";
    }
  };

  useEffect(() => {
    const data = [];
    if (
      stockChatList !== {} ||
      stockChatList !== null ||
      stockChatList !== undefined
    ) {
      stockChatList &&
        stockChatList[getKey(type)] &&
        stockChatList[getKey(type)].values.map((value) => {
          data.push({ name: getMonth(value.datetime), uv: value.high });
          setChatList(data);
        });
    }
  }, [type, stockChatList, getKey(type)]);

  chatList.reverse();
  return (
    <div className="container">
      <div className="netflix-chart mt-5">
        <div className="d-sm-flex  d-none align-items-sm-center justify-content-sm-between ms-xl-5 ms-sm-4 ps-sm-4 ps-xl-5 pt-2">
          <div className="mx-sm-3">
            <button
              onClick={() => setType("1y")}
              className="chart-btn ff-popins mx-1 border-0"
            >
              1 Month
            </button>
            <button
              onClick={() => setType("1w")}
              className="chart-btn ff-popins mx-1 border-0"
            >
              1 Week
            </button>
            <button
              className="chart-btn ff-popins mx-1 border-0"
              onClick={() => setType("1d")}
            >
              1 Day
            </button>

            <button
              className="chart-btn ff-popins mx-1 border-0"
              onClick={() => setType("1h")}
            >
              1 Hr
            </button>

            <button
              onClick={() => setType("1m")}
              className="chart-btn ff-popins mx-1 border-0"
            >
              1 Min
            </button>
          </div>
          <p className="chart-text ff-popins text-white mb-0">
            .{" "}
            {stockChatList &&
              stockChatList[getKey(type)] &&
              stockChatList[getKey(type)].meta &&
              stockChatList[getKey(type)].meta.symbol}
          </p>
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
          <p className="chart-text ff-popins text-white mb-0">
            .
            {stockChatList &&
              stockChatList[getKey(type)] &&
              stockChatList[getKey(type)].meta &&
              stockChatList[getKey(type)].meta.symbol}
          </p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={chatList}
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
};
export default NetflixChart;
