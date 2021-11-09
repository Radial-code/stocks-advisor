import React, { useEffect, useState } from "react";
import Sortarrow from "../../../assets/img/sortarrow.png";
import BubblesLoader from "../../common/BubblesLoader";
import NoData from "../../../assets/img/emptydata.jpg";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
const PromoCodeTable = ({ show, handleClose, setShow }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const [loading, setLoading] = useState(true);
  const editPortfolios = (value) => {
    setShow(true);
  };

  return (
    <>
      <table className="table table-borderless table-hover mb-3">
        <thead className="portfolio-sticky ">
          <tr className="current-stock-table-head table-border-bottom table-border-top">
            <th
              scope="col"
              className="text-end position-sticky top-0 whitespace "
            >
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              {getValueOf("Date")}
            </th>

            <th
              scope="col"
              className="text-end position-sticky top-0 whitespace"
            >
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              {getValueOf("Portfolio")}
            </th>

            <th
              scope="col"
              className="text-end position-sticky top-0 whitespace"
            >
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              {getValueOf("Edit")}
            </th>
            <th
              scope="col"
              className="text-end position-sticky top-0 whitespace"
            >
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              {getValueOf("Delete")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-end whitespace Ellipse">4227289</td>
            <td className="text-end whitespace Ellipse">asdfghjk</td>
            <td className="text-end whitespace Ellipse">
              <button className="px-3 py-1 edit-button " type="button">
                {getValueOf("Edit")}
              </button>
            </td>
            <td className="text-end whitespace Ellipse">
              <button type="button" className="px-3 py-1 delete-button">
                {getValueOf("Delete")}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PromoCodeTable;
