import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buket from "../../assets/img/backet.png";
import { Container, Col, Row } from "react-bootstrap";

import "../cmPanelCss/News.css";
const AddNews = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <Container>
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <Row>
          <Col xs={12}>
            <div className="border-b-1 content-manager">
              <div className="d-flex justify-content-between">
                <p className="heading-stock pr-15">Content Manager</p>
                <span onClick={sideBarHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <div className="manger-panel-shadow p-5 w-xl-1000">
              <p className="heading-stock d-none d-sm-block">Add New News</p>
              <p className="heading-stock d-block d-sm-none">Add News</p>

              <div className="row">
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
                    {input !== "" ? (
                      <span className="small-paragraph d-none d-sm-block">
                        {input}
                      </span>
                    ) : (
                      <span className="small-paragraph d-none d-sm-block">
                        YouTube / Image Link
                      </span>
                    )}
                    {input !== "" ? (
                      <span className="small-paragraph d-block d-sm-none">
                        {input}
                      </span>
                    ) : (
                      <span className="small-paragraph d-block d-sm-none">
                        Video/ Image Link
                      </span>
                    )}

                    <input
                      onChange={(e) => setInput(e.target.value)}
                      type="file"
                      value=""
                      id="my-file"
                      hidden
                    />

                    <button className="upload-img-btn d-none d-sm-block">
                      <label for="my-file">Upload Image</label>
                    </button>
                    <button className="upload-img-btn d-block d-sm-none">
                      <label for="my-file">Upload</label>
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
                <div className="col-12 col-lg-6 mb-3 d-none d-lg-block"></div>
                <div className="col-12 col-lg-6 mb-3">
                  <select
                    className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
                    name=""
                    id=""
                  >
                    <option className="small-paragraph ">
                      Select Portfolios
                    </option>
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
                  ></textarea>
                </div>
                <div className="col-auto mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label check-box-text "
                      for="flexCheckDefault"
                    >
                      Feature on homepage
                    </label>
                  </div>
                </div>
              </div>
              <div className=" ">
                <button className="add-btn">Add</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNews;
