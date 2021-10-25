import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import "@pathofdev/react-tag-input/build/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import {
  addNewPlansDetailsAction,
  updatePlansDetailsAction,
} from "../../../redux/action/cmPanel/plans";
import { getPortfolioListAction } from "../../../redux/action/cmPanel/OurServices";
import BubblesLoader from "../../common/BubblesLoader";

const initialState = {
  title: "",
  price: "",
  type: "",
  details: "",
  portfolios: [],
};

function PlansForm({ history, edit, id }) {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);
  const PlanDetailsList = useSelector((state) => state.list.planDetails);
  const [loading, setLoading] = useState(false);
  const [portfoliosLoader, setPortfoliosLoader] = useState(false);
  const [error, setError] = useState(false);
  const [planDetails, setPlanDetails] = useState(initialState);

  useEffect(() => {
    if (PlanDetailsList) {
      setPlanDetails(PlanDetailsList);
    }
  }, [PlanDetailsList]);

  const submitPlanDetails = () => {
    setError(true);
    if (planDetails.details !== "") {
      const data =
        planDetails && planDetails.details && planDetails.details.split("\n");
      data &&
        data.length &&
        data.map((item) => {
          planDetails.details += `${item},`;
        });
    }
    if (
      planDetails.title !== "" &&
      planDetails.price !== "" &&
      planDetails.type !== "" &&
      planDetails.details !== "" &&
      planDetails.portfolios &&
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
        planDetails.title !== undefined &&
        planDetails.price !== undefined &&
        planDetails.type !== undefined &&
        planDetails.details !== undefined
      ) {
        dispatch(
          updatePlansDetailsAction(planDetails, id, setLoading, history)
        );
      }
    }
  };

  let planPortFoliosArray = [];
  const array =
    PlanDetailsList &&
    PlanDetailsList.portfolios &&
    PlanDetailsList.portfolios.map((val) => {
      return planPortFoliosArray.push(val.portfolioId);
    });

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
                    {error && planDetails.price === undefined
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
                    {error && planDetails.title === undefined
                      ? "Title is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <FormGroup
                  className={`${
                    layoutClickChanger
                      ? "add-new-stock-select mb-3 cursor-pointer"
                      : "add-new-stock-select2 mb-3 cursor-pointer"
                  }`}
                >
                  <select
                    value={planDetails.type}
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        type: e.target.value,
                      });
                    }}
                    className={`${
                      layoutClickChanger
                        ? "form-select text-end cursor-pointer"
                        : "form-select text-start cursor-pointer"
                    }`}
                  >
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                  <span className="text-danger">
                    {error && planDetails.type === undefined
                      ? "Week is required"
                      : null}
                  </span>
                </FormGroup>
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="w-100 inputs-border input-focus-none p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                  placeholder="...Description "
                  rows={5}
                  value={planDetails.details}
                  onChange={(e) => {
                    setPlanDetails({
                      ...planDetails,
                      details: e.target.value,
                    });
                  }}
                ></textarea>
                <span className="text-danger">
                  {error && planDetails.details === undefined
                    ? "Description is required"
                    : null}
                </span>
                <p className="text-danger">
                  Note: Press enter after line end and start from the new line
                </p>
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
                            {layoutClickChanger ? (
                              <>
                                <label
                                  className="form-check-label check-box-text Ellipse"
                                  for="flexCheckDefault"
                                >
                                  {value.title}
                                </label>
                                <input
                                  key={index}
                                  type="checkbox"
                                  checked={
                                    planPortFoliosArray.includes(value._id)
                                      ? true
                                      : null
                                  }
                                  onClick={() => selectPortfolio(value._id)}
                                  className="cursor-pointer mx-2"
                                />
                              </>
                            ) : (
                              <>
                                <input
                                  key={index}
                                  type="checkbox"
                                  checked={
                                    planPortFoliosArray.includes(value._id)
                                      ? true
                                      : null
                                  }
                                  onClick={() => selectPortfolio(value._id)}
                                  className="cursor-pointer mx-2"
                                />
                                <label
                                  className="form-check-label check-box-text Ellipse"
                                  for="flexCheckDefault"
                                >
                                  {value.title}
                                </label>
                              </>
                            )}
                          </div>
                        );
                      })
                    : "You don't have any portfolio List"}
                </>
              )}
              <span className="text-danger">
                {error && planDetails.portfolio === undefined
                  ? "Portfolio  is required"
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
