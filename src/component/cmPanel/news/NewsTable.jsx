import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import Sortarrow from "../../../assets/img/sortarrow.png";
import BubblesLoader from "../../common/BubblesLoader";
import { getNewsListForAdminAction } from "../../../redux/action/news";
import { withRouter } from "react-router";

const NewsTable = ({ history }) => {
  const dispatch = useDispatch();
  const { layoutClickChanger } = useLayoutChangerProvider();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalNews, setTotalNews] = useState(0);
  const adminNewsList = useSelector((state) => state.cmPanel.adminNewsList);

  useEffect(() => {
    dispatch(getNewsListForAdminAction(page, setLoading, setTotalNews));
  }, [page]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <Table hover>
          <thead className="portfolio-sticky">
            <tr className="user-list-panel">
              <th className="whitespace table-width">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Date
              </th>
              <th className="whitespace table-width-header">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Title
              </th>
              <th className="whitespace">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminNewsList && !!adminNewsList.length
              ? adminNewsList.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() =>
                        history.push(`/content/manager/edit/news/${value._id}`)
                      }
                    >
                      <td className="whitespace Ellipse">
                        {" "}
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td
                        className={`${
                          layoutClickChanger
                            ? "hitespace Ellipse text-end"
                            : "hitespace Ellipse text-start"
                        }`}
                      >
                        {value.title}
                      </td>
                      <td className="whitespace Ellipse">{value.tags}</td>
                    </tr>
                  );
                })
              : "You don't have any news"}
          </tbody>
        </Table>
      )}
      {totalNews && totalNews <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalNews / 10)}
              marginPagesDisplayed={3}
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
                pageCount={Math.ceil(totalNews / 10)}
                marginPagesDisplayed={3}
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
export default withRouter(NewsTable);
