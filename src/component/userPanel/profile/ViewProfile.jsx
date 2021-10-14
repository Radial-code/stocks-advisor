import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../../common/icons/Icons";
import ProfileImage from "../../../assets/img/Profile-img.png";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetailsAction } from "../../../redux/action/userPanel/user";
import ProfileForm from "./ProfileForm";
import Loader from "../../common/Loader";

function ViewProfile() {
  const userDetails = useSelector((state) => state.userPanel.userDetails);
  const dispatch = useDispatch();
  const [inputDisable, setInputDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [UpdateUserDetailsData, setUpdateUserDetailsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const UpdateUserProfile = () => {
    const data = {
      firstName: UpdateUserDetailsData.firstName
        ? UpdateUserDetailsData.firstName
        : userDetails.firstName,
      lastName: UpdateUserDetailsData.lastName
        ? UpdateUserDetailsData.lastName
        : userDetails.lastName,
      // isAdmin: true,
    };
    dispatch(updateUserDetailsAction(data, setLoading));
    setInputDisable(true);
  };

  return (
    <div className="px-xxl-5 px-4 py-4 form-box-shadow">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            {" "}
            My Profile
          </p>
        </div>
        <div className="d-flex flex-sm-row flex-column d-none d-md-block">
          {inputDisable ? (
            <Link to="/change-password">
              <button className="from-edit-profile-btn px-14 ">
                Change Password
              </button>
            </Link>
          ) : (
            ""
          )}
          {inputDisable ? (
            <button
              onClick={() => setInputDisable(false)}
              className="from-edit-profile-btn  me-sm-3 mt-3 mt-sm-0"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={() => UpdateUserProfile()}
              disabled={loading}
              className="from-edit-profile-btn  me-sm-3 mt-3 mt-sm-0"
            >
              {loading ? <Loader /> : "Save"}
            </button>
          )}
        </div>
      </div>
      <div className="my-sm-5 my-3 img-size  d-flex justify-content-center">
        <div className="position-relative d-flex flex-column align-items-md-end justify-content-end">
          <img className="profile-img" src={ProfileImage} alt="img" />

          <div className="position-absolute pb-sm-2 cursor-pointer edit-icon">
            <EditIcon />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center   d-block d-md-none mb-5">
        {inputDisable ? (
          <Link to="/change-password">
            <button className="from-edit-profile-btn px-2 ">
              Change Password
            </button>
          </Link>
        ) : (
          ""
        )}
        <button
          onClick={() => setInputDisable(false)}
          className={
            inputDisable
              ? "from-edit-profile-btn px-2  me-2 me-sm-3  "
              : "from-edit-profile-btn  mx-auto px-4"
          }
        >
          {inputDisable ? "Edit Profile" : "Save"}
        </button>
      </div>
      <ProfileForm
        userDetails={userDetails}
        setUpdateUserDetailsData={setUpdateUserDetailsData}
        inputDisable={inputDisable}
        UpdateUserDetailsData={UpdateUserDetailsData}
      />
    </div>
  );
}
export default ViewProfile;
