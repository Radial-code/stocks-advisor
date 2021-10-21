import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalenderIcon from "../../assets/img/calendar-icon.png";

import { useDispatch, useSelector } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";
import BubblesLoader from "../common/BubblesLoader";
import moment from "moment";

const RelatedArticles = () => {
  const dispatch = useDispatch();
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

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <p className="profile-heading">Related News Articles</p>
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
                        <div className="related-articles-img">
                          <img
                            className="w-100 h-100"
                            src={value.imagePath}
                            alt=""
                          />
                        </div>
                        <p className="text-end stock-paragraph cursor-pointer">
                          <span>
                            {" "}
                            {moment(value.createdAt).format("DD/MMM/YYYY")}
                          </span>
                          <img
                            className="w-19 h-19 d-inline-block mx-2"
                            src={CalenderIcon}
                            alt="CalenderIcon"
                          />
                        </p>
                        <span className="text-ellipsis-three-line stock-paragraph text-end">
                          {value.description}
                        </span>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                          <p
                            className="news-heading-font max-w-articles p-2 Slider-Ellipse"
                            dir="ltr"
                          >
                            {value.title}
                          </p>
                        </div>

                        <span className="read-more ">Read More...</span>
                        <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
                          {value.tags}
                        </p>
                        <p className="small-paragraph text-end">
                          <span className=" cursor-pointer fw-bold">
                            Stock :
                          </span>
                          <span className="cursor-pointer fw-bold">
                            {value.stock.symbol}
                          </span>
                        </p>
                      </section>
                    </Col>
                  );
                })
              ) : (
                <p>You don't have any related news</p>
              )}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RelatedArticles;
