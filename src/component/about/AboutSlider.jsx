/* eslint-disable import/order */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Team from '../../assets/img/team_1.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
  };
  return (
    <>
      <h1 className="mt-5 section-heading">Team</h1>
      <Slider dir="ltr" className="about-slider" {...settings}>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
        <div className="  profile-box">
          <div className="d-flex justify-content-end   align-items-center ">
            <img className="w-126 order-2" src={Team} alt="" />
            {' '}
            <div className="me-3 d-flex order-1  flex-column">
              <h4 className="profile-heading">Jhone Doe</h4>
              <p className="profile-heading font-xs text-end">Manager</p>
            </div>
          </div>
          <p className="stock-paragraph text-end   mt-3">
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
            Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu enim.
          </p>
        </div>
      </Slider>
    </>
  );
};

export default AboutSlider;
