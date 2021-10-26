import ProfileForm from "./ProfileForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../../common/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetailsAction } from "../../../redux/action/userPanel/user";
import Loader from "../../common/Loader";
import { uploadImageAction } from "../../../redux/uploadImage";

const ViewProfile = () => {
  const userDetails = useSelector((state) => state.userPanel.userDetails);
  const uploadImageUrl = useSelector((state) => state.list.uploadImageUrl);
  const [Upload, setUpload] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const dispatch = useDispatch();
  const [inputDisable, setInputDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [UpdateUserDetailsData, setUpdateUserDetailsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profileImagePath: "",
  });

  const UpdateUserProfile = () => {
    const data = {
      firstName: UpdateUserDetailsData.firstName
        ? UpdateUserDetailsData.firstName
        : userDetails.firstName,
      lastName: UpdateUserDetailsData.lastName
        ? UpdateUserDetailsData.lastName
        : userDetails.lastName,
      phone: UpdateUserDetailsData.phone
        ? UpdateUserDetailsData.phone
        : userDetails.phone,
      profileImagePath: uploadImageUrl
        ? uploadImageUrl
        : userDetails.profileImagePath,
    };
    dispatch(updateUserDetailsAction(data, setLoading));
    setInputDisable(true);
  };
  const onImageChange = (event) => {
    dispatch(uploadImageAction(event, setLoadingImage, "users"));
    let img = event.target.files[0];
    setUpload(URL.createObjectURL(img));
  };
  return (
    <div className="px-xxl-5 px-2 py-4 form-box-shadow container h-100">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            My Profile
          </p>
        </div>
        <div className="d-none d-md-flex">
          {inputDisable ? (
            <Link to="/change-password">
              <button className="from-edit-profile-btn mx-xl-3 px-14 ">
                Change Password
              </button>
            </Link>
          ) : (
            ""
          )}
          {inputDisable ? (
            <button
              onClick={() => setInputDisable(false)}
              className="from-edit-profile-btn  mx-3 mt-3 mt-sm-0"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => UpdateUserProfile()}
                className="from-edit-profile-btn  me-sm-3 mt-3 mt-sm-0"
              >
                Back
              </button>
              <button
                onClick={() => UpdateUserProfile()}
                disabled={loading}
                className="from-edit-profile-btn  me-sm-3 mt-3 mt-sm-0"
              >
                {loading ? <Loader /> : "Save"}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="my-sm-5 my-3 img-size  d-flex justify-content-center">
        <div className="position-relative d-flex flex-column align-items-md-end justify-content-end">
          {Upload ? (
            <img className="profile-img" src={Upload} alt="img" />
          ) : (
            <img
              className="profile-img"
              src={userDetails.profileImagePath}
              alt="img"
            />
          )}

          <input
            type="file"
            id="my-file"
            hidden
            onChange={(e) => onImageChange(e)}
          />
          {inputDisable ? (
            <label className="position-absolute pb-sm-2 edit-icon">
              <EditIcon />
            </label>
          ) : (
            <label
              for="my-file"
              className="position-absolute pb-sm-2 cursor-pointer edit-icon"
            >
              {loadingImage ? <Loader /> : <EditIcon />}
            </label>
          )}
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center  d-block d-md-none mb-5">
        {inputDisable ? (
          <Link to="/change-password">
            <button className="from-edit-profile-btn px-2 ">
              Change Password
            </button>
          </Link>
        ) : (
          ""
        )}
        <>
          <button
            onClick={() => setInputDisable(false)}
            className={
              inputDisable
                ? "from-edit-profile-btn px-2  me-2 me-sm-3  "
                : "from-edit-profile-btn  px-4"
            }
          >
            {inputDisable ? "Edit Profile" : "Save"}
          </button>
          <button
            onClick={() => UpdateUserProfile()}
            className="from-edit-profile-btn  me-sm-3 me-2"
          >
            Back
          </button>
        </>
      </div>
      <ProfileForm
        setUpdateUserDetailsData={setUpdateUserDetailsData}
        inputDisable={inputDisable}
        userDetails={userDetails}
        UpdateUserDetailsData={UpdateUserDetailsData}
      />
    </div>
  );
};

export default ViewProfile;
