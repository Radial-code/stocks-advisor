import React from "react";
import Slider from "react-slick";
import NewsArticlesListItem from "./NewsArticlesListItem";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const NewsArticles = ({ history }) => {
  const newsListData = useSelector((state) => state.cmPanel.homeNewsList);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          innerWidth: 200,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          innerWidth: 200,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  console.log("newsListData", newsListData);
  return (
    <>
      <div className="container p-left-right">
        <h1 className="profile-heading ">Other News Articles</h1>

        <div className="row ">
          <div className="col-12">
            <Slider
              className="about-slider-2 d-flex align-items-center"
              {...settings}
            >
              {newsListData &&
                newsListData.length &&
                newsListData.map((obj) => <NewsArticlesListItem news={obj} />)}
            </Slider>
          </div>
        </div>
        <div className="d-flex pt-3 pb-5 mt-4 justify-content-center ">
          <button className="default-btn" onClick={() => history.push("/news")}>
            View All News
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewsArticles);

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
      className="prev d-sm-flex justify-content-center d-none d-sm-block align-items-center"
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
