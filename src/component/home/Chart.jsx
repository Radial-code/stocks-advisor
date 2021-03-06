import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPortFolioChatListDataAction } from "../../redux/action/portfolio";
import BubblesLoader from "../common/BubblesLoader";
import LineChart from "./LineChart";
import NoData from "../../assets/img/emptydata.jpg";

const Chart = ({ getValueOf }) => {
  const portfoliosChatList = useSelector(
    (state) => state.list.portfoliosChatList
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPortFolioChatListDataAction(setLoading));
  }, [dispatch]);

  return (
    <>
      <div className="pr-15 pl-15 ">
        <div className="border-b-1">
          <p className="profile-heading fs-lg-22 fs-sm-15 pt-2 mb-2 px-3">
            {getValueOf("Our Portfolio's Performance")}
          </p>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center ">
          <BubblesLoader />
        </div>
      ) : (
        <div className=" d-flex align-items-center flex-column">
          {portfoliosChatList && portfoliosChatList.length ? (
            portfoliosChatList.slice(0, 3).map((chatValue, index) => {
              return <LineChart chatValue={chatValue} index={index} />;
            })
          ) : (
            <div className="d-flex flex-column align-items-center">
              <img className="nodata-img" src={NoData} alt="NoData" />
              <h4 className="text-center text-5CBD4C">
                {getValueOf("You don't have any Portfolio's Performance Chat")}
              </h4>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Chart;
