/* eslint-disable camelcase */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img_1 from '../../assets/img/strock-articles-img-1.png';

const AllNews = () => (
  <div>
    <Container>
      <Row className="h-100">
        <Col
          xs={12}
          className="mt-5 h-100 d-flex justify-content-center d-sm-block"
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
                <div className="w-518">
                  <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                    <span>16/07/2021 </span>
                    {' '}
                    16/07/2021
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-xl-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis
                      venenatis aliquet eros, non feugiat tortor semper sed.
                      In diam risus, efficitur sit amet dolor vitae, finibus
                      tristique arcu finibus tristique arcu finibus tristique
                      arcu finibus tristique arcu. Proin dui erat, pulvinar ac
                      felis eget, mollis rhoncus nunc.
                    </p>
                  </p>
                  <Link to="AllNews">
                    <p className="read-more d-none d-lg-block mb-0">
                      Read More
                    </p>
                  </Link>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>tag-1</span>
                    ,
                    <span>tag-2</span>
                    ,
                    <span>tag-3</span>
                    ,
                    <span>tag-4</span>
                    ,
                    <span>tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={12}
          className="mt-5 h-100 d-flex justify-content-center d-sm-block"
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
                <div className="w-518">
                  <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                    <span>16/07/2021 </span>
                    {' '}
                    16/07/2021
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-xl-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis
                      venenatis aliquet eros, non feugiat tortor semper sed.
                      In diam risus, efficitur sit amet dolor vitae, finibus
                      tristique arcu finibus tristique arcu finibus tristique
                      arcu finibus tristique arcu. Proin dui erat, pulvinar ac
                      felis eget, mollis rhoncus nunc.
                    </p>
                  </p>
                  <Link to="AllNews">
                    <p className="read-more d-none d-lg-block mb-0">
                      Read More
                    </p>
                  </Link>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>tag-1</span>
                    ,
                    <span>tag-2</span>
                    ,
                    <span>tag-3</span>
                    ,
                    <span>tag-4</span>
                    ,
                    <span>tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={12}
          className="mt-5 h-100 d-flex justify-content-center d-sm-block"
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
                <div className="w-518">
                  <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                    <span>16/07/2021 </span>
                    {' '}
                    16/07/2021
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-xl-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis
                      venenatis aliquet eros, non feugiat tortor semper sed.
                      In diam risus, efficitur sit amet dolor vitae, finibus
                      tristique arcu finibus tristique arcu finibus tristique
                      arcu finibus tristique arcu. Proin dui erat, pulvinar ac
                      felis eget, mollis rhoncus nunc.
                    </p>
                  </p>
                  <Link to="AllNews">
                    <p className="read-more d-none d-lg-block mb-0">
                      Read More
                    </p>
                  </Link>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>tag-1</span>
                    ,
                    <span>tag-2</span>
                    ,
                    <span>tag-3</span>
                    ,
                    <span>tag-4</span>
                    ,
                    <span>tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={12}
          className="mt-5 h-100 d-flex justify-content-center d-sm-block"
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
                <div className="w-518">
                  <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                    <span>16/07/2021 </span>
                    {' '}
                    16/07/2021
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-xl-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis
                      venenatis aliquet eros, non feugiat tortor semper sed.
                      In diam risus, efficitur sit amet dolor vitae, finibus
                      tristique arcu finibus tristique arcu finibus tristique
                      arcu finibus tristique arcu. Proin dui erat, pulvinar ac
                      felis eget, mollis rhoncus nunc.
                    </p>
                  </p>
                  <Link to="AllNews">
                    <p className="read-more d-none d-lg-block mb-0">
                      Read More
                    </p>
                  </Link>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>tag-1</span>
                    ,
                    <span>tag-2</span>
                    ,
                    <span>tag-3</span>
                    ,
                    <span>tag-4</span>
                    ,
                    <span>tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={12}
          className="mt-5 h-100 d-flex justify-content-center d-sm-block"
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
                <div className="w-518">
                  <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                    <span>16/07/2021 </span>
                    {' '}
                    16/07/2021
                  </p>
                  <p className="heading-stock fs-md-25 fs-sm-20 articles-title">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para d-none  d-xl-block">
                    <p className="mb-0 dots">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.Duis
                      venenatis aliquet eros, non feugiat tortor semper sed.
                      In diam risus, efficitur sit amet dolor vitae, finibus
                      tristique arcu finibus tristique arcu finibus tristique
                      arcu finibus tristique arcu. Proin dui erat, pulvinar ac
                      felis eget, mollis rhoncus nunc.
                    </p>
                  </p>
                  <Link to="AllNews">
                    <p className="read-more d-none d-lg-block mb-0">
                      Read More
                    </p>
                  </Link>

                  <p className="small-paragraph d-none d-xl-block mb-0">
                    <span>tag-1</span>
                    ,
                    <span>tag-2</span>
                    ,
                    <span>tag-3</span>
                    ,
                    <span>tag-4</span>
                    ,
                    <span>tag-5</span>
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AllNews;
