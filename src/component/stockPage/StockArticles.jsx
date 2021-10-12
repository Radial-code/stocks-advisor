import moment from "moment";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import img_1 from "../../assets/img/strock-articles-img-1.png";

const StockArticles = () => {
  const stockNewsList = useSelector((state) => state.list.stockNewsList);
  return (
    <>
      <Container className="max-w-container ">
        <Row>
          <Col xs={12}>
            <p className="profile-heading fs-md-20 fs-md-14 ">
              Related News Articles
            </p>
          </Col>
          {stockNewsList && stockNewsList.length
            ? stockNewsList.map((value) => {
                return (
                  <Col xs={12} className="mt-5">
                    <section className="news-articles-card p-lg-5 p-3">
                      <Row className="justify-content-between">
                        <Col xl={3} lg={4} xs={4}>
                          <div className="stock-articles-img ">
                            <img
                              className="w-100 h-100"
                              src={value.imagePath}
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col xl={9} lg={8} xs={8}>
                          <div>
                            <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                              <span>
                                {moment(value.createdAt).format("dd/MM/YYYY")}{" "}
                              </span>
                              - {moment(value.updatedAt).format("dd/MM/YYYY")}
                            </p>
                            <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                              {value.title ? value.title : "N/A"}{" "}
                            </p>
                            <p className="stock-paragraph max-w-para d-none d-lg-block">
                              {value.description}
                            </p>
                            <p className="read-more d-none d-lg-block mb-0">
                              Read More
                            </p>
                            <p className="small-paragraph d-none d-lg-block mb-0">
                              <span>{value.tags}</span>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </section>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </>
  );
};

export default StockArticles;
