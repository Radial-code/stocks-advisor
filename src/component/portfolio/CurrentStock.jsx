import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import moment from "moment";

function CurrentStock({ history, getValueOf }) {
  const currentStockList = useSelector((state) => state.list.currentStockList);

  return (
    <div className="table-responsive scroll-bar current-stock-scrollbar ">
      {currentStockList && currentStockList.length ? (
        <table className="table table-borderless table-hover ml-10">
          <thead className="portfolio-sticky">
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Date")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Name")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Symbol")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Portfolio")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Category")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Join Price")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Current Price")}
              </th>
              <th scope="col" className="text-center">
                <span>
                  {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                </span>
                {getValueOf("Profit/Loss")}
              </th>
            </tr>
          </thead>
          {currentStockList && currentStockList.length ? (
            currentStockList.map((value, index) => {
              return (
                <tbody key={index} className="table-hover-scale">
                  <tr className="current-stock-data table-border-bottom ">
                    <td className="text-center whitespace">
                      {moment(value && value.createdAt).format("DD/MMM/YYYY")}
                    </td>
                    <td
                      className="text-center whitespace"
                      onClick={() =>
                        history.push(
                          `/stock/news/${value && value._id}/stock-tags`
                        )
                      }
                    >
                      {value && value.name
                        ? value.name
                        : value.symbol
                        ? value.symbol
                        : "N/A"}
                    </td>
                    <td
                      className="text-center whitespace text-primary  cursor-pointer
                      "
                      onClick={() =>
                        history.push(
                          `/stock/news/${value && value._id}/stock-tags`
                        )
                      }
                    >
                      {value && value.symbol ? value.symbol : "N/A"}
                    </td>
                    <td className="text-center whitespace">
                      {value && value.portfolio ? value.portfolio.title : "N/A"}
                    </td>
                    <td className="text-center whitespace">
                      {value && value.category ? value.category.title : "N/A"}
                    </td>
                    <td className="text-center whitespace">
                      ${value && value.joinPrice ? value.joinPrice : "N/A"}
                    </td>
                    <td className="text-center whitespace">
                      $
                      {value && value.currentPrice ? value.currentPrice : "N/A"}
                    </td>
                    <td
                      className={`${
                        value &&
                        value.profitOrLoss &&
                        value.profitOrLoss.status &&
                        value.profitOrLoss.status === 0
                          ? "profit-zero-color"
                          : value &&
                            value.profitOrLoss &&
                            value.profitOrLoss.status &&
                            value.profitOrLoss.status === 1
                          ? "text-green-profite"
                          : "text-danger"
                      }`}
                    >
                      {parseInt(
                        value &&
                          value.profitOrLoss &&
                          value.profitOrLoss.percentage
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <p className="blank-data text-center mt-5">
              {getValueOf("You don't have any current stock list")}
            </p>
          )}
        </table>
      ) : (
        <p className="blank-data text-center mt-5">
          {getValueOf("You don't have any current stock list")}
        </p>
      )}
    </div>
  );
}
export default withRouter(CurrentStock);
