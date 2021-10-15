import React from "react";
import Slider from "react-slick";
import NewsSlider from "../../assets/img/newsArticles_1.png";
import newsImg from "../../assets/img/newsArticles_1.png";
import { useSelector } from "react-redux";
import CalenderIcon from "../../assets/img/calendar-icon.png";
import { withRouter } from "react-router";
import moment from "moment";

const DummySlider = ({ history }) => {
  const newsListData = useSelector((state) => state.cmPanel.homeNewsList);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col my-4">
          <h1 className="profile-heading py-3">Other News Articles</h1>
          <Slider
            className="about-slider-2 d-flex align-items-center"
            {...settings}
          >
            {newsListData &&
              newsListData.length &&
              newsListData.map((obj) => (
                <NewsArticlesList news={obj} history={history} />
              ))}
          </Slider>

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

export default withRouter(DummySlider);

export const NewsArticlesList = ({ news, history }) => {
  const { imagePath, createdAt, title, description, _id, tags, stock } = news;

  return (
    <>
      <div className="my-3">
        <div className="news-slider-wrapper">
          <img className="w-100 h-100" src={imagePath} alt="newsImg" />
          <div className="news-wrapper-bottom-section">
            <p className="text-end stock-paragraph cursor-pointer">
              <img
                className="w-19 h-19 d-inline-block"
                src={CalenderIcon}
                alt="CalenderIcon"
              />
              <span> {moment(createdAt).format("DD/MMM/YYYY")}</span>
            </p>

            <h4 className="news-heading-font text-end">
              <span className="text-ellipsis-dots">
                {title ? title : "N/A"}
              </span>
            </h4>
            <p className="text-ellipsis-three-line stock-paragraph text-end">
              <span>{description}</span>
            </p>
            <p
              className="text-end cursor-pointer"
              onClick={() => history.push(`/news/details/${_id}`)}
            >
              {" "}
              <span className="read-more ">Read More...</span>
            </p>
            <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
              {tags}
            </p>
            <p className="small-paragraph text-end">
              <span className=" cursor-pointer fw-bold">Stock :</span>
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
