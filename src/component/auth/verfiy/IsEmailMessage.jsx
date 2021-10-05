import { useState } from "react";
import { useDispatch } from "react-redux";
import { verfiyEmailAction } from "../../../redux/action/auth";

const IsEmailMessage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const verfiyEmailToken = () => {
    dispatch(verfiyEmailAction(setLoading));
  };

  return (
    <div>
      <h1>message;</h1>
    </div>
  );
};
export default IsEmailMessage;
