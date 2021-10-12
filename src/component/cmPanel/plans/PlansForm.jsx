import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import { addNewPlansDetailsAction } from "../../../redux/action/cmPanel/plans";

function PlansForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [planDetails, setPlanDetails] = useState({
    title: "",
    price: "",
    type: "",
    details: "",
  });

  const submitPlanDetails = () => {
    tags.map((item) => {
      planDetails.details += `${item},`;
    });
    if (
      planDetails.title !== "" &&
      planDetails.price !== "" &&
      planDetails.type !== "" &&
      planDetails.details !== ""
    ) {
      dispatch(addNewPlansDetailsAction(planDetails, setLoading));
    }
  };

  return (
    <div>
      <div className="col-12 h-100 stock-add-new">
        <div className="add-stock-bg p-sm-5 p-3 mt-5  w-xl-1000">
          <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
            <h1 className="current-stock-text ff-popins mb-sm-0 mb-3 fs-sm-20">
              Add New Plans
            </h1>
            <Link to="/content/manager/our/plans/details">
              <button className="update-btn-2 ">Back</button>
            </Link>
          </div>
          <Form className="pt-sm-5  pt-4">
            <div className="row">
              <div className="col-md-6 order-1 last-name order-sm-1 order-2">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        price: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 order-1 last-name order-sm-1 order-2">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        title: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <FormGroup className=" add-new-stock-select mb-3 cursor-pointer">
                  <select
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        type: e.target.value,
                      });
                    }}
                    className="form-select text-end cursor-pointer"
                  >
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </FormGroup>
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

            <div className="d-flex flex-sm-row flex-column">
              <button
                onClick={() => submitPlanDetails()}
                type="button"
                disabled={loading}
                className="update-btn my-3 ff-popins"
              >
                {loading ? <Loader /> : "Add"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PlansForm;
