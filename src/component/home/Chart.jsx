import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPortFolioChatListDataAction } from "../../redux/action/portfolio";
import LineChart from "../chart/LineChart";
import LineChart2 from "../chart/LineChart2";
import LineChart3 from "../chart/LineChart3";

const Chart = () => {
  const portfoliosChatList = useSelector(
    (state) => state.list.portfoliosChatList
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPortFolioChatListDataAction(setLoading));
  }, []);

  return (
    <>
      <div className="pr-15 pl-15 ">
        <div className="border-b-1">
          <p className="profile-heading fs-lg-22 fs-sm-15 pt-2 mb-2">
            Our Portfolio's Performance
          </p>
        </div>
      </div>
      <div>
        <LineChart2 />
        <LineChart />
        <LineChart3 />
      </div>
    </>
  );
};

export default Chart;
