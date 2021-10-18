import React from "react";
import "./portfolios.css";
import SoldStock from "./SoldStock";
import CurrentStock from "./CurrentStock";
import BubblesLoader from "../common/BubblesLoader";

function PortfolioStock({ loading, setSoldLoading }) {
  return (
    <div className="width-table mr-lg-30 ">
      <div className="row">
        <div className="col-12 ">
          <div className="current-stock-bg p-sm-3 p-2">
            <h1 className="current-stock-text ff-popins mt-md-5 mt-2">
              Current Stocks
            </h1>
            {loading ? (
              <div className="d-flex justify-content-center">
                <BubblesLoader />
              </div>
            ) : (
              <CurrentStock />
            )}
            <div className="border-b-1-16191E mt-4"></div>
            <SoldStock loading={loading} setSoldLoading={setSoldLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioStock;
