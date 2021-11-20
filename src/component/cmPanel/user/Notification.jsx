import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import { addNewNotificationAction } from "../../../redux/action/contact";
import Loader from "../../common/Loader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { getUserListForAdminAction } from "../../../redux/action/cmPanel/stock";
import { MultiSelect } from "react-multi-select-component";

const data = [];
const userOption = [];
const valueId = [];
function Notification() {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const adminUserList = useSelector((state) => state.cmPanel.adminUserList);
  const planList = useSelector((state) => state.list.planList);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loadingUser, setLoadingUser] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);
  const [allPlan, setAllPlan] = useState(false);
  const [error, setError] = useState(false);
  const [notificationForm, setNotificationForm] = useState({
    title: "",
    body: "",
    sendTo: "",
    type: "",
    usersList: [],
  });

  useEffect(async () => {
    const limit = 10;
    const page = 0;
    dispatch(getPlansListAction(setPlanLoading, page, limit, null));
    await dispatch(getUserListForAdminAction(setLoadingUser, page));
    // if (adminUserList && adminUserList.length > 0) {
    //   adminUserList.map((item) => {
    //     userOption.push({
    //       label: item.firstName,
    //       value: item.firstName,
    //     });
    //   });
    // }
  }, []);

  const userList =
    adminUserList && adminUserList.length > 0
      ? adminUserList.map((item) =>
          userOption.push({
            label: item.firstName,
            value: item.firstName,
          })
        )
      : [];
  console.log(userOption, userList);
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
              {layoutClickChanger ? (
                <>
                  <div className="col-12 col-lg-6 mb-3">
                    <textarea
                      className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                      rows="1"
                      placeholder="Body"
                      onChange={(e) => {
                        setNotificationForm({
                          ...notificationForm,
                          body: e.target.value,
                        });
                      }}
                    ></textarea>
                    <span className="text-danger">
                      {error && notificationForm.body === ""
                        ? "Body is required"
                        : null}
                    </span>
                  </div>
                  {/* <div className="col-12 col-lg-6 mb-3">
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
                  </div> */}
                  <div className="col-12 col-lg-6 mb-3">
                    <Form.Group
                      className="mb-3 add-new-stock-field "
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Title"
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
                </>
              ) : (
                <>
                  {" "}
                  <div className="col-12 col-lg-6 mb-3">
                    <Form.Group
                      className="mb-3 add-new-stock-field "
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Title"
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
                  <div className="col-12 col-lg-6 mb-3">
                    <textarea
                      className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                      rows="1"
                      placeholder="Body "
                      onChange={(e) => {
                        setNotificationForm({
                          ...notificationForm,
                          body: e.target.value,
                        });
                      }}
                    ></textarea>
                    <span className="text-danger">
                      {error && notificationForm.body === ""
                        ? "Body is required"
                        : null}
                    </span>
                    {/* <Form.Group
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
                    </Form.Group> */}
                  </div>
                </>
              )}
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
              <div className="col-12 col-lg-6  cursor-pointer multi-selector">
                <MultiSelect
                  options={userList}
                  className="cursor-pointer"
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                  hasSelectAll={false}
                />
              </div>
            </div>
            <div className="row py-4">
              {layoutClickChanger ? (
                ""
              ) : (
                <div className="col-auto">
                  <label
                    className="form-check-label check-box-text text-dark cursor-pointer"
                    for="flexCheckDefault"
                  >
                    Send to :
                  </label>
                </div>
              )}
              {planLoading ? (
                "Loading..."
              ) : (
                <>
                  {planList && planList.length
                    ? planList.map((value) => {
                        return (
                          <>
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
                          </>
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
              {layoutClickChanger ? (
                <div className="col-auto">
                  <label
                    className="form-check-label check-box-text text-dark cursor-pointer"
                    for="flexCheckDefault"
                  >
                    : Send to
                  </label>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              type="button"
              className="join_now_btn btn px-4 br-5
               py-2 "
              onClick={() => submitNotifiction()}
            >
              {loading ? <Loader /> : `${getValueOf("Send")}`}
            </button>
          </div>
        </div>
      </section>
    </Col>
  );
}
export default Notification;
