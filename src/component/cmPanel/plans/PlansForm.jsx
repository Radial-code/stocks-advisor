import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import "@pathofdev/react-tag-input/build/index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import {
  addNewPlansDetailsAction,
  updatePlansDetailsAction,
} from "../../../redux/action/cmPanel/plans";
import { getPortfolioListAction } from "../../../redux/action/cmPanel/OurServices";
import BubblesLoader from "../../common/BubblesLoader";

function PlansForm({ history, edit, id }) {
  const dispatch = useDispatch();
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);
  const PlanDetailsList = useSelector((state) => state.list.planDetails);
  const [loading, setLoading] = useState(false);
  const [portfoliosLoader, setPortfoliosLoader] = useState(false);
  const [error, setError] = useState(false);
  const [planDetails, setPlanDetails] = useState({
    title: "",
    price: "",
    type: "",
    details: "",
    portfolios: [],
  });

  useEffect(() => {
    if (PlanDetailsList) {
      setPlanDetails({
        title: planDetails.title ? planDetails.title : PlanDetailsList.title,
        price: planDetails.price ? planDetails.price : PlanDetailsList.price,
        type: planDetails.type ? planDetails.type : PlanDetailsList.type,
        details: planDetails.details
          ? planDetails.details
          : PlanDetailsList.details,
      });
    }
  }, [PlanDetailsList]);

  const submitPlanDetails = () => {
    setError(true);
    if (planDetails.details !== "") {
      const data = planDetails.details.split("\n");
      data.map((item) => {
        planDetails.details += `${item},`;
      });
    }
    if (
      planDetails.title !== "" &&
      planDetails.price !== "" &&
      planDetails.type !== "" &&
      planDetails.details !== "" &&
      !!planDetails.portfolios.length
    ) {
      dispatch(addNewPlansDetailsAction(planDetails, setLoading, history));
    }
  };

  useEffect(() => {
    dispatch(getPortfolioListAction(setPortfoliosLoader));
  }, []);

  const data = [];
  const valueId = [];
  const selectPortfolio = (id) => {
    const ValidId = valueId.includes(id);
    if (data === []) {
      data.push({ portfolioId: id });
      valueId.push(id);
    } else if (!ValidId) {
      data.push({ portfolioId: id });
      valueId.push(id);
    } else {
      var index = data.indexOf({ portfolioId: id });
      data.splice(index, 1);
      var indexvalueId = valueId.indexOf({ portfolioId: id });
      valueId.splice(indexvalueId, 1);
    }
    planDetails.portfolios = data;
  };

  const UpdatePlanDetails = () => {
    if (!!id) {
      if (
        planDetails.title !== "" &&
        planDetails.price !== "" &&
        planDetails.type !== "" &&
        planDetails.details !== ""
      ) {
        dispatch(
          updatePlansDetailsAction(planDetails, id, setLoading, history)
        );
      }
    }
  };
  return (
    <div>
      <div className="col-12 h-100 stock-add-new">
        <div className="add-stock-bg p-sm-5 p-3   w-xl-1000">
          <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
            <h1 className="current-stock-text ff-popins mb-sm-0 mb-3 fs-sm-20">
              {edit ? "Update Plan" : "Add New Plans"}
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
                    value={planDetails.price}
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        price: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && planDetails.price === ""
                      ? "Price is required"
                      : null}
                  </span>
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
                    value={planDetails.title}
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        title: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && planDetails.title === ""
                      ? "Title is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <FormGroup className=" add-new-stock-select mb-3 cursor-pointer">
                  <select
                    value={planDetails.type}
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
                  <span className="text-danger">
                    {error && planDetails.type === ""
                      ? "Week is required"
                      : null}
                  </span>
                </FormGroup>
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                  placeholder="...Description "
                  value={planDetails.details}
                  onChange={(e) => {
                    setPlanDetails({
                      ...planDetails,
                      details: e.target.value,
                    });
                  }}
                ></textarea>
                <span className="text-danger">
                  {error && planDetails.details === ""
                    ? "Description is required"
                    : null}
                </span>
              </div>
              <p>Select portfolio list</p>
              {portfoliosLoader ? (
                <BubblesLoader />
              ) : (
                <>
                  {portfolioList && portfolioList.length
                    ? portfolioList.map((value, index) => {
                        return (
                          <div className="col-auto mb-3 d-flex align-items-center">
                            <label
                              className="form-check-label check-box-text Ellipse"
                              for="flexCheckDefault"
                            >
                              {value.title}
                            </label>
                            <input
                              key={index}
                              type="checkbox"
                              onClick={() => selectPortfolio(value._id)}
                              className="cursor-pointer mx-2"
                            />
                            {/* <div className="form-check ">
                              <input
                                key={index}
                                className="form-check-input cursor-pointer"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={() => selectPortfolio(value._id)}
                              />
                              <label
                                className="form-check-label check-box-text Ellipse"
                                for="flexCheckDefault"
                              >
                                {value.title}
                              </label>
                            </div> */}
                          </div>
                        );
                      })
                    : "You don't have any portfolio List"}
                </>
              )}
              <span className="text-danger">
                {error && !planDetails.portfolios.length
                  ? "Portfolio is required"
                  : null}
              </span>
            </div>

            <div className="d-flex flex-sm-row flex-column">
              {edit ? (
                <button
                  onClick={() => UpdatePlanDetails()}
                  type="button"
                  disabled={loading}
                  className="update-btn my-3 ff-popins"
                >
                  {loading ? <Loader /> : "Update"}
                </button>
              ) : (
                <button
                  onClick={() => submitPlanDetails()}
                  type="button"
                  disabled={loading}
                  className="update-btn my-3 ff-popins"
                >
                  {loading ? <Loader /> : "Add"}
                </button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PlansForm);
