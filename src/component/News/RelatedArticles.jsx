import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalenderIcon from "../../assets/img/calendar-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";
import BubblesLoader from "../common/BubblesLoader";
import moment from "moment";
import Slider from "react-slick";

import NoImg from "../../assets/img/no-image.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { withRouter } from "react-router";

const RelatedArticles = ({ history }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
        {allRelatedNews && allRelatedNews.length <= 3 ? (
          <>
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
            </Col>{" "}
          </>
        ) : (
          <>
            <Slider className="d-flex align-items-center" {...settings}>
              {allRelatedNews && !!allRelatedNews.length ? (
                allRelatedNews.map((value, index) => {
                  return (
                    <Col
                      xl={4}
                      md={6}
                      className="d-flex justify-content-center"
                    >
                      <section key={index} className="articles-card p-3 ">
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
                          onClick={() =>
                            history.push(
                              `/stock/news/${value.stock._id}/${value.tags}`
                            )
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
            </Slider>
          </>
        )}
      </Row>
    </Container>
  );
};

export default withRouter(RelatedArticles);
const Next = (props) => {
  const { style, onClick } = props;
  return (
    <button style={{ ...style }} onClick={onClick} className={`next`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
const Prev = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="prev d-sm-flex justify-content-center  align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
