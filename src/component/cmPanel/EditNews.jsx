/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Buket from '../../assets/img/backet.png';

import '../cmPanelCss/News.css';

const EditNews = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [firstDate, setFirstDate] = useState('');
  return (
    <div>
      <div className="conatiner">
        <div className="row manger-panel-shadow mt-5 p-5 w-xl-1000">
          <p className="heading-stock d-none d-sm-block">Add New News</p>
          <p className="heading-stock d-block d-sm-none">Add News</p>
          <div className="col-12 col-lg-6 mb-3">
            <input
              className="form-control  small-paragraph inputs-border p_16_20"
              type=""
              placeholder="Title"
            />
          </div>
          <div className="col-lg-6 col-12  datepicker-input position-relative ">
            <DatePicker
              placeholderText="Date"
              className="mb-3"
              selected={firstDate}
              onChange={(date) => setFirstDate(date)}
            />
            <img
              className="position-absolute bucket-img"
              src={Buket}
              alt="Buket"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3 ">
            <div className="inputs-border   d-flex justify-content-between align-items-center py-1 ps-1 pe_12">
              <span className="small-paragraph d-none d-sm-block">
                YouTube Video/ Image Link
              </span>
              <span className="small-paragraph d-block d-sm-none">
                {' '}
                Video/ Image Link
              </span>
              <input type="file" value="" id="my-file" hidden />
              <button className="upload-img-btn d-none d-sm-block">
                <label htmlFor="my-file">Upload Image</label>
              </button>
              <button className="upload-img-btn d-block d-sm-none">
                <label htmlFor="my-file">Upload</label>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field h-100 inputs-border padding-select pb-12 small-paragraph"
              name=""
              id=" "
            >
              <option className="small-paragraph">Tags</option>
              <option className="small-paragraph" value="1">
                One
              </option>
              <option className="small-paragraph" value="2">
                Two
              </option>
              <option className="small-paragraph" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field   inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph">Select Stock</option>
              <option className="small-paragraph" value="1">
                One
              </option>
              <option className="small-paragraph" value="2">
                Two
              </option>
              <option className="small-paragraph" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph">Select Exchange</option>
              <option className="small-paragraph" value="1">
                One
              </option>
              <option className="small-paragraph" value="2">
                Two
              </option>
              <option className="small-paragraph" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <input
              className="form-control small-paragraph inputs-border p_16_20"
              type=""
              placeholder="Updated By"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <input
              className="form-control small-paragraph inputs-border p_16_20"
              type=""
              placeholder="Wrote By"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3 d-none d-lg-block" />
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph ">Select Portfolios</option>
              <option className="small-paragraph" value="1">
                One
              </option>
              <option className="small-paragraph" value="2">
                Two
              </option>
              <option className="small-paragraph" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 mb-3">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              name=""
              id=""
              cols=""
              rows="6"
              placeholder="Text "
            />
          </div>
          <div className="col-auto mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label check-box-text "
                htmlFor="flexCheckDefault"
              >
                Feature on homepage
              </label>
            </div>
          </div>
          <div className=" ">
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
