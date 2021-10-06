import React, { useState } from "react";
import "../form/form.css";
import { passwordRegex } from "../../component/common/Validation";

const ChangePassword = () => {
  const [changePasswordDetails, setChangePasswordDetails] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
  const [specialChar, SetSpecialChar] = useState(false);

  const changeSubmitHandler = () => {
    setError(true);

    if (
      changePasswordDetails.password &&
      passwordRegex.test(changePasswordDetails.newPassword) === true &&
      changePasswordDetails.newPassword &&
      changePasswordDetails.confirmPassword &&
      changePasswordDetails.newPassword ===
        changePasswordDetails.confirmPassword
    ) {
      console.log(changePasswordDetails);
    }
  };

  return (
    <div>
      <div className="container my-sm-5 pt-sm-5 my-3 min-h-576px-100vh">
        <div className="row">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-12   mx-auto form-box-shadow">
            <div className="py-4 px-xxl-5 px-3  ">
              <p className="mb-4 mb-md-5 edit-contact-text text-center">
                Change Password
              </p>
              <div className="mb-3 form-field">
                <input
                  type="text"
                  value={changePasswordDetails.password}
                  onChange={(e) =>
                    setChangePasswordDetails({
                      ...changePasswordDetails,
                      password: e.target.value,
                    })
                  }
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput6"
                  placeholder="Current Password"
                />
                <span className="text-danger">
                  {error && changePasswordDetails.password === ""
                    ? "Please Enter Password"
                    : null}
                </span>
              </div>
              <div className="mb-3 form-field ">
                <input
                  type="text"
                  value={changePasswordDetails.newPassword}
                  onChange={(e) => {
                    setChangePasswordDetails({
                      ...changePasswordDetails,
                      newPassword: e.target.value,
                    });
                    SetSpecialChar(true);
                  }}
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput7"
                  placeholder="New Password"
                />
                <span className="text-danger">
                  {error && changePasswordDetails.newPassword === ""
                    ? "Please Enter confirm Password"
                    : specialChar &&
                      passwordRegex.test(changePasswordDetails.newPassword) ===
                        false
                    ? "Enter strong password"
                    : null}
                </span>
              </div>
              <div className="mb-0 form-field">
                <input
                  value={changePasswordDetails.confirmPassword}
                  onChange={(e) => {
                    setChangePasswordDetails({
                      ...changePasswordDetails,
                      confirmPassword: e.target.value,
                    });
                  }}
                  type="text"
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput8"
                  placeholder="Confirm Password"
                />
                <span className="text-danger">
                  {error && changePasswordDetails.confirmPassword === ""
                    ? "Please enter confirm password"
                    : error &&
                      changePasswordDetails.newPassword !==
                        changePasswordDetails.confirmPassword
                    ? "Enter same password"
                    : null}
                </span>
              </div>
              <button
                onClick={() => changeSubmitHandler()}
                className=" w-100 mb-4 mt-sm-5 mt-3 from-btn"
              >
                Update My Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
