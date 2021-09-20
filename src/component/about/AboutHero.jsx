import React from "react";
import heroImg from "../../assets/img/aboutUs-hero.png";
const AboutHero = () => {
  return (
    <>
      <div className="container py-5  p-left-right">
        <div className="row justify-content-between align-items-center justify-content-between">
          <div className="col-lg-6 d-flex justify-content-center d-sm-block">
            <h2 className="stock-heading fs-sm-28 text-center text-sm-start fs-lg-35  w-sm-303">
              Quisque maximus, orci at{" "}
              <span className="text-5CBD4C">pharetra </span> feugiat de
            </h2>
            <button className="default-btn mt-4 d-none d-lg-block">
              Know More
            </button>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <img className="w-100" src={heroImg} alt="" />
            <div className="d-flex justify-content-center d-sm-block">
              <button className="default-btn mt-4 d-lg-none fs-sm-14">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
