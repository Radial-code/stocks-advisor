import moment from "moment";
import React from "react";
import { withRouter } from "react-router";
import img_1 from "../../assets/img/calendar-icon.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const NewsArticlesListItem = ({ value, history }) => {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  return (
    <>
      <div className="pr-15">
        <div className="profile-box mt-5 hover-anim mb-3 p-0 d-flex justify-content-center flex-column">
          <img className="w-100 home-slider" src={value.imagePath} alt="" />
          <div className="p-3">
            <p className="text-end stock-paragraph">
              {" "}
              <span
                className={` ${
                  layoutClickChanger
                    ? "d-flex justify-content-end align-items-center"
                    : "d-flex  align-items-center"
                } `}
              >
                <span className="d-flex justify-content-end px-2">
                  <img className="w-19 h-19" src={img_1} alt="" />
                </span>{" "}
                <span className="cursor-pointer">
                  {moment(value.createdAt).format("DD/MMM/YYYY")}
                </span>
              </span>
            </p>
            <h3 className="news-heading-font text-end Slider-Ellipse" dir="ltr">
              {value.title ? value.title : "N/A"}
            </h3>
            <p className="stock-paragraph text-end Slider-Ellipse" dir="ltr">
              {value.description}
            </p>
            <p
              onClick={() => history.push(`/news/details/${value._id}`)}
              className={` ${
                layoutClickChanger
                  ? "read-more text-end cursor-pointer"
                  : "read-more  cursor-pointer"
              } `}
            >
              Read More...
            </p>
            <p
              onClick={() =>
                history.push(`/stock/news/${value.stock._id}/${value.tags}`)
              }
              className="small-paragraph d-none d-lg-block mb-0 cursor-pointer fw-bold"
            >
              <span>{value.tags}</span>
            </p>
            <p
              className={` ${
                layoutClickChanger
                  ? "small-paragraph text-end"
                  : "small-paragraph "
              } `}
            >
              <span className=" cursor-pointer fw-bold">Stock :</span>
              <span
                onClick={() =>
                  history.push(`/stock/news/${value.stock._id}/stock-tags`)
                }
                className="cursor-pointer fw-bold"
              >
                {value.stock.symbol}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(NewsArticlesListItem);
