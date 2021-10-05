import React from "react";
import "./portfolios.css";
import Sortarrow from "../../assets/img/sortarrow.png";
import SoldStock from "./SoldStock";
function Portfolio1({ sideBarHandler, setSidebarActive, sidebarActive }) {
  return (
    <div className="container mr-lg-30 ">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row">
        <div className="col-12">
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
        </div>

        <div className="col-12 mt-3 mt-xxl-0">
          <div className="current-stock-bg p-sm-3 p-2">
            <h1 className="current-stock-text ff-popins mt-md-5 mt-2">Current Stocks</h1>
            <div className="table-responsive scroll-bar current-stock-scrollbar">
              <table className="table table-borderless table-hover ml-10">
                <thead className='portfolio-sticky'>
                  <tr className="current-stock-table-head table-border-bottom table-border-top">
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Date{" "}
                    </th>

                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Name
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Symbol
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Portfolio
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Category
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Join Price
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Current Price
                    </th>
                    <th scope="col" className="text-center">
                      <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span>
                      Profit/Loss
                    </th>
                  </tr>
                </thead>
                <tbody className="table-hover-scale">
                     <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
               
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center profitloss-text">25</td>
                  </tr>
                  <tr className="current-stock-data table-border-bottom">
                    <td className="text-center">15/07/2021</td>
                    <td className="text-center">Netflix Inc</td>
                    <td className="text-center">NFLX</td>
                    <td className="text-center">Portfolio</td>
                    <td className="text-center">Common</td>
                    <td className="text-center">$125</td>
                    <td className="text-center">$150</td>
                    <td className="text-center first-text">10-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-b-1-16191E mt-4"></div>
            <SoldStock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio1;