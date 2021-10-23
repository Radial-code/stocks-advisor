import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPortFolioChatListDataAction } from "../../redux/action/portfolio";
import BubblesLoader from "../common/BubblesLoader";
import LineChart from "./LineChart";

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
          <p className="profile-heading fs-lg-22 fs-sm-15 pt-2 mb-2 px-3">
            Our Portfolio's Performance
          </p>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <BubblesLoader />
        </div>
      ) : (
        <div>
          {portfoliosChatList && portfoliosChatList.length ? (
            portfoliosChatList.slice(0, 3).map((chatValue, index) => {
              return <LineChart chatValue={chatValue} index={index} />;
            })
          ) : (
            <h4 className="text-center text-5CBD4C">
              You don't have any Portfolio's Performance Chat
            </h4>
          )}
        </div>
      )}
    </>
  );
};
export default Chart;
