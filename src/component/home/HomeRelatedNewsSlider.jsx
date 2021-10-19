import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../common/slider.css";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { NewsArticlesList } from "./RelatedNewsArticlesList";

const HomeRelatedNewsSlider = ({ loader, history }) => {
  const newsListData = useSelector((state) => state.cmPanel.homeNewsList);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

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
          <h1 className="profile-heading py-3">Other News Articles</h1>
          {!loader ? (
            <Slider {...settings}>
              {newsListData.map((news, index) => {
                return <NewsArticlesList news={news} index={index} />;
              })}
            </Slider>
          ) : null}
          <div className="d-flex pt-3 pb-5 mt-4 justify-content-center ">
            <button
              className="default-btn"
              onClick={() => history.push("/news")}
            >
              View All News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(HomeRelatedNewsSlider);
