import React from "react";
import "../../cmPanelCss/Stock.css";
import { Link } from "react-router-dom";
import CurrentStockTable from "./CurrentStockTable";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const Stocks = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <div className="width-table">
      <div className="row">
        <div className="col-12 d-flex justify-content-end current-stock-block ">
          <div className="current-stock-bg p-sm-3 p-2">
            <div className="mt-4 d-flex flex-sm-row flex-column justify-content-between align-items-center">
              <h1 className="current-stock-text ff-popins mb-sm-0  mb-3">
                Current Stocks
              </h1>
              <Link to="/content/manager/add/stock">
                <button className="update-btn-2">Add New</button>
              </Link>
            </div>
            <div className="overflow-auto current-stock-calc-height scroll-bar mt-3 ">
              <div className="table-responsive  current-stock-scrollbar h-100 cursor-pointer">
                <CurrentStockTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stocks;
