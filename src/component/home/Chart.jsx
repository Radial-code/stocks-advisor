import React from "react";
import LineChart from "../chart/LineChart";
import LineChart2 from "../chart/LineChart2";
import LineChart3 from "../chart/LineChart3";

const Chart = () => {
  return (
    <>
      <div className="pr-15 pl-15 ">
        <div className="border-b-1">
          <p className="profile-heading fs-lg-22 fs-sm-15 pt-2 mb-2">
            Our Portfolio's Performance
          </p>
        </div>
      </div>
      <div className="my-5">
        <LineChart2 />
        <LineChart />

        <LineChart3 />
      </div>
    </>
  );
};

export default Chart;
