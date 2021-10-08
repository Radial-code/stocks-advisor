import React from "react";
import Slider from "react-slick";
import img_1 from "../../assets/img/calendar-icon.png";
import BubblesLoader from "../common/BubblesLoader";
import { useSelector } from "react-redux";
import moment from "moment";

const HomePageSlider = ({ loading }) => {
  const homeNewsList = useSelector((state) => state.cmPanel.homeNewsList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };

  console.log("homeNewsList", homeNewsList);

  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <Slider className="hero-slider-2 w-100" {...settings}>
          {homeNewsList.map((value, index) => {
            return (
              <div key={index}>
                <img
                  className="w-100 slider-img"
                  src={value.imagePath}
                  alt=""
                />
                <p className="text-end stock-paragraph mt-3">
                  {" "}
                  <span className="d-flex justify-content-end align-items-center">
                    {" "}
                    <span className="d-flex justify-content-end px-2">
                      <img className="w-19 h-19" src={img_1} alt="" />{" "}
                    </span>{" "}
                    <span className="cursor-pointer">
                      {moment(value.createdAt).format("ddd/MM/yyyy")}{" "}
                    </span>{" "}
                  </span>{" "}
                </p>
                <h6 className="text-end heading-stock">
                  {value.title ? value.title : "N/A"}{" "}
                </h6>
                <p className="text-end parargraph-stock pt-sm-2  ps-sm-5">
                  {value.description}{" "}
                </p>
                <p className="text-end read-more cursor-pointer">
                  Read More...{" "}
                </p>{" "}
                <p className="small-paragraph text-end">
                  <span>{value.tags}</span>{" "}
                </p>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
};
export default HomePageSlider;
