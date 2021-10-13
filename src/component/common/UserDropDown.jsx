import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const UserDropDown = ({ history }) => {
  const firstname = useSelector((state) => state.auth.userData.firstName);
  const userData = useSelector((state) => state.auth.userData);
  const lastname = useSelector((state) => state.auth.userData.lastName);

  return (
    <>
      <Dropdown className="user-profile-dropdown">
        <Dropdown.Toggle
          onClick={() =>
            history.push(
              userData.isAdmin
                ? "/content/manager/stocks"
                : "/dashboard/view/profile"
            )
          }
          className="border-0 profile-dropdown d-flex justify-content-center align-items-center"
          id="dropdown-basic"
        >
          <div className="header-username-char">
            <span className="first-char">
              {firstname && firstname.toUpperCase().charAt(0)}
            </span>
            <span className="first-char">
              {lastname && lastname.toUpperCase().charAt(0)}
            </span>
          </div>
        </Dropdown.Toggle>
      </Dropdown>
    </>
  );
};

export default withRouter(UserDropDown);
