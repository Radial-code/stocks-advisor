import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalenderIcon from "../../assets/img/calendar-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";
import BubblesLoader from "../common/BubblesLoader";
import moment from "moment";
import NoImg from "../../assets/img/no-image.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { withRouter } from "react-router";

const RelatedArticles = ({ history }) => {
  const dispatch = useDispatch();
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const [relatedLoading, setRelatedLoading] = useState(false);
  const newsDetails = useSelector((state) => state.userPanel.newsDetails);
  const allRelatedNews = useSelector((state) => state.cmPanel.allRelatedNews);

  useEffect(() => {
    if (newsDetails && newsDetails.stock) {
      const data = {
        stockId: newsDetails.stock._id,
        tags: newsDetails.tags,
      };
      dispatch(getRelatedNewsAction(data, setRelatedLoading));
    }
  }, []);

  const contentHandler = (value) => {
    return {
      __html: value,
    };
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <p className="profile-heading">{getValueOf("Related News")}</p>
        </Col>
        <Col xs={12}>
          {relatedLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <BubblesLoader />
            </div>
          ) : (
            <Row className="mt-5">
              {allRelatedNews && !!allRelatedNews.length ? (
                allRelatedNews.map((value, index) => {
                  return (
                    <Col
                      xl={4}
                      lg={6}
                      className="d-flex justify-content-center"
                    >
                      <section key={index} className="articles-card p-3">
                        <div>
                          {value.imagePath === "" ? (
                            <img
                              className="w-100 newsImg-slider mx-auto d-block"
                              src={NoImg}
                              alt=""
                            />
                          ) : (
                            <img
                              className="w-100 newsImg-slider mx-auto d-block"
                              src={value.imagePath}
                              alt=""
                            />
                          )}
                        </div>
                        <p
                          className={
                            layoutClickChanger
                              ? "text-end stock-paragraph cursor-pointer pt-3 "
                              : "text-start stock-paragraph cursor-pointer pt-3 "
                          }
                        >
                          <span>
                            {moment(value.createdAt).format("DD/MMM/YYYY")}
                          </span>
                          <img
                            className="w-19 h-19 d-inline-block mx-2"
                            src={CalenderIcon}
                            alt="CalenderIcon"
                          />
                        </p>

                        <div className="d-flex align-items-center">
                          <p
                            className={
                              layoutClickChanger
                                ? "news-heading-font max-w-articles p-2 mb-0 Slider-Ellipse py-2"
                                : "news-heading-font max-w-articles p-0 mb-0 Slider-Ellipse py-2"
                            }
                            dir="ltr"
                          >
                            {layoutClickChanger ? (
                              <>{value.atitle ? value.atitle : "N/A"}</>
                            ) : (
                              <>{value.title ? value.title : "N/A"}</>
                            )}
                          </p>
                        </div>
                        <span
                          className={
                            layoutClickChanger
                              ? "text-ellipsis-three-line stock-paragraph text-end"
                              : "text-ellipsis-three-line stock-paragraph text-start"
                          }
                        >
                          {layoutClickChanger ? (
                            <p
                              dangerouslySetInnerHTML={
                                !!value && !!value.adescription
                                  ? contentHandler(value.adescription)
                                  : "N/A"
                              }
                            />
                          ) : (
                            <p
                              dangerouslySetInnerHTML={
                                !!value && !!value.description
                                  ? contentHandler(value.description)
                                  : "N/A"
                              }
                            />
                          )}
                        </span>
                        <span
                          className="read-more cursor-pointer"
                          onClick={() =>
                            history.push(`/news/details/${value._id}`)
                          }
                        >
                          {getValueOf("Read More")}
                        </span>
                        <p
                          className={
                            layoutClickChanger
                              ? "text-end cursor-pointer mb-0 text-ellipsis-dots color-blue"
                              : "text-start cursor-pointer mb-0 text-ellipsis-dots color-blue"
                          }
                        >
                          {layoutClickChanger ? (
                            <>{value.atags ? value.atags : "N/A"}</>
                          ) : (
                            <>{value.tags ? value.tags : "N/A"}</>
                          )}
                        </p>
                        <p
                          className={
                            layoutClickChanger
                              ? "small-paragraph text-end"
                              : "small-paragraph text-start"
                          }
                        >
                          <span className=" cursor-pointer fw-bold">
                            {getValueOf("Stock")} :
                          </span>
                          <span
                            className="cursor-pointer fw-bold color-blue"
                            onClick={() =>
                              history.push(
                                `/stock/news/${value.stock._id}/stock-tags`
                              )
                            }
                          >
                            {value.stock.symbol}
                          </span>
                        </p>
                      </section>
                    </Col>
                  );
                })
              ) : (
                <p className="text-center reltated-text-style">
                  {getValueOf("You don't have any Related News")}
                </p>
              )}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(RelatedArticles);
