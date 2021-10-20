import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const UserDropDown = ({ history }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const firstname = useSelector((state) => state.auth.userData.firstName);
  const userData = useSelector((state) => state.auth.userData);
  const [dropdown, setdropdown] = useState(false);
  const lastname = useSelector((state) => state.auth.userData.lastName);

  const admin = () => {
    setdropdown(false);
    history.push("/content/manager/stocks");
  };
  const user = () => {
    setdropdown(false);
    history.push("/view/profile");
  };
  return (
    <>
      <Dropdown className="user-profile-dropdown">
        <Dropdown.Toggle
          onClick={() =>
            history.push(userData.isAdmin ? "" : "/dashboard/view/profile")
          }
          className="border-0 profile-dropdown d-flex justify-content-center align-items-center"
          id="dropdown-basic"
        >
          <div
            className="header-username-char"
            onClick={() => setdropdown(!dropdown)}
          >
            {layoutClickChanger ? (
              <>
                <span className="first-char">
                  {firstname && firstname.toUpperCase().charAt(0)}
                </span>
                <span className="first-char">
                  {lastname && lastname.toUpperCase().charAt(0)}
                </span>
              </>
            ) : (
              <>
                <span className="first-char">
                  {lastname && lastname.toUpperCase().charAt(0)}
                </span>
                <span className="first-char">
                  {firstname && firstname.toUpperCase().charAt(0)}
                </span>
              </>
            )}
          </div>
        </Dropdown.Toggle>
      </Dropdown>
      {dropdown && userData.isAdmin ? (
        <div
          className="bg-white shadow p-2  rounded position-absolute"
          style={{ bottom: "-95px" }}
        >
          <p
            className=" px-2 py-1 cursor-pointer fw-normal text-center mb-0"
            onClick={() => user()}
          >
            User Profile
          </p>
          <p
            className=" px-2 py-1 cursor-pointer fw-normal text-center"
            onClick={() => admin()}
          >
            Admin DashBoard
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default withRouter(UserDropDown);
