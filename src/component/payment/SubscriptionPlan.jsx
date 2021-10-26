import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const SubscriptionPlan = ({ loading }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const planDetails = useSelector((state) => state.list.planDetails);
  const split_string =
    planDetails && planDetails.details && planDetails.details.split(",");

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
            <div
              className={`${
                layoutClickChanger
                  ? ""
                  : "flex-row-reverse  justify-content-end "
              } d-flex  align-items-center fw-bold py-2 `}
            >
              <p>{planDetails.type}</p>
              {layoutClickChanger ? (
                <p
                  className={`${
                    layoutClickChanger ? "pe-2" : "pe-3 "
                  } fs-xs fw-500 fs-sm-14 `}
                >
                  :Plan Type
                </p>
              ) : (
                <p
                  className={`${
                    layoutClickChanger ? "" : "pe-3 "
                  } fs-xs fw-500 fs-sm-14 `}
                >
                  Plan Type:
                </p>
              )}
            </div>
            {layoutClickChanger ? (
              <p className="fs-xs fw-500  fs-sm-14">:Description</p>
            ) : (
              <p className="fs-xs fw-500  fs-sm-14">Description:</p>
            )}

            <p className="stock-paragraph fs-sm-14">
              {split_string &&
                split_string.map((value) => (
                  <ul>
                    <li className={`${value === "" ? "list-style" : ""} `}>
                      {value}
                    </li>
                  </ul>
                ))}
            </p>

            {/* {layoutClickChanger ? (
              <p className="fs-xs fw-500 mt-4 fs-sm-14">:Benifits</p>
            ) : (
              <p className="fs-xs fw-500 mt-4 fs-sm-14">Benifits:</p>
            )}
            <p className="stock-paragraph fs-sm-16 max-w-sm-263">
              Duis venenatis aliquot, Eros, non feugiat Tortor semper sed. In
              diam risus, efficitur Sit amet dolor vitae Finibus tristique Arcu
              finibus tristique
            </p> */}
          </>
        )}
      </section>
    </Col>
  );
};
export default SubscriptionPlan;
