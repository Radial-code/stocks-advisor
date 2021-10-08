import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { getStockListAction } from "../../../redux/action/cmPanel/stock";
import BubblesLoader from "../../common/BubblesLoader";

const CurrentStockTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const stockList = useSelector((state) => state.cmPanel.stockList);

  useEffect(() => {
    dispatch(getStockListAction(setLoading));
  }, []);

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
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Date{" "}
              </th>

              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Profit/Loss
              </th>
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                State
              </th>
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Current Price
              </th>
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Join Price
              </th>
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Category
              </th>
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Symbol
              </th>
              {/* <th scope="col" className="text-end whitespace position-sticky top-0 ">
            <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span>
            Name
          </th> */}
              <th
                scope="col"
                className="text-end whitespace position-sticky top-0 "
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Portfolio
              </th>
            </tr>
          </thead>
          <tbody>
            {!!stockList && !!stockList.length
              ? stockList.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      className="current-stock-data table-border-bottom"
                    >
                      <td className="text-end whitespace Ellipse">
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td className="text-end whitespace profitloss-text Ellipse">
                        {value &&
                        value.profitOrLoss &&
                        value.profitOrLoss.percentage
                          ? value.profitOrLoss.percentage
                          : "N/A"}
                      </td>

                      <td className="text-end whitespace Ellipse">
                        {value.isSold ? "Sold" : "No Sold"}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        ${value.currentPrice}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        ${value.joinPrice}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        {value && value.category ? value.category.title : "N/A"}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        {value.symbol ? value.symbol : "N/A"}
                      </td>
                      {/* <td className="text-end whitespace">Netflix</td> */}
                      <td className="text-end whitespace Ellipse">
                        {value && value.portfolio
                          ? value.portfolio.title
                          : "N/A"}
                      </td>
                    </tr>
                  );
                })
              : "You don't have any stock"}
          </tbody>
        </table>
      )}
    </>
  );
};
export default CurrentStockTable;
