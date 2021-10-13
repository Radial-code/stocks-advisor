import Sortarrow from "../../assets/img/sortarrow.png";
import { withRouter } from "react-router";

function CurrentStock() {
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
        <tbody className="table-hover-scale">
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
        </tbody>
      </table>
    </div>
  );
}
export default withRouter(CurrentStock);
