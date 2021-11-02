import moment from "moment";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import img_2 from "../../assets/img/calendar-icon.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import BubblesLoader from "../common/BubblesLoader";

const NewsList = ({ history, value, index, loading }) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();

  return (
    <section className="news-articles-card  p-3 mb-4">
      {loading ? (
        <div className="d-flex justify-content-center ">
          <BubblesLoader />
        </div>
      ) : (
        <Row key={index} className="justify-content-between ">
          <Col xl={4} lg={4} xs={4}>
            <div className="stock-articles-img ">
              <img className="w-100 h-341" src={value.imagePath} alt="" />
            </div>
          </Col>
          <Col
            xl={8}
            sm={8}
            xs={8}
            className={`${layoutClickChanger ? "d-flex  " : "d-flex "}  `}
          >
            <div className="w-lg-518 mx-3">
              {layoutClickChanger ? (
                <>
                  <p className="stock-paragraph d-flex  mt-md-2 mt-lg-0 mb-0 fs-xs-14  articles-date">
                    {moment(value.createdAt).format("DD/MM/YY")}
                    <span className={`${layoutClickChanger ? "pe-2" : ""}`}>
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                  </p>
                </>
              ) : (
                <>
                  <p className="stock-paragraph d-flex  mt-md-2 mt-lg-0 mb-0 fs-xs-14  articles-date">
                    <span>
                      <img src={img_2} alt="" />{" "}
                    </span>{" "}
                    <span className={`${layoutClickChanger ? "" : "ps-2"}`}>
                      {" "}
                      {moment(value.createdAt).format("DD/MM/YY")}
                    </span>
                  </p>
                </>
              )}
              <p
                className={` ${
                  layoutClickChanger
                    ? "heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title ps-sm-5 "
                    : "heading-stock fs-md-25 fs-sm-20 fs-xs-15 articles-title"
                } `}
              >
                {value && value.title ? value.title : "N/A"}
              </p>
              <p className="stock-paragraph max-w-para d-none  d-md-block">
                <p className="mb-0 dots">
                  {value && value.description ? value.description : "N/A"}
                </p>
              </p>
              <p
                className="read-more  mb-0 cursor-pointer fs-xs-12"
                onClick={() => history.push(`/news/details/${value._id}`)}
              >
                {getValueOf("Read More")}
              </p>

              <p
                className="small-paragraph d-none d-xl-block mb-0 cursor-pointer fw-bold py-2 dots-class"
                onClick={() =>
                  history.push(`/stock/news/${value.stock._id}/${value.tags}`)
                }
              >
                {value && value.tags ? value.tags : "N/A"}
              </p>
              <p
                className={`${
                  layoutClickChanger
                    ? "small-paragraph text-end"
                    : "small-paragraph"
                } py-2`}
              >
                <span className="cursor-pointer small-paragraph fw-bold">
                  {getValueOf("Stock")}:
                </span>
                <span
                  className="cursor-pointer fw-bold pe-1"
                  onClick={() =>
                    history.push(`/stock/news/${value.stock._id}/stock-tags`)
                  }
                >
                  {value.stock && value.stock.symbol
                    ? value.stock.symbol
                    : "N/A"}
                </span>
              </p>
            </div>
          </Col>
        </Row>
      )}
    </section>
  );
};
export default withRouter(NewsList);
