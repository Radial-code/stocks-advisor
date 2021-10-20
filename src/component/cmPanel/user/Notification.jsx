import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import { addNewNotificationAction } from "../../../redux/action/contact";
import Loader from "../../common/Loader";

const data = [];
const valueId = [];
function Notification() {
  const dispatch = useDispatch();
  const planList = useSelector((state) => state.list.planList);
  const [loading, setLoading] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);
  const [allPlan, setAllPlan] = useState(false);
  const [error, setError] = useState(false);
  const [notificationForm, setNotificationForm] = useState({
    title: "",
    body: "",
    sendTo: "",
    type: "",
  });

  useEffect(() => {
    dispatch(getPlansListAction(setPlanLoading));
  }, []);

  const selectPlan = (id, type) => {
    if (type === "all") {
      setAllPlan(!allPlan);
      notificationForm.sendTo = "all";
    } else {
      const ValidId = valueId.includes(id);
      if (data === []) {
        data.push(id);
        valueId.push(id);
      } else if (!ValidId) {
        data.push(id);
        valueId.push(id);
      } else {
        var index = data.indexOf(id);
        data.splice(index, 1);
        var indexvalueId = valueId.indexOf(id);
        valueId.splice(indexvalueId, 1);
      }
      notificationForm.sendTo = data;
    }
  };

  const submitNotifiction = () => {
    setError(true);
    if (
      !!notificationForm.sendTo &&
      !!notificationForm.body &&
      !!notificationForm.title &&
      !!notificationForm.type
    ) {
      dispatch(addNewNotificationAction(notificationForm, setLoading));
    }
  };
  return (
    <Col className="d-flex justify-content-lg-end">
      <section className="user-panel-card w-xl-1000 p-sm-4  pt-5">
        <div className="mb-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="heading-stock mb-0 pt-2">Notification</p>
        </div>
        <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    placeholder="Body"
                    onChange={(e) => {
                      setNotificationForm({
                        ...notificationForm,
                        body: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && notificationForm.body === ""
                      ? "Body is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    placeholder=" Title"
                    onChange={(e) => {
                      setNotificationForm({
                        ...notificationForm,
                        title: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && notificationForm.title === ""
                      ? "Title is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    onChange={(e) => {
                      setNotificationForm({
                        ...notificationForm,
                        type: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && notificationForm.body === ""
                      ? "Type is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
            </div>
            <div className="row py-4">
              {planLoading ? (
                "Loading..."
              ) : (
                <>
                  {planList && planList.length
                    ? planList.map((value) => {
                        return (
                          <div className="col-auto">
                            <input
                              className="cursor-pointer mx-2"
                              type="checkbox"
                              disabled={allPlan}
                              onClick={() => selectPlan(value._id, "plan")}
                            />
                            <label
                              className="form-check-label check-box-text cursor-pointer"
                              for="flexCheckDefault"
                            >
                              {value.title}
                            </label>
                          </div>
                        );
                      })
                    : "You don't have any plan Create any plan"}
                </>
              )}
              <div className="col-auto">
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onClick={() => selectPlan("null", "all")}
                />
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  All
                </label>
              </div>
              <div className="col-auto">
                <label
                  className="form-check-label check-box-text text-dark cursor-pointer"
                  for="flexCheckDefault"
                >
                  : Send to
                </label>
              </div>
            </div>
            <button
              type="button"
              className="join_now_btn btn px-4 br-5
               py-2 "
              onClick={() => submitNotifiction()}
            >
              {loading ? <Loader /> : "Send"}
            </button>
          </div>
        </div>
      </section>
    </Col>
  );
}
export default Notification;
