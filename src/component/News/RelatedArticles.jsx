import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_1 from "../../assets/img/team_1.png";
const RelatedArticles = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <p className="profile-heading">Related News Articles</p>
        </Col>
        <Col xs={12}>
          <Row className="mt-5">
            <Col xl={4} lg={6} className="d-flex justify-content-center">
              <section className="articles-card ">
                <div className="related-articles-img">
                  <img className="w-100 h-100" src={img_1} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <p className="news-heading-font max-w-articles pr-15">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                </div>
              </section>
            </Col>
            <Col
              xl={4}
              lg={6}
              className="d-flex justify-content-center mt-5 mt-lg-0"
            >
              <section className="articles-card ">
                <div className="related-articles-img">
                  <img className="w-100 h-100" src={img_1} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <p className="news-heading-font max-w-articles pr-15">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                </div>
              </section>
            </Col>
            <Col
              xl={4}
              lg={12}
              className="mt-5 mt-xl-0 d-flex justify-content-center"
            >
              <section className="articles-card ">
                <div className="related-articles-img">
                  <img className="w-100 h-100" src={img_1} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <p className="news-heading-font max-w-articles pr-15">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                </div>
              </section>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RelatedArticles;
