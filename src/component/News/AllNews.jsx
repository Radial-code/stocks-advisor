import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactPaginate from "react-paginate";
import NewsList from "./NewsList";
import SearchNews from "../../assets/img/searchnews.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const AllNews = ({ setPage, page, loading, totalNews }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const allNewsList = useSelector((state) => state.cmPanel.allNews);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <div>
      <Row className="h-100">
        <Col
          xs={12}
          className="mt-sm-3 mb-5  justify-content-center d-sm-block news-scroll"
        >
          {allNewsList && allNewsList.length ? (
            allNewsList.map((value, index) => {
              return <NewsList value={value} index={index} loading={loading} />;
            })
          ) : (
            <>
              <img
                className="searchnews mx-auto d-block"
                src={SearchNews}
                alt=""
              />
              <h4 className="text-center text-5CBD4C">
                You don't have any News
              </h4>
            </>
          )}
        </Col>
        {totalNews <= 4 ? (
          ""
        ) : (
          <>
            {layoutClickChanger ? (
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(totalNews / 4)}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"activePage"}
                initialPage={page}
              />
            ) : (
              <div className="react-pagination  ">
                {totalNews <= 4 ? (
                  ""
                ) : (
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(totalNews / 4)}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"activePage"}
                    initialPage={page}
                  />
                )}
              </div>
            )}
          </>
        )}
      </Row>
    </div>
  );
};
export default withRouter(AllNews);
