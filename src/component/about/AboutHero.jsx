/* eslint-disable react/button-has-type */
import React from 'react';
import heroImg from '../../assets/img/aboutUs-hero.png';

const AboutHero = () => (
  <>
    <div className="container py-5">
      <div className="row justify-content-between align-items-center justify-content-between">
        <div className="col-6">
          <h2 className="stock-heading">
            Quisque maximus, orci at
            {' '}
            <span className="text-5CBD4C">pharetra </span>
            {' '}
            feugiat de
          </h2>
          <button className="default-btn mt-4">Know More</button>
        </div>
        <div className="col-6">
          <img className="w-100" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  </>
);

export default AboutHero;
