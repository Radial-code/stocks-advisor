import React from "react";
import "../cmPanelCss/Stock.css";
import Sortarrow from "../../assets/img/sortarrow.png";
import { Link } from "react-router-dom";

const Stocks = () => {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col d-flex justify-content-end d-xl-block">
          <div className="current-stock-bg p-sm-3 p-2">
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <h1 className="current-stock-text ff-popins mb-0">
                Current Stocks
              </h1>
              <Link to="/content/manager/add/stock">
                <button className="update-btn">Add New</button>
              </Link>
            </div>
            <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
              <div className="table-responsive  current-stock-scrollbar">
                <table className="table table-borderless mt-3">
                  <thead>
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
                        Profit/Loss
                      </th>
                      <th scope="col" className="text-center">
                        <span>
                          <img
                            className="ps-1"
                            src={Sortarrow}
                            alt="sort arrow"
                          />
                        </span>
                        State
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
                        Portfolio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom">
                      <td className="text-center">15/07</td>
                      <td className="text-center profitloss-text">25</td>

                      <td className="text-center">Sold</td>
                      <td className="text-center">$150</td>
                      <td className="text-center">$125</td>
                      <td className="text-center">Common</td>
                      <td className="text-center">NFLX</td>
                      <td className="text-center">Netflix</td>
                      <td className="text-center">Portfolio 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
