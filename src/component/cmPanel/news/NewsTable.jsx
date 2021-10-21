import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import BubblesLoader from "../../common/BubblesLoader";
import { getNewsListForAdminAction } from "../../../redux/action/news";
import { withRouter } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsTableListItem from "./NewsTableListItem";
import ReactPaginate from "react-paginate";

const NewsTable = ({ history }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const adminNewsList = useSelector((state) => state.cmPanel.adminNewsList);

  useEffect(() => {
    dispatch(getNewsListForAdminAction(setLoading, setHasMore, page));
  }, [page]);

  // const handlePageClick = () => {
  //   console.log("render");

  // };
  console.log("re render");
  const handlePageClick = (e) => {
    console.log(e);
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
        <Table id="news-infinite-scroll" hover>
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
          {/* <InfiniteScroll
            dataLength={adminNewsList.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollableTarget="news-infinite-scroll"
            loader={
              <div className="d-flex py-1 justify-content-center">
                {loading ? <h4>Loading...</h4> : <h4>&nbsp;</h4>}
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          > */}
          <tbody className="user-details">
            {adminNewsList && !!adminNewsList.length
              ? adminNewsList.map((obj, index) => (
                  <NewsTableListItem
                    key={index}
                    value={obj}
                    history={history}
                  />
                ))
              : "You don't have any news"}
          </tbody>
          {/* </InfiniteScroll> */}
        </Table>
      )}
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(13 / 10)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"activePage"}
        initialPage={page}
      />
    </>
  );
};
export default withRouter(NewsTable);
