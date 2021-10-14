import { useState } from "react";
import Category from "./Category";
import "../otherServices/OtherServices.css";
import Portfolio from "./Portfolio";
import Exchange from "./Exchange";
const OtherServices = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  const [categoryTable, setCategoryTable] = useState(true);
  const [portfolioTable, setPortfolioTable] = useState(false);
  const [exchangeTable, setExchangeTable] = useState(false);

  const showTable = (value) => {
    if (value === "category") {
      setCategoryTable(true);
      setExchangeTable(false);
      setPortfolioTable(false);
    } else if (value === "portfolio") {
      setPortfolioTable(true);
      setExchangeTable(false);
      setCategoryTable(false);
    } else if (value === "exchange") {
      setExchangeTable(true);
      setPortfolioTable(false);
      setCategoryTable(false);
    }
  };
  return (
    <div className="container mt-5">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row">
        <div className="col-12">
          <div className="content-manager pb-4 mb-3">
            <div className="d-flex  border-b-1  justify-content-between ">
              <p className="heading-stock pr-15 fs-sm-20 mb-0">
                Content Manager
              </p>
              <span className="cursor-pointer" onClick={sideBarHandler}>
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
        </div>
        <div className="col-12 ">
          <div className="other-services bg-white  p-sm-3 p-2">
            <div className="row justify-content-between flex-md-row flex-column align-items-center">
              <div className="col-md-3 col-12 ">
                <p className="mb-0 text-md-end text-center other-services-text">
                  Other Services
                </p>
              </div>
              <div className="col-sm-9 d-flex  justify-content-md-end flex-md-row flex-column">
                <button
                  className={`${
                    exchangeTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2 ms-md-3`}
                  onClick={() => showTable("exchange")}
                >
                  Exchange
                </button>
                <button
                  className={`${
                    portfolioTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2 ms-md-3`}
                  onClick={() => showTable("portfolio")}
                >
                  Portfolio
                </button>
                <button
                  className={`${
                    categoryTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2 ms-md-3`}
                  onClick={() => showTable("category")}
                >
                  Category
                </button>
              </div>
            </div>

            {categoryTable ? <Category /> : ""}
            {portfolioTable ? <Portfolio /> : ""}
            {exchangeTable ? <Exchange /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
