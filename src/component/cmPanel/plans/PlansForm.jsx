import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import { useDispatch } from "react-redux";
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
          <p className="new-stock-heading ff-popins mb-0 fs-sm-20">Plans</p>
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
              <div className="col-md-6 input-tag">
                <ReactTagInput
                  tags={tags}
                  placeholder="Details"
                  maxTags={10}
                  editable={true}
                  readOnly={false}
                  removeOnBackspace={true}
                  onChange={(newTags) => setTags(newTags)}
                />
              </div>
              <div className="col-md-6">
                <FormGroup className=" add-new-stock-select mb-3">
                  <select
                    onChange={(e) => {
                      setPlanDetails({
                        ...planDetails,
                        type: e.target.value,
                      });
                    }}
                    className="form-select text-end"
                  >
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </FormGroup>
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
