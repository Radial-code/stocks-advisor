import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";
import BubblesLoader from "../common/BubblesLoader";

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
            <BubblesLoader />
          ) : (
            <Row className="mt-5">
              {allRelatedNews && !!allRelatedNews.length
                ? allRelatedNews.map((value, index) => {
                    return (
                      <Col
                        xl={4}
                        lg={6}
                        className="d-flex justify-content-center"
                      >
                        <section key={index} className="articles-card ">
                          <div className="related-articles-img">
                            <img
                              className="w-100 h-100"
                              src={value.imagePath}
                              alt=""
                            />
                          </div>
                          <div className="d-flex justify-content-center align-items-center mt-4">
                            <p className="news-heading-font max-w-articles pr-15 Ellipse">
                              {value.title}
                            </p>
                          </div>
                        </section>
                      </Col>
                    );
                  })
                : "You don't have any related news"}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RelatedArticles;
