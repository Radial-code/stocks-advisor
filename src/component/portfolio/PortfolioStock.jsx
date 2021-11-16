import React from "react";
import "./portfolios.css";
import SoldStock from "./SoldStock";
import CurrentStock from "./CurrentStock";
import BubblesLoader from "../common/BubblesLoader";
import { useDispatch, useSelector } from "react-redux";
import StockSoldSlider from "./StockSoldSlider";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

function PortfolioStock({
  loading,
  setSoldLoading,
  getValueOf,
  layoutClickChanger,
}) {
  const dispatch = useDispatch();
  const soldStockNewsList = useSelector(
    (state) => state.list.soldStockNewsList
  );
  return (
    <>
      <div className="width-table mr-lg-30 ">
        <div className="row">
          <div className="col-12 ">
            <div className="current-stock-bg p-sm-3 p-2">
              <h1 className="current-stock-text ff-popins mt-md-5 mt-2">
                {getValueOf("Current Stocks")}
              </h1>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <BubblesLoader />
                </div>
              ) : (
                <CurrentStock getValueOf={getValueOf} />
              )}
              <div className="border-b-1-16191E mt-4"></div>
              <SoldStock
                loading={loading}
                setSoldLoading={setSoldLoading}
                getValueOf={getValueOf}
              />
            </div>
          </div>
        </div>
        {soldStockNewsList && (
          <div className="m-4">
            <h1 className="profile-heading pe-3 pt-2">
              {getValueOf("Related News")}
            </h1>
            <StockSoldSlider
              getValueOf={getValueOf}
              soldStockNewsList={soldStockNewsList}
              layoutClickChanger={layoutClickChanger}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PortfolioStock;
