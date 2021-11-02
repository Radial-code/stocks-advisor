import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNewTeamMemberAction } from "../../../redux/action/cmPanel/stock";
import { uploadImageAction } from "../../../redux/uploadImage";
import Loader from "../../common/Loader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const TeamForm = ({ history }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const uploadImageUrl = useSelector((state) => state.list.uploadImageUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [teamData, setTeamData] = useState({
    title: "",
    description: "",
    name: "",
  });

  const uploadImgHandler = (e) => {
    dispatch(uploadImageAction(e, setLoadingImage, "user"));
  };

  const submitTeamData = () => {
    setError(true);
    if (
      teamData.title !== "" &&
      teamData.description !== "" &&
      teamData.name !== ""
    ) {
      const data = {
        post: teamData.title,
        name: teamData.name,
        description: teamData.description,
      };
      dispatch(createNewTeamMemberAction(data, setLoading, history));
    }
  };

  return (
    <Col className="d-flex justify-content-lg-end">
      <section className="user-panel-card w-xl-1000 p-sm-4  pt-5">
        <div className="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column">
          <p className="heading-stock fs-sm-20 fs-sm-20">
            {getValueOf("Add Team")}
          </p>
          <div>
            <Link to="/content/manager/team/cards" className="add-new-btn">
              <button className="update-btn">{getValueOf("Back")}</button>
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
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      setTeamData({
                        ...teamData,
                        name: e.target.value,
                      });
                    }}
                    placeholder={getValueOf("Name")}
                  />
                  <span className="text-danger">
                    {error && teamData.name === ""
                      ? `${getValueOf("Name is required")}`
                      : null}
                  </span>
                </Form.Group>
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      setTeamData({
                        ...teamData,
                        title: e.target.value,
                      });
                    }}
                    placeholder={getValueOf("Title")}
                  />
                  <span className="text-danger">
                    {error && teamData.title === ""
                      ? `${getValueOf("Title is required")}`
                      : null}
                  </span>
                </Form.Group>
              </div>
              <div className="col-12 col-lg-6 mb-3 ">
                <div className="inputs-border   d-flex justify-content-between align-items-center py-2 ps-1 pe_12">
                  <span className="small-paragraph d-none d-sm-block Ellipse">
                    {getValueOf("Image Link")}
                  </span>

                  <span className="small-paragraph d-block d-sm-none Ellipse">
                    {getValueOf("Image Link")}
                  </span>

                  <input
                    type="file"
                    value={uploadImageUrl}
                    id="my-file"
                    hidden
                    onChange={(e) => uploadImgHandler(e)}
                  />

                  <button
                    disabled={loadingImage}
                    className="upload-img-btn2 d-none d-sm-block cursor-pointer"
                  >
                    <label className="cursor-pointer" for="my-file">
                      {loadingImage ? (
                        <Loader />
                      ) : (
                        `${getValueOf("Upload Image")}`
                      )}
                    </label>
                  </button>
                  {/* <button className="upload-img-btn d-block d-sm-none cursor-pointer">
                    <label className="cursor-pointer" for="my-file">
                      Upload
                    </label>
                  </button> */}
                </div>
                <span className="text-danger">
                  {error && teamData.uploadImageUrl === null
                    ? `${getValueOf("User Image is required")}`
                    : null}
                </span>
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
                  name=""
                  id=""
                  cols=""
                  rows="6"
                  onChange={(e) => {
                    setTeamData({
                      ...teamData,
                      description: e.target.value,
                    });
                  }}
                  placeholder={getValueOf("Description")}
                ></textarea>
                <span className="text-danger">
                  {error && teamData.description === ""
                    ? `${getValueOf("Description is required")}`
                    : null}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-sm-start align-items-center flex-sm-row flex-column">
              <div className="add-new-btn w-100">
                <button
                  className="update-btn"
                  disabled={loading}
                  onClick={() => submitTeamData()}
                >
                  {loading ? <Loader /> : `${getValueOf("Add")}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Col>
  );
};
export default withRouter(TeamForm);
