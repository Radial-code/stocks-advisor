import React, { useState } from "react";
import "./Hamburgur.css";
const Hamburgur = ({ setSidebarActive, sidebarActive }) => {
  const toggler = sidebarActive
    ? "sidebar-toggler sidebar-toggler-right collapsed"
    : "sidebar-toggler sidebar-toggler-right";
  return (
    <>
      <div
        className={` menu-hover  d-none d-md-block  `}
        onClick={() => setSidebarActive((preState) => !preState)}
      >
        <div></div>
        <div></div>
        <div></div>
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
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
      </div>
    </>
  );
};

export default Hamburgur;
