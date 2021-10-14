import React from "react";
import HomepageSlider from "../../assets/img/HomepageSlider.png";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";

const NewsDetailsPage = ({ history }) => {
  const newsDetails = useSelector((state) => state.userPanel.newsDetails);
  return (
    <div className="col-xl-8  col-lg-10 d-flex justify-content-center d-sm-block">
      <div className="profile-box-2 w-xs-303">
        <div className=" my-3">
          <img className="w-100 h-xs-171" src={HomepageSlider} alt="" />

          <h6 className="text-end section-heading mt-4 fs-sm-18">
            {newsDetails && newsDetails.title ? newsDetails.title : "N/A"}
          </h6>
          <p
            onClick={() =>
              history.push(
                `/stock/news/${newsDetails.stock._id}/${newsDetails.tags}`
              )
            }
            className="small-paragraph d-none d-lg-block mb-0 cursor-pointer fw-bold"
          >
            <span>{newsDetails.tags}</span>
          </p>
          <p className="small-paragraph text-end">
            <span className="ps-1 cursor-pointer fw-bold">Stock :</span>
            <span
              onClick={() =>
                history.push(`/stock/news/${newsDetails.stock._id}/stock-tags`)
              }
              className="cursor-pointer fw-bold"
            >
              {newsDetails &&
              newsDetails.stock &&
              newsDetails.stock.chartData &&
              newsDetails.stock.chartData.name
                ? newsDetails.stock.chartData.name
                : newsDetails.stock && newsDetails.stock.symbol
                ? newsDetails.stock.symbol
                : "N/A"}
            </span>
          </p>
          <p className="text-end stock-paragraph mt-4 fs-sm-13">
            {moment(newsDetails.createdAt).format("DD/MMM/YYYY")}
          </p>
        </div>
        <div className="row">
          <div className="col-xl-6 col-xxl-7">
            <p className="stock-paragraph m-0 max-w-546 fs-sm-14">
              {newsDetails && newsDetails.description
                ? newsDetails.description
                : "N/A"}
            </p>
          </div>

          <div className="col-xl-6 col-xxl-5 mt-5 mt-xl-0">
            <img
              className=" w-100"
              style={{ objectFit: "cover" }}
              src={
                newsDetails && newsDetails.imagePath
                  ? newsDetails.imagePath
                  : "N/A"
              }
              alt="news Image"
            />
          </div>

          <div className="col-12 mt-5 mt-xl-0">
            <p className="stock-paragraph mt-2 fs-sm-14">
              {newsDetails && newsDetails.description
                ? newsDetails.description
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(NewsDetailsPage);
