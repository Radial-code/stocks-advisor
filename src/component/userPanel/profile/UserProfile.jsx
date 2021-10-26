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
    <div>
      <ViewProfile loading={loading} />
    </div>
  );
}

export default UserProfile;
