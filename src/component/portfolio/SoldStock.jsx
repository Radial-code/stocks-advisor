import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import Sortarrow from "../../assets/img/sortarrow.png";
import { getRelatedSoldStockNewsAction } from "../../redux/action/news";
import BubblesLoader from "../common/BubblesLoader";

const data = [];
function SoldStock({ loading, history, setSoldLoading }) {
  const dispatch = useDispatch();
  const soldStockList = useSelector((state) => state.list.soldStockList);

  useEffect(() => {
    console.log("data", data);
    console.log(
      "data",
      soldStockList.length === data.length,
      soldStockList.length,
      data.length
    );
    if (soldStockList.length === data.length) {
      console.log("datade", data.length);
      dispatch(getRelatedSoldStockNewsAction(data, setSoldLoading));
    }
  }, [data]);

  return (
    <div className="mt-5">
      <h1 className="sold-stock-text ff-popins pt-md-4 ">Sold Stocks</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <BubblesLoader />
        </div>
      ) : (
        <div className="table-responsive scroll-bar-1  sold-stock-scrollbar">
          {soldStockList && soldStockList.length ? (
            <table className="table table-borderless table-hover">
              <thead className="portfolio-sticky">
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
              {soldStockList &&
                soldStockList.map((value) => {
                  data.push(value._id);

                  return (
                    <tbody className="table-hover-scale">
                      <tr className="sold-stock-data table-border-bottom">
                        <td className="text-center">
                          {moment(value.createdAt).format("DD/MMM/YYYY")}
                        </td>
                        <td className="text-center">
                          {" "}
                          {moment(value.soldDate).format("DD/MMM/YYYY")}
                        </td>
                        <td
                          className="text-center"
                          onClick={() =>
                            history.push(`/stock/news/${value._id}/stock-tags`)
                          }
                        >
                          {value.name ? value.name : value.symbol}
                        </td>
                        <td
                          className="text-center"
                          onClick={() =>
                            history.push(`/stock/news/${value._id}/stock-tags`)
                          }
                        >
                          {value.symbol}
                        </td>
                        <td className="text-center">{value.category.title}</td>
                        <td className="text-center">${value.joinPrice}</td>
                        <td className="text-center">${value.soldPrice}</td>
                        <td className="text-center profitloss-text">
                          {value.profitOrLoss.percentage}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          ) : (
            <p className="blank-data text-center mt-5">
              You don't have any sold stocks
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default withRouter(SoldStock);
