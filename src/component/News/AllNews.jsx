import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import img_2 from "../../assets/img/calendar-icon.png";
import img_1 from "../../assets/img/strock-articles-img-1.png";
const AllNews = ({ history }) => {
  return (
    <div>
      <Row className="h-100">
        <Col
          xs={12}
          className="mt-sm-3 h-100 d-flex justify-content-center d-sm-block"
        >
          <section className="news-articles-card h-100 p-3">
            <Row className="justify-content-between h-100">
              <Col xl={4} lg={4} xs={4} className="h-100">
                <div className="stock-articles-img h-100">
                  <img className="w-100 h-341" src={img_1} alt="" />
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
                    16/07/2021
                    <span className="pr-15">
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5 ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-md-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis venenatis
                      aliquet eros, non feugiat tortor semper sed. In diam
                      risus, efficitur sit amet dolor vitae, finibus tristique
                      arcu finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu. Proin dui erat, pulvinar ac felis eget,
                      mollis rhoncus nunc.
                    </p>
                  </p>
                  <p
                    className="read-more  mb-0 cursor-pointer fs-xs-12"
                    onClick={() => history.push("/AllNews")}
                  >
                    ...Read More
                  </p>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>Tag-1</span>,<span>Tag-2</span>,<span>Tag-3</span>,
                    <span>Tag-4</span>,<span>Tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={12}
          className="mt-sm-3 h-100 mt-3 d-flex justify-content-center d-sm-block"
        >
          <section className="news-articles-card h-100 p-3">
            <Row className="justify-content-between h-100">
              <Col xl={4} lg={4} xs={4} className="h-100">
                <div className="stock-articles-img h-100">
                  <img className="w-100 h-341" src={img_1} alt="" />
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
                    16/07/2021
                    <span className="pr-15">
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-md-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis venenatis
                      aliquet eros, non feugiat tortor semper sed. In diam
                      risus, efficitur sit amet dolor vitae, finibus tristique
                      arcu finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu. Proin dui erat, pulvinar ac felis eget,
                      mollis rhoncus nunc.
                    </p>
                  </p>
                  <p
                    className="read-more  mb-0 cursor-pointer fs-xs-12"
                    onClick={() => history.push("/AllNews")}
                  >
                    ...Read More
                  </p>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>Tag-1</span>,<span>Tag-2</span>,<span>Tag-3</span>,
                    <span>Tag-4</span>,<span>Tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>

        <Col
          xs={12}
          className="mt-sm-3 mt-3 h-100 d-flex justify-content-center d-sm-block"
        >
          <section className="news-articles-card h-100 p-3">
            <Row className="justify-content-between h-100">
              <Col xl={4} lg={4} xs={4} className="h-100">
                <div className="stock-articles-img h-100">
                  <img className="w-100 h-341" src={img_1} alt="" />
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
                    16/07/2021
                    <span className="pr-15">
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-md-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis venenatis
                      aliquet eros, non feugiat tortor semper sed. In diam
                      risus, efficitur sit amet dolor vitae, finibus tristique
                      arcu finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu. Proin dui erat, pulvinar ac felis eget,
                      mollis rhoncus nunc.
                    </p>
                  </p>
                  <p
                    className="read-more  mb-0 cursor-pointer fs-xs-12"
                    onClick={() => history.push("/AllNews")}
                  >
                    ...Read More
                  </p>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>Tag-1</span>,<span>Tag-2</span>,<span>Tag-3</span>,
                    <span>Tag-4</span>,<span>Tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>

        <Col
          xs={12}
          className="mt-sm-3  mt-3 h-100 d-flex justify-content-center d-sm-block"
        >
          <section className="news-articles-card h-100 p-3">
            <Row className="justify-content-between h-100">
              <Col xl={4} lg={4} xs={4} className="h-100">
                <div className="stock-articles-img h-100">
                  <img className="w-100 h-341" src={img_1} alt="" />
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
                    16/07/2021
                    <span className="pr-15">
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-md-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis venenatis
                      aliquet eros, non feugiat tortor semper sed. In diam
                      risus, efficitur sit amet dolor vitae, finibus tristique
                      arcu finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu. Proin dui erat, pulvinar ac felis eget,
                      mollis rhoncus nunc.
                    </p>
                  </p>
                  <p
                    className="read-more  mb-0 cursor-pointer fs-xs-12"
                    onClick={() => history.push("/AllNews")}
                  >
                    ...Read More
                  </p>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>Tag-1</span>,<span>Tag-2</span>,<span>Tag-3</span>,
                    <span>Tag-4</span>,<span>Tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(AllNews);
