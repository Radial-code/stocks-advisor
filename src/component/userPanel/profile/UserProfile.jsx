import DashboardDropDown from "../../dashboard/DashboardDropDown";
import ViewProfile from "./ViewProfile";
import "./editform.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDetailsAction } from "../../../redux/action/userPanel/user";

function UserProfile({ sideBarHandler, setSidebarActive, sidebarActive }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getUserDetailsAction(setLoading));
  }, []);

  return (
    <div className="container-fluid">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row h-100 ">
        <div className="col-12  dashboard">
          <div className="border-b-1  mb-3">
            <DashboardDropDown sideBarHandler={sideBarHandler} />
          </div>
        </div>
        <div className="col-12 ">
          <ViewProfile loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
