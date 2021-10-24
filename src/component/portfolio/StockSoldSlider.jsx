import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../common/slider.css";
import SearchNews from "../../assets/img/searchnews.png";
import { withRouter } from "react-router-dom";
import StockSliderCard from "./StockSliderCard";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";

const StockSoldSlider = ({ loader }) => {
  const soldStockNewsList = useSelector(
    (state) => state.list.soldStockNewsList
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
    <>
      {soldStockNewsList === "" ? (
        <>
          {!loader ? (
            <Slider {...settings} className="stock-slider">
              {soldStockNewsList && soldStockNewsList.length
                ? soldStockNewsList.map((value, index) => {
                    return <StockSliderCard soldValue={value} index={index} />;
                  })
                : ""}
            </Slider>
          ) : (
            <div className="d-flex justify-content-center">
              <BubblesLoader />
            </div>
          )}
        </>
      ) : (
        <>
          <img className="searchnews mx-auto d-block" src={SearchNews} alt="" />
          <h4 className="text-center">You don't have any News</h4>
        </>
      )}
    </>
  );
};
export default withRouter(StockSoldSlider);
