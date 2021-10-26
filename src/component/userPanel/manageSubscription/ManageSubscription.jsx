import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getMyPlanAction } from "../../../redux/action/payment";
import BubblesLoader from "../../common/BubblesLoader";
import DashboardDropDown from "../../dashboard/DashboardDropDown";
import SubscriptionDetails from "./SubscriptionDetails";

const ManageSubscription = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getMyPlanAction(setLoading));
  }, []);

  return (
    <Container>
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        {loading ? (
          <div className="d-flex justify-content-center h-100vh align-items-center">
            <BubblesLoader />
          </div>
        ) : (
          <SubscriptionDetails />
        )}
      </Row>
    </Container>
  );
};
export default ManageSubscription;
