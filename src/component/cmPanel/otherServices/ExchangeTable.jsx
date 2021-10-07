import React, { useState } from "react";
import Sortarrow from "../../../assets/img/sortarrow.png";

function ExchangeTable() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end align-items-center">
          {showInput ? (
            <div className="add-new-stock-field my-3 ms-3">
              <input
                type="text"
                placeholder="Add Exchange"
                className="py-1 px-3"
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <button
              className="px-3 py-1 add-button ms-3 my-3"
              onClick={() => setShowInput(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <table className="table table-borderless table-hover mb-3">
        <thead className="portfolio-sticky ">
          <tr className="current-stock-table-head table-border-bottom table-border-top">
            <th scope="col" className="text-center position-sticky top-0 ">
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              Date
            </th>

            <th scope="col" className="text-center position-sticky top-0 ">
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              Exchange
            </th>

            <th scope="col" className="text-center position-sticky top-0 ">
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              Edit
            </th>
            <th scope="col" className="text-center position-sticky top-0 ">
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-center ">15/07</td>
            <td className="text-center">Sold</td>
            <td className="text-center">
              <button className="px-3 py-1 edit-button ">Edit</button>
            </td>
            <td className="text-center">
              <button className="px-3 py-1 delete-button">Delete</button>
            </td>
          </tr>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-center ">15/07</td>
            <td className="text-center">Sold</td>
            <td className="text-center">
              <button className="px-3 py-1 edit-button ">Edit</button>
            </td>
            <td className="text-center">
              <button className="px-3 py-1 delete-button">Delete</button>
            </td>
          </tr>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-center ">15/07</td>
            <td className="text-center">Sold</td>
            <td className="text-center">
              <button className="px-3 py-1 edit-button ">Edit</button>
            </td>
            <td className="text-center">
              <button className="px-3 py-1 delete-button">Delete</button>
            </td>
          </tr>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-center ">15/07</td>
            <td className="text-center">Sold</td>
            <td className="text-center">
              <button className="px-3 py-1 edit-button ">Edit</button>
            </td>
            <td className="text-center">
              <button className="px-3 py-1 delete-button">Delete</button>
            </td>
          </tr>
          <tr className="current-stock-data table-border-bottom">
            <td className="text-center ">15/07</td>
            <td className="text-center">Sold</td>
            <td className="text-center">
              <button className="px-3 py-1 edit-button ">Edit</button>
            </td>
            <td className="text-center">
              <button className="px-3 py-1 delete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExchangeTable;
