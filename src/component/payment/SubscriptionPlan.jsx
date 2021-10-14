import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";

const SubscriptionPlan = ({ loading }) => {
  const planDetails = useSelector((state) => state.list.planDetails);
  return (
    <Col lg={7} className="d-flex justify-content-center">
      <section className=" select-plan-payment p-lg-4 p-3">
        <p className="heading-stock fs-sm-20 d-sm-flex justify-content-center d-lg-block">
          Selected Subscription Plan
        </p>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            {" "}
            <BubblesLoader />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between payment-border pb-2">
              <p className="profile-heading fs-sm-16">{planDetails.title}</p>
              <p className="payment-page-amount">${planDetails.price}</p>
            </div>
            <p className="fs-xs fw-500 mt-3 fs-sm-14">:Description</p>
            <p className="stock-paragraph fs-sm-14">{planDetails.details}</p>
            <div className="d-flex justify-content-between align-items-center fw-bold">
              <p>{planDetails.type}</p>
              <p className="fs-xs fw-500 fs-sm-14">:Plan Type</p>
            </div>
            <p className="fs-xs fw-500 mt-4 fs-sm-14">:Benifits</p>
            <p className="stock-paragraph fs-sm-16 max-w-sm-263">
              Duis venenatis aliquot, Eros, non feugiat Tortor semper sed. In
              diam risus, efficitur Sit amet dolor vitae Finibus tristique Arcu
              finibus tristique
            </p>
          </>
        )}
      </section>
    </Col>
  );
};
export default SubscriptionPlan;
