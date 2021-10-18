import React from "react";
import Slider from "react-slick";
import UserImg from "../../assets/img/team_1.png";
import CalenderIcon from "../../assets/img/calendar-icon.png";
const StockSoldSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      <Slider
        className="about-slider-2 d-flex align-items-center"
        {...settings}
      >
        <SoldStockList />
        <SoldStockList />
        <SoldStockList />
        <SoldStockList />
        <SoldStockList />
        <SoldStockList />
        <SoldStockList />
      </Slider>
    </>
  );
};

export default StockSoldSlider;

export const SoldStockList = () => {
  return (
    <>
      <div className="my-3 ">
        <div className="news-slider-wrapper">
          <img className="w-100 h-100" src={UserImg} alt="newsImg" />
          <div className="news-wrapper-bottom-section">
            <p className="text-end stock-paragraph cursor-pointer">
              <img
                className="w-19 h-19 mx-2 d-inline-block"
                src={CalenderIcon}
                alt="CalenderIcon"
              />
              <span>16/02/2021</span>
            </p>

            <h4 className="news-heading-font text-end">
              <span className=" ">sdfghjk</span>
            </h4>
            <p className=" stock-paragraph text-end">
              <span>wsdcrgbnyjm</span>
            </p>
            <p className="text-end cursor-pointer">
              {" "}
              <span className="read-more ">Read More...</span>
            </p>
            <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
              tags1
            </p>
            <p className="small-paragraph text-end">
              <span className=" cursor-pointer fw-bold">Stock :</span>
              <span className="cursor-pointer fw-bold">dhhjahdhsd</span>
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
