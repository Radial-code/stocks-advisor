import React from "react";
import "./portfolios.css";
import SoldStock from "./SoldStock";
import CurrentStock from "./CurrentStock";
import BubblesLoader from "../common/BubblesLoader";

function PortfolioStock({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
  loading,
}) {
  return (
    <div className="container mr-lg-30 ">
      <div className="row">
        {/* <div className="col-12">
          <div className="border-b-1 content-manager-2">
            <div className="d-flex justify-content-between">
              <p className="heading-stock pr-15">Portfolios</p>
              <span onClick={sideBarHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div> */}

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
            <SoldStock loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioStock;
