import Sortarrow from "../../assets/img/sortarrow.png";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import moment from "moment";

function CurrentStock() {
  const currentStockList = useSelector((state) => state.list.currentStockList);
  return (
    <div className="table-responsive scroll-bar current-stock-scrollbar">
      <table className="table table-borderless table-hover ml-10">
        <thead className="portfolio-sticky">
          <tr className="current-stock-table-head table-border-bottom table-border-top">
            <th scope="col" className="text-center">
              <span>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              </span>
              Date
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
        {currentStockList && currentStockList.length ? (
          currentStockList.map((value, index) => {
            return (
              <tbody key={index} className="table-hover-scale">
                <tr className="current-stock-data table-border-bottom">
                  <td className="text-center">
                    {moment(value.createdAt).format("DD/MMM/YYYY")}
                  </td>
                  <td className="text-center">{value.symbol}</td>
                  <td className="text-center">{value.portfolio.title}</td>
                  <td className="text-center">{value.category.title}</td>
                  <td className="text-center">${value.joinPrice}</td>
                  <td className="text-center">${value.currentPrice}</td>
                  <td className="text-center profitloss-text">
                    {value.profitOrLoss.percentage}
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <div className="d-flex justify-content-center">
            You don't have any current stock list
          </div>
        )}
      </table>
    </div>
  );
}
export default withRouter(CurrentStock);
