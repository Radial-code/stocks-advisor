import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getPlanDetailsByIdAction } from "../../../redux/action/payment";
import PlansForm from "./PlansForm";

function PlansSection({ setSidebarActive, sidebarActive, match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!!id) {
      setEdit(true);
      dispatch(getPlanDetailsByIdAction(id, setLoading));
    }
  }, [id]);

  return (
    <div className="container">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row ">
        <PlansForm edit={edit} id={id} loading={loading} />
      </div>
    </div>
  );
}
export default withRouter(PlansSection);
