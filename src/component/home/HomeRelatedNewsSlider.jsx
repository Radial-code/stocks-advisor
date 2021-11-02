import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../common/slider.css";
import SearchNews from "../../assets/img/searchnews.png";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedNewsArticlesList from "./RelatedNewsArticlesList";
import NoData from "../../assets/img/emptydata.jpg";

const HomeRelatedNewsSlider = ({ loader, history, getValueOf }) => {
  const newsListData = useSelector((state) => state.cmPanel.homeNewsList);
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          sliedesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col my-4">
          <h1 className="profile-heading py-3">
            {getValueOf("Other News Articles")}
          </h1>
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            {newsListData === "" ? (
              <>
                {newsListData &&
                  newsListData.length < 4 &&
                  newsListData.map((news, index) => {
                    return (
                      <RelatedNewsArticlesList
                        news={news}
                        index={index}
                        history={history}
                      />
                    );
                  })}{" "}
              </>
            ) : (
              <div className="d-flex  flex-column align-items-center">
                <img className=" nodata-img " src={NoData} alt=" NoData" />
                <h4 className="text-center fw-bold">
                  {getValueOf("You don't have any Related News")}
                </h4>
              </div>
            )}
          </div>

          {!loader ? (
            <Slider
              className={`${
                newsListData.length > 3
                  ? "other_new_articles d-flex align-items-center"
                  : "other_new_articles d-block align-items-center"
              }`}
              {...settings}
            >
              {newsListData &&
                newsListData.length > 3 &&
                newsListData.map((news, index) => {
                  return (
                    <RelatedNewsArticlesList
                      news={news}
                      index={index}
                      history={history}
                    />
                  );
                })}
            </Slider>
          ) : (
            <>
              <img
                className="searchnews mx-auto d-block"
                src={SearchNews}
                alt=""
              />
              <h4 className="text-center fw-bold">
                You don't have any Related News
              </h4>
            </>
          )}
          <div className="d-flex pt-3 pb-5 mt-4 justify-content-center ">
            <Link to="/news">
              <button className="default-btn">
                {getValueOf("View All News")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(HomeRelatedNewsSlider);
const Next = (props) => {
  const { style, onClick } = props;
  return (
    <button style={{ ...style }} onClick={onClick} className={`next`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
const Prev = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="prev d-sm-flex justify-content-center  align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
