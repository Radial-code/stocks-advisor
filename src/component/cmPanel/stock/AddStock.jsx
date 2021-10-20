import React, { useEffect, useState } from "react";
import "../../cmPanelCss/addnewstock.css";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import AddStockForm from "./AddStockForm";
import {
  getStockDetailsAction,
  removeStockDetailData,
} from "../../../redux/action/cmPanel/stock";

const AddStock = ({ setSidebarActive, sidebarActive, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setEdit(true);
      dispatch(getStockDetailsAction(id, setLoading));
    }
    return () => {
      dispatch(removeStockDetailData());
    };
  }, []);

  return (
    <div className="container">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row h-100">
        <AddStockForm detailLoading={loading} edit={edit} />
      </div>
    </div>
  );
};
export default withRouter(AddStock);
