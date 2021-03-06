import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { getStockListAction } from "../../../redux/action/cmPanel/stock";
import BubblesLoader from "../../common/BubblesLoader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import StockListItem from "./StockListItem";
import ReactPaginate from "react-paginate";
import NoData from "../../../assets/img/emptydata.jpg";

const CurrentStockTable = ({ history, getValueOf }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const stockList = useSelector((state) => state.cmPanel.stockList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [totalStock, setTotalStock] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getStockListAction(page, setLoading, setTotalStock));
  }, [page]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <>
          {stockList && stockList.length !== 0 ? (
            <>
              <table className="table table-borderless table-hover mb-3">
                <thead className="portfolio-sticky ">
                  <tr className="current-stock-table-head table-border-bottom table-border-top">
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Join Date
                    </th>

                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Symbol
                    </th>
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      State
                    </th>
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Join Price
                    </th>
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Sold Price
                    </th>

                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Sold Date
                    </th>
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Category
                    </th>
                    <th
                      scope="col"
                      className={`${
                        layoutClickChanger
                          ? "text-end position-sticky top-0 whitespace"
                          : "text-start position-sticky top-0 whitespace"
                      }`}
                    >
                      <span>
                        {/* <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        /> */}
                      </span>
                      Profit/Loss
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!!stockList && !!stockList.length
                    ? stockList.map((obj, index) => (
                        <StockListItem
                          layoutClickChanger={layoutClickChanger}
                          key={index}
                          history={history}
                          value={obj}
                        />
                      ))
                    : ""}
                </tbody>
              </table>
            </>
          ) : (
            <>
              {" "}
              <div className="d-flex text-center flex-column">
                <img
                  className="nodata-img d-inline-block mx-auto"
                  src={NoData}
                  alt="NoData"
                />
                <h4 className="fw-bold">You don't have any stock</h4>
              </div>
            </>
          )}
        </>
      )}

      {totalStock <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalStock / 10)}
              marginPagesDisplayed={0}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"activePage"}
              initialPage={page}
            />
          ) : (
            <div className="react-pagination">
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(totalStock / 10)}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"activePage"}
                initialPage={page}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
export default withRouter(CurrentStockTable);
