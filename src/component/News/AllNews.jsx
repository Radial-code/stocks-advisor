import moment from "moment";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import img_2 from "../../assets/img/calendar-icon.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
const AllNews = ({ history }) => {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  const allNewsList = useSelector((state) => state.cmPanel.allNews);

  return (
    <div>
      <Row className="h-100">
        <Col
          xs={12}
          className="mt-sm-3 h-100 d-flex justify-content-center d-sm-block"
        >
          {allNewsList && allNewsList.length
            ? allNewsList.map((value, index) => {
                return (
                  <section className="news-articles-card h-100 p-3 mb-4">
                    <Row key={index} className="justify-content-between h-100 ">
                      <Col xl={4} lg={4} xs={4} className="h-100">
                        <div className="stock-articles-img h-100">
                          <img
                            className="w-100 h-341"
                            src={value.imagePath}
                            alt=""
                          />
                        </div>
                      </Col>
                      <Col
                        xl={8}
                        sm={8}
                        xs={8}
                        className="d-flex justify-content-center h-100"
                      >
                        <div className="w-lg-518">
                          <p className="stock-paragraph d-flex  mt-md-2 mt-lg-0 mb-0 fs-xs-14  articles-date">
                            {moment(value.createdAt).format("ddd/MM/yyyy")}
                            <span
                              className={`${
                                layoutClickChanger ? "pr-15" : "px-3"
                              }`}
                            >
                              <img src={img_2} alt="" />{" "}
                            </span>{" "}
                          </p>
                          <p className="heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5 ">
                            {value && value.title ? value.title : "N/A"}
                          </p>
                          <p className="stock-paragraph max-w-para d-none  d-md-block">
                            <p className="mb-0 dots">
                              {value && value.description
                                ? value.description
                                : "N/A"}
                            </p>
                          </p>
                          <p
                            className="read-more  mb-0 cursor-pointer fs-xs-12"
                            onClick={() =>
                              history.push(`/news/details/${value._id}`)
                            }
                          >
                            ...Read More
                          </p>

                          <p
                            className="small-paragraph d-none d-xl-block mb-0 cursor-pointer fw-bold"
                            onClick={() =>
                              history.push(
                                `/stock/news/${value.stock._id}/${value.tags}`
                              )
                            }
                          >
                            {value && value.tags ? value.tags : "N/A"}
                          </p>
                          <p className="small-paragraph text-end">
                            <span className="cursor-pointer small-paragraph fw-bold">
                              Stock:
                            </span>
                            <span
                              className="cursor-pointer fw-bold pe-1"
                              onClick={() =>
                                history.push(
                                  `/stock/news/${value.stock._id}/stock-tags`
                                )
                              }
                            >
                              {value.stock.symbol}
                            </span>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </section>
                );
              })
            : null}
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(AllNews);
