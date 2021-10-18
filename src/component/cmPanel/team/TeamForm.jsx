import React from "react";
import { Col, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
const TeamForm = () => {
  return (
    <Col className="d-flex justify-content-lg-end">
      <section className="user-panel-card w-xl-1000 p-sm-4  pt-5">
        <div className="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column">
          <p className="heading-stock fs-sm-20 fs-sm-20">Add Team</p>
          <div>
            <Link to="/content/manager/team/cards" className="add-new-btn">
              <button className="update-btn">Back</button>
            </Link>
          </div>
        </div>
        <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-2">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
              </div>
              <div className="col-12 col-lg-6 mb-3 ">
                <div className="inputs-border   d-flex justify-content-between align-items-center py-2 ps-1 pe_12">
                  <span className="small-paragraph d-none d-sm-block Ellipse">
                    Image Link
                  </span>

                  <span className="small-paragraph d-block d-sm-none Ellipse">
                    Image Link
                  </span>

                  <input type="file" value="" id="my-file" hidden />

                  <button className="upload-img-btn2 d-none d-sm-block cursor-pointer">
                    <label className="cursor-pointer" for="my-file">
                      Upload Image
                    </label>
                  </button>
                  <button className="upload-img-btn d-block d-sm-none cursor-pointer">
                    <label className="cursor-pointer" for="my-file">
                      Upload
                    </label>
                  </button>
                </div>
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                  name=""
                  id=""
                  cols=""
                  rows="6"
                  placeholder="...Description "
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-sm-start align-items-center flex-sm-row flex-column">
              <div className="add-new-btn w-100">
                <button className="update-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Col>
  );
};

export default TeamForm;
