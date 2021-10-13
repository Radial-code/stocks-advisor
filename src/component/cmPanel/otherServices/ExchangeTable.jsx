import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import {
  DeleteExchangeDetailsAction,
  getExchangeListAction,
} from "../../../redux/action/cmPanel/OurServices";
import BubblesLoader from "../../common/BubblesLoader";

function ExchangeTable({ setShow, setEdit, setUpdateValue }) {
  const dispatach = useDispatch();
  const [loading, setExchangeLoading] = useState(false);
  const exchangeList = useSelector((state) => state.cmPanel.exchangeList);

  useEffect(() => {
    dispatach(getExchangeListAction(setExchangeLoading));
  }, []);

  const deleteExchange = (id) => {
    if (id) {
      dispatach(DeleteExchangeDetailsAction(id));
    }
  };

  const editCategory = (value) => {
    setShow(true);
    setEdit(true);
    setUpdateValue(value);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <table className="table table-borderless table-hover mb-3">
          <thead className="portfolio-sticky ">
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th
                scope="col"
                className="text-end  position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Date
              </th>

              <th
                scope="col"
                className="text-end  position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Exchange
              </th>

              <th
                scope="col"
                className="text-end  position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Edit
              </th>
              <th
                scope="col"
                className="text-end  position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {exchangeList && !!exchangeList.length ? (
              exchangeList.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className="current-stock-data table-border-bottom"
                  >
                    <td className="text-end  whitespace Ellipse">
                      {moment(value.createdAt).format("MM/ddd")}
                    </td>
                    <td className="text-end  whitespace Ellipse">
                      {value.title}
                    </td>
                    <td className="text-end  whitespace Ellipse">
                      <button
                        className="px-3 py-1 edit-button "
                        onClick={() => editCategory(value)}
                        onClick={() => setShow(true)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text-end  whitespace Ellipse">
                      <button
                        onClick={() => deleteExchange(value._id)}
                        className="px-3 py-1 delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className="h-100">
                <p className="table-text text-end ">
                  You don't have any Category list
                </p>
              </div>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ExchangeTable;
