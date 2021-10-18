import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { SoldStockSlider } from "./SoldStockSlider";

const StockSoldSlider = () => {
  const soldStockNewsList = useSelector(
    (state) => state.list.soldStockNewsList
  );
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
        {/* {soldStockNewsList &&
          soldStockNewsList.length &&
          soldStockNewsList.map((value) => {
            return (
              <>
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
                <SoldStockSlider soldValue={value} />
              </>
            );
          })} */}
        <SoldStockSlider />
        <SoldStockSlider />
        <SoldStockSlider />
        <SoldStockSlider />
        <SoldStockSlider />
        <SoldStockSlider />
      </Slider>
    </>
  );
};

export default StockSoldSlider;

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
