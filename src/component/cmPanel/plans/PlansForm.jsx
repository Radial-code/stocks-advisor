import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
function PlansForm() {
  const [tags, setTags] = React.useState(["example tag"]);
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
                  <Form.Control type="text" placeholder="Price" />
                </Form.Group>
              </div>
              <div className="col-md-6 order-1 last-name order-sm-1 order-2">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 input-tag">
                <ReactTagInput
                  tags={tags}
                  placeholder="Details"
                  maxTags={3}
                  editable={true}
                  readOnly={false}
                  removeOnBackspace={true}
                  onChange={(newTags) => setTags(newTags)}
                />
              </div>
              <div className="col-md-6">
                <FormGroup className=" add-new-stock-select mb-3">
                  <select className="form-select text-end">
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex flex-sm-row flex-column">
              <button type="button" className="update-btn my-3 ff-popins">
                Add
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PlansForm;
