import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../common/slider.css";
import SearchNews from "../../assets/img/searchnews.png";
import { withRouter } from "react-router-dom";
import StockSliderCard from "./StockSliderCard";

const StockSoldSlider = ({
  loader,
  getValueOf,
  soldStockNewsList,
  layoutClickChanger,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,

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
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            {soldStockNewsList && soldStockNewsList !== 0 ? (
              <>
                {soldStockNewsList &&
                  soldStockNewsList.length < 4 &&
                  soldStockNewsList.map((value, index) => {
                    return (
                      <StockSliderCard
                        soldValue={value}
                        index={index}
                        getValueOf={getValueOf}
                        layoutClickChanger={layoutClickChanger}
                      />
                    );
                  })}{" "}
              </>
            ) : (
              <>
                {" "}
                <img
                  className="searchnews mx-auto d-block"
                  src={SearchNews}
                  alt=""
                />{" "}
                <h4 className="text-center">
                  {getValueOf("You don't have any News")}{" "}
                </h4>{" "}
              </>
            )}
          </div>

          {!loader ? (
            <Slider
              className={`${
                soldStockNewsList.length > 3
                  ? "other_new_articles d-flex align-items-center"
                  : "other_new_articles d-block align-items-center"
              }`}
              {...settings}
            >
              {soldStockNewsList &&
                soldStockNewsList.length > 3 &&
                soldStockNewsList.map((value, index) => {
                  return (
                    <StockSliderCard
                      soldValue={value}
                      index={index}
                      getValueOf={getValueOf}
                      layoutClickChanger={layoutClickChanger}
                    />
                  );
                })}
            </Slider>
          ) : (
            <>
              {" "}
              <img
                className="searchnews mx-auto d-block"
                src={SearchNews}
                alt=""
              />{" "}
              <h4 className="text-center">
                {getValueOf("You don't have any News")}{" "}
              </h4>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default withRouter(StockSoldSlider);
