import React from "react";
import "../portfolios/portfolios.css";
import Sortarrow from "../../assets/img/sortarrow.png";
import SoldStock from "./SoldStock";
function CurrentStock() {
  return (
    <div className="container">
      <div className="current-stock-bg p-sm-3 p-2">
        <h1 className="current-stock-text ff-popins">Current Stocks</h1>
        <div className="table-responsive current-stock-scrollbar">
          <table className="table table-borderless">
            <thead>
              <tr className="current-stock-table-head table-border-bottom table-border-top">
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Date{" "}
                </th>

                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Name
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Symbol
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Portfolio
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Category
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Join Price
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Current Price
                </th>
                <th scope="col" className="text-center">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Profit/Loss
                </th>
              </tr>
            </thead>
            <tbody>
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
        <SoldStock />
      </div>
    </div>
  );
}

export default CurrentStock;
