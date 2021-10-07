import React from "react";
import Sortarrow from "../../../assets/img/sortarrow.png";

function PlansTable() {
  return (
    <table className="table table-borderless table-hover mb-3">
      <thead className="portfolio-sticky ">
        <tr className="current-stock-table-head table-border-bottom table-border-top">
          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Date{" "}
          </th>

          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Title
          </th>
          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Price
          </th>
          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Type
          </th>
          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Detail
          </th>

          <th scope="col" className="text-center position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
        <tr className="current-stock-data table-border-bottom">
          <td className="text-center ">15/07</td>
          <td className="text-center profitloss-text">25</td>

          <td className="text-center">Sold</td>
          <td className="text-center">$150</td>
          <td className="text-center">$125</td>
          <td className="text-center">Common</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PlansTable;
