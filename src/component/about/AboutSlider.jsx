import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import NoDataImg from "../../assets/img/emptydata.jpg";
const AboutSlider = () => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const teamList = useSelector((state) => state.list.teamList);
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="mt-5 pt-5 section-heading fs-sm-22">Team</h1>
      {teamList && teamList.length !== 0 ? (
        <>
          <div className="row">
            {teamList && teamList.length < 4
              ? teamList.map((value, index) => {
                  return (
                    <div className="col-lg-4  col-md-6 col-12 mt-3 mt-md-0   ">
                      <div className="d-flex justify-content-center w-100  fl pr-15 d-sm-block">
                        <div className="profile-box mx-2 w-100 p-3">
                          <div>
                            <div
                              className={`${
                                layoutClickChanger
                                  ? "d-flex align-items-center flex-row-reverse"
                                  : "d-flex align-items-center"
                              }`}
                            >
                              <img
                                key={index}
                                className="w-100px w-sm-lg-90   w-xs-95"
                                src={value.profileImagePath}
                                alt=""
                              />
                              <div className="me-3 d-flex  flex-column pr-15">
                                <h4 className="profile-heading fs-xs-19  fs-992-1200-19">
                                  {value.name}
                                </h4>
                                <p className="profile-heading font-xs text-end">
                                  {value.post}
                                </p>
                              </div>
                            </div>
                          </div>

                          <p
                            className={`${
                              layoutClickChanger
                                ? "stock-paragraph about-slider text-center text-sm-end fs-sm-14 mt-3"
                                : ""
                            }`}
                          >
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>

          <Slider
            dir="rtl"
            className={` ${
              layoutClickChanger
                ? "about-slider-4 mt-4"
                : "about-slider-english mt-4"
            } `}
            {...settings}
          >
            {teamList && teamList.length > 3
              ? teamList.map((value, index) => {
                  return (
                    <div className="d-flex justify-content-center  fl pr-15 d-sm-block">
                      <div className="profile-box mx-2 p-3">
                        <div>
                          <div
                            className={`${
                              layoutClickChanger
                                ? "d-flex align-items-center flex-row-reverse"
                                : "d-flex align-items-center"
                            }`}
                          >
                            <img
                              key={index}
                              className="w-126 w-sm-lg-90   w-xs-95"
                              src={value.profileImagePath}
                              alt=""
                            />
                            <div className="me-3 d-flex  flex-column pr-15">
                              <h4 className="profile-heading fs-xs-19  fs-992-1200-19">
                                {value.name}
                              </h4>
                              <p className="profile-heading font-xs text-end">
                                {value.post}
                              </p>
                            </div>
                          </div>
                        </div>

                        <p
                          className={`${
                            layoutClickChanger
                              ? "stock-paragraph about-slider text-center text-sm-end fs-sm-14 mt-3"
                              : ""
                          }`}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              : null}
          </Slider>
        </>
      ) : (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <img
            className="nodata-img  mx-auto d-inline-block"
            src={NoDataImg}
            alt="NoDataImg "
          />
          <h4 className="py-3 fw-bold text-sm-start text-center">
            You don't have any Team Members
          </h4>
        </div>
      )}
    </>
  );
};

export default AboutSlider;
