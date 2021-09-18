import React from "react";
import LineChart from "../chart/LineChart";
import LineChart2 from "../chart/LineChart2";
import LineChart3 from "../chart/LineChart3";
import Plans from "../plans/Plans";

const Chart = () => {
  return (
    <>
      <div className="border-b-1">
        <p className="profile-heading">Our Portfolio's Performance</p>
      </div>
      <div className="mt-5">
        <LineChart2 />
        <LineChart />
        <LineChart3 />
      </div>
      <div className="mt-5">
        <Plans />
      </div>
    </>
  );
};

export default Chart;
