import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buket from "../../assets/img/backet.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import "../cmPanelCss/News.css";

const EditNews = () => {
  const { getValueOf } = useLayoutChangerProvider();
  const [firstDate, setFirstDate] = useState("");
  return (
    <div>
      <div className="conatiner">
        <div className="row manger-panel-shadow mt-5 p-5 w-xl-1000">
          <p className="heading-stock d-none d-sm-block">
            {getValueOf("Add New News")}
          </p>
          <p className="heading-stock d-block d-sm-none">
            {getValueOf("Add News")}
          </p>
          <div className="col-12 col-lg-6 mb-3">
            <input
              className="form-control  small-paragraph inputs-border p_16_20"
              type=""
              placeholder={getValueOf("Title")}
            />
          </div>
          <div className="col-lg-6 col-12  datepicker-input position-relative ">
            <DatePicker
              placeholderText={getValueOf("Date")}
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
                {getValueOf("YouTube Video/ Image Link")}
              </span>
              <span className="small-paragraph d-block d-sm-none">
                {getValueOf("Video/ Image Link")}
              </span>
              <input type="file" value="" id="my-file" hidden />
              <button className="upload-img-btn d-none d-sm-block">
                <label for="my-file">{getValueOf("Upload Image")}</label>
              </button>
              <button className="upload-img-btn d-block d-sm-none">
                <label for="my-file">{getValueOf("Upload")}</label>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field h-100 inputs-border padding-select pb-12 small-paragraph"
              name=""
              id=" "
            >
              <option className="small-paragraph">{getValueOf("Tags")}</option>
              <option className="small-paragraph" value="1">
                {getValueOf("One")}
              </option>
              <option className="small-paragraph" value="2">
                {getValueOf("Two")}
              </option>
              <option className="small-paragraph" value="3">
                {getValueOf("Three")}
              </option>
            </select>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field   inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph">
                {getValueOf("Select Stock")}
              </option>
              <option className="small-paragraph" value="1">
                {getValueOf("One")}
              </option>
              <option className="small-paragraph" value="2">
                {getValueOf("Two")}
              </option>
              <option className="small-paragraph" value="3">
                {getValueOf("Three")}
              </option>
            </select>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph">
                {getValueOf("Select Exchange")}
              </option>
              <option className="small-paragraph" value="1">
                {getValueOf("One")}
              </option>
              <option className="small-paragraph" value="2">
                {getValueOf("Two")}
              </option>
              <option className="small-paragraph" value="3">
                {getValueOf("Three")}
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
          <div className="col-12 col-lg-6 mb-3 d-none d-lg-block"></div>
          <div className="col-12 col-lg-6 mb-3">
            <select
              className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
              name=""
              id=""
            >
              <option className="small-paragraph ">
                {getValueOf("Select Portfolios")}
              </option>
              <option className="small-paragraph" value="1">
                {getValueOf("One")}
              </option>
              <option className="small-paragraph" value="2">
                {getValueOf("Two")}
              </option>
              <option className="small-paragraph" value="3">
                {getValueOf("Three")}
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
            ></textarea>
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
                for="flexCheckDefault"
              >
                {getValueOf("Feature on homepage")}
              </label>
            </div>
          </div>
          <div className=" ">
            <button className="add-btn">{getValueOf("Add")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
