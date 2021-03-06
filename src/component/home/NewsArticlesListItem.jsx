import React from "react";
import img_1 from "../../assets/img/calendar-icon.png";
import moment from "moment";
import { withRouter } from "react-router";

const NewsArticlesListItem = ({
  news,
  history,
  getValueOf,
  layoutClickChanger,
}) => {
  const { createdAt, title, description, _id, tags, stock, description } = news;

  const contentHandler = (value) => {
    return {
      __html: value,
    };
  };

  return (
    <>
      <div className="d-flex justify-content-center d-md-block pr-15">
        <div className="profile-box mt-5 hover-anim mb-3 p-0 d-flex justify-content-center flex-column">
          <div className="p-3">
            <p className="text-end stock-paragraph Slider-Ellipse">
              <span className="d-flex justify-content-end align-items-center">
                <span className="d-flex justify-content-end px-2">
                  <img className="w-19 h-19" src={img_1} alt="" />
                </span>
                <span className="cursor-pointer">
                  {moment(createdAt).format("DD/MMM/YYYY")}
                </span>
              </span>
            </p>
            <h3 className="news-heading-font text-end Slider-Ellipse">
              {layoutClickChanger
                ? atitle
                  ? atitle
                  : "N/A"
                : title
                ? title
                : "N/A"}
            </h3>
            <p className="stock-paragraph text-end Slider-Ellipse">
              {layoutClickChanger ? (
                <p
                  dangerouslySetInnerHTML={
                    !!adescription ? contentHandler(adescription) : "N/A"
                  }
                />
              ) : (
                <p
                  dangerouslySetInnerHTML={
                    !!description ? contentHandler(description) : "N/A"
                  }
                />
              )}{" "}
            </p>
            <p
              className="read-more text-end cursor-pointer"
              onClick={() => history.push(`/news/details/${_id}`)}
            >
              {getValueOf("Read More")}
            </p>
            <p
              class="small-paragraph text-end Slider-Ellipse cursor-pointer"
              onClick={() =>
                history.push(`/stock/news/${value.stock._id}/${value.tags}`)
              }
            >
              {layoutClickChanger ? (atags ? atags : "") : tags ? tags : ""}
            </p>
            <p className={`small-paragraph text-end Slider-Ellipse`}>
              <span className=" cursor-pointer fw-bold">
                {getValueOf("Stock")} :
              </span>
              <span
                onClick={() =>
                  history.push(`/stock/news/${stock._id}/stock-tags`)
                }
                className="cursor-pointer fw-bold"
              >
                {stock.symbol}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewsArticlesListItem);
