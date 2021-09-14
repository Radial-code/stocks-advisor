import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const StockArticles = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <p className="profile-heading">Related News Articles</p>
          </Col>
          <Col xs={12}>
            <section>
              <div className="d-flex pl-20">
                <div className="stock-articles-img">
                  <img className="w-100" src="" alt="" />
                </div>
                <div>
                  <p className="stock-paragraph">
                    {" "}
                    <span>16/07/2021 </span> 16/07/2021
                  </p>
                  <p className="heading-stock">
                    Duis sed augue eu augue ornare augue ornare porta
                  </p>
                  <p className="stock-paragraph max-w-para">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu finibus tristique arcu
                    finibus tristique arcu. Proin dui erat, pulvinar ac felis
                    eget, mollis rhoncus nunc.Duis venenatis aliquet eros, non
                    feugiat tortor semper sed. In diam risus, efficitur sit amet
                    dolor vitae, finibus tristique arcu finibus tristique arcu
                    finibus tristique arcu finibus tristique arcu. Proin dui
                    erat, pulvinar ac felis eget, mollis rhoncus nunc.
                  </p>
                  <p className="read-more">Read More</p>
                  <p className="small-paragraph">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StockArticles;
