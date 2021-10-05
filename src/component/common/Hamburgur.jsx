/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Hamburgur.css';

const Hamburgur = ({ setSidebarActive, sidebarActive }) => {
  const toggler = sidebarActive
    ? 'sidebar-toggler sidebar-toggler-right collapsed'
    : 'sidebar-toggler sidebar-toggler-right';
  return (
    <>
      <div
        className=" menu-hover  d-none d-md-block  "
        onClick={() => setSidebarActive((preState) => !preState)}
      >
        <div />
        <div />
        <div />
      </div>
      <div className="d-md-none">
        <button
          onClick={() => setSidebarActive((pre) => !pre)}
          className={toggler}
          type="button"
          data-toggle="collapse"
          data-target="#sidebarSupportedContent"
          aria-controls="sidebarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar top-bar" />
          <span className="icon-bar middle-bar" />
          <span className="icon-bar bottom-bar" />
        </button>
      </div>
    </>
  );
};

export default Hamburgur;
