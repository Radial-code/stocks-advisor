import ViewProfile from "./ViewProfile";
import "./editform.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDetailsAction } from "../../../redux/action/userPanel/user";

function UserProfile() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getUserDetailsAction(setLoading));
  }, []);

  return (
    <div className="w-100">
      <ViewProfile loadingUser={loading} />
    </div>
  );
}

export default UserProfile;
