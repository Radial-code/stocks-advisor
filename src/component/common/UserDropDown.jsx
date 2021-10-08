import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const UserDropDown = () => {
  const firstname = useSelector((state) => state.auth.userData.firstName);
  const lastname = useSelector((state) => state.auth.userData.lastName);
  let history = useHistory();

  return (
    <>
      <Dropdown className="user-profile-dropdown">
        <Dropdown.Toggle
          className="border-0 profile-dropdown d-flex justify-content-center align-items-center"
          id="dropdown-basic"
        >
          <div className="header-username-char">
            <span className="first-char">
              {firstname.toUpperCase().charAt(0)}
            </span>
            <span className="first-char">
              {lastname.toUpperCase().charAt(0)}
            </span>
          </div>
        </Dropdown.Toggle>
        {/* <Dropdown.Menu> */}
        {/* <Dropdown.Item onClick={() => history.push("/")}>
            <span className="mr-15  dropdown-icon"></span>
            <span>Profile</span>
          </Dropdown.Item> */}
        {/* <Dropdown.Item onClick={() => history.push("/login")}>
            <span className="mr-15  dropdown-icon">
              <ProfileIcon />
            </span>
            <span>Logout</span>
          </Dropdown.Item> */}
        {/* </Dropdown.Menu> */}
      </Dropdown>
    </>
  );
};

export default UserDropDown;