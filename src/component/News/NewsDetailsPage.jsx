import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import moment from "moment";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import BubblesLoader from "../common/BubblesLoader";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import NoImg from "../../assets/img/no-image.png";
import draftToHtml from "draftjs-to-html";
const NewsDetailsPage = ({ history, loading }) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const newsDetails = useSelector((state) => state.userPanel.newsDetails);
  console.log(newsDetails);
  const { description } = newsDetails;
  const contentHandler = () => {
    console.log(typeof description, description);
    if (description) {
      return {
        __html: description,
      };
    }
  };
  return (
    <div className="col-xl-8  col-lg-10 d-flex justify-content-center d-sm-block">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <div className="profile-box-2 w-xs-303 p-4 h-100">
          <div className=" my-3">
            {newsDetails && newsDetails.link ? (
              newsDetails.link.includes("youtube") ? (
                <ReactPlayer
                  url={newsDetails && newsDetails.link}
                  controls
                  playbackRate={2}
                  width="100%"
                  height="504px"
                />
              ) : (
                <img
                  className="w-100"
                  src={newsDetails && newsDetails.link}
                  alt="news"
                />
              )
            ) : null}
            <h6
              className={` ${
                layoutClickChanger
                  ? "text-end section-heading mt-4 fs-sm-18"
                  : "section-heading mt-4 fs-sm-18"
              } `}
            >
              {layoutClickChanger ? (
                <>
                  {newsDetails && newsDetails.atitle
                    ? newsDetails.atitle
                    : "N/A"}
                </>
              ) : (
                <>
                  {newsDetails && newsDetails.title ? newsDetails.title : "N/A"}
                </>
              )}
            </h6>
            <p
              onClick={() =>
                history.push(
                  `/stock/news/${newsDetails.stock._id}/${newsDetails.tags}`
                )
              }
              className="small-paragraph d-none dots-data d-lg-block mb-0 cursor-pointer fw-bold mt-3 mb-3 color-blue"
            >
              {layoutClickChanger ? (
                <span className="color-blue">
                  {newsDetails && newsDetails.atags ? newsDetails.atags : ""}
                </span>
              ) : (
                <span className="color-blue">
                  {newsDetails && newsDetails.tags ? newsDetails.tags : ""}
                </span>
              )}
            </p>
            {newsDetails &&
            newsDetails.stock &&
            newsDetails.stock.chartData &&
            newsDetails.stock.chartData.name ? (
              <p
                className={`${
                  layoutClickChanger
                    ? "small-paragraph text-end"
                    : "small-paragraph"
                }`}
              >
                <span className="cursor-pointer fw-bold color-blue">
                  {getValueOf("Stock")} :
                </span>
                <span
                  onClick={() =>
                    history.push(
                      `/stock/news/${newsDetails.stock._id}/stock-tags`
                    )
                  }
                  className="cursor-pointer fw-bold color-blue"
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
            ) : (
              ""
            )}
            <p
              className={`${
                layoutClickChanger
                  ? "text-end stock-paragraph mt-3 fs-sm-13"
                  : "stock-paragraph mt-3 fs-sm-13"
              }`}
            >
              {moment(newsDetails.createdAt).format("DD/MMM/YYYY")}
            </p>
          </div>
          <div className="row">
            <div className="col-xl-6 col-xxl-7">
              <p className="stock-paragraph m-0 max-w-546 fs-sm-14">
                {layoutClickChanger ? (
                  <>
                    {newsDetails && newsDetails.adescription
                      ? newsDetails.adescription
                      : "N/A"}
                  </>
                ) : (
                  <>
                    {newsDetails && newsDetails.description ? (
                      <p
                        dangerouslySetInnerHTML={
                          description && contentHandler()
                        }
                      />
                    ) : (
                      "N/A"
                    )}
                  </>
                )}
              </p>
              {newsDetails.imagePath === "" ? (
                <img className="newsImg-slider" src={NoImg} alt="news Image" />
              ) : (
                <img
                  className="newsImg-slider"
                  src={
                    newsDetails && newsDetails.imagePath
                      ? newsDetails.imagePath
                      : "N/A"
                  }
                  alt="news Image"
                />
              )}
            </div>

            {/* <div className="col-xl-6  col-xxl-5 mt-5 mt-xl-0"> */}
            {/* <img
                className=" w-100 object-fit-cover h-xs-276 h-sm-xl-500 h-xxl-275 "
                src={
                  newsDetails && newsDetails.imagePath
                    ? newsDetails.imagePath
                    : "N/A"
                }
                alt="news Image"
              /> */}
            {/* <img
                className="newsImg-slider"
                src={
                  newsDetails && newsDetails.imagePath
                    ? newsDetails.imagePath
                    : "N/A"
                }
                alt="news Image"
              />
            </div> */}

            <div className="col-12 mt-5 mt-xl-0">
              <p className="stock-paragraph mt-2 fs-sm-14">
                {layoutClickChanger ? (
                  <>
                    {newsDetails && newsDetails.adescription
                      ? newsDetails.adescription
                      : "N/A"}
                  </>
                ) : (
                  <>
                    {newsDetails && newsDetails.description
                      ? newsDetails.description
                      : "N/A"}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(NewsDetailsPage);
