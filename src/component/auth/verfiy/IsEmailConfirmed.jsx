import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { verfiyEmailTokenAction } from "../../../redux/action/auth";

const IsEmailConfirmed = ({ match, history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token, userId } = match.params;

  useEffect(() => {
    if (token && userId) {
      const data = {
        resetPasswordToken: token,
        userId: userId,
      };
      dispatch(verfiyEmailTokenAction(data, setLoading, history));
    }
  }, [userId, token]);

  return (
    <div>
      <h1>asdfghjkl;</h1>
    </div>
  );
};
export default withRouter(IsEmailConfirmed);
