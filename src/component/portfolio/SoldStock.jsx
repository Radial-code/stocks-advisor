import React from "react";
import Sortarrow from "../../assets/img/sortarrow.png";

import "./portfolios.css";
function SoldStock() {
  return (
    <div className="mt-5">
      <h1 className="sold-stock-text ff-popins">Sold Stocks</h1>
      <div className="table-responsive sold-stock-scrollbar">
        <table className="table table-borderless">
          <thead>
            <tr className="sold-stock-table-head table-border-bottom table-border-top">
              <th scope="col" className="text-center">
                Date Bought
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>

              <th scope="col" className="text-center">
                Date Sold
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
              <th scope="col" className="text-center">
                Name
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
              <th scope="col" className="text-center">
                Symbol
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
              <th scope="col" className="text-center">
                Category
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
              <th scope="col" className="text-center">
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Join Price
              </th>
              <th scope="col" className="text-center">
                sell Price
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
              <th scope="col" className="text-center">
                Profit/Loss
                <span>
                  <img className="pe-1" src={Sortarrow} alt="sort arrow" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="sold-stock-data table-border-bottom">
              <td className="text-center">15/07/2021</td>
              <td className="text-center">Netflix Inc</td>
              <td className="text-center">NFLX</td>
              <td className="text-center">Portfolio</td>
              <td className="text-center">Common</td>
              <td className="text-center">$125</td>
              <td className="text-center">$150</td>
              <td className="text-center profitloss-text">25</td>
            </tr>
            <tr className="sold-stock-data table-border-bottom">
              <td className="text-center">15/07/2021</td>
              <td className="text-center">Netflix Inc</td>
              <td className="text-center">NFLX</td>
              <td className="text-center">Portfolio</td>
              <td className="text-center">Common</td>
              <td className="text-center">$125</td>
              <td className="text-center">$150</td>
              <td className="text-center first-text">10-</td>
            </tr>
            <tr className="sold-stock-data table-border-bottom">
              <td className="text-center">15/07/2021</td>
              <td className="text-center">Netflix Inc</td>
              <td className="text-center">NFLX</td>
              <td className="text-center">Portfolio</td>
              <td className="text-center">Common</td>
              <td className="text-center">$125</td>
              <td className="text-center">$150</td>
              <td className="text-center profitloss-text">25</td>
            </tr>
            <tr className="sold-stock-data table-border-bottom">
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
    </div>
  );
}

export default SoldStock;
