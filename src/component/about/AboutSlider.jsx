import React from "react";
import Team from "../../assets/img/team_1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const AboutSlider = () => {
  const settings = {
    dots: false,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
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
  };
  return (
    <>
      <h1 className="mt-5 pt-5 section-heading fs-sm-22">Team</h1>
      <Slider dir="rtl" className="about-slider-4 mt-4" {...settings}>
        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center fl pr-15 d-sm-block">
          <div className="  profile-box">
            <div className=" d-none d-sm-block">
              <div className="d-flex align-items-center flex-row-reverse">
                <img className="w-126" src={Team} alt="" />{" "}
                <div className="me-3 d-flex  flex-column pr-15">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column d-sm-none align-items-center mt-4">
              <img className="team-img " src={Team} alt="" />{" "}
              <div className="me-3 d-flex   flex-column mt-3">
                <h4 className="profile-heading fs-sm-15">Jhone Doe</h4>
                <p className="profile-heading font-xs text-center fs-sm-11">
                  Manager
                </p>
              </div>
            </div>
            <p className="stock-paragraph text-center text-sm-end fs-sm-14 mt-3">
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
              Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default AboutSlider;
