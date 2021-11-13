import { Col } from "react-bootstrap";
import BubblesLoader from "../common/BubblesLoader";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const OldPlanDetails = ({ loading, planDetails }) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const split_string =
    planDetails && planDetails.details && planDetails.details.split(",");

  return (
    <Col lg={7} className="d-flex justify-content-center">
      <section className=" select-plan-payment p-lg-4 p-3">
        <p className="heading-stock fs-sm-20 d-sm-flex justify-content-center d-lg-block">
          {getValueOf("Old Plan Details")}
        </p>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <BubblesLoader />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between payment-border pb-2">
              <p className="profile-heading fs-sm-16">
                {planDetails && planDetails.title}
              </p>
              <p className="payment-page-amount">
                ${planDetails && planDetails.price}
              </p>
            </div>
            <div
              className={`${
                layoutClickChanger
                  ? ""
                  : "flex-row-reverse  justify-content-end "
              } d-flex  align-items-center fw-bold py-2 `}
            >
              <p>{planDetails && planDetails.type}</p>
              {layoutClickChanger ? (
                <p
                  className={`${
                    layoutClickChanger ? "pe-2" : "pe-3 "
                  } fs-xs fw-500 fs-sm-14 `}
                >
                  :{getValueOf("Plan Type")}
                </p>
              ) : (
                <p
                  className={`${
                    layoutClickChanger ? "" : "pe-3 "
                  } fs-xs fw-500 fs-sm-14 `}
                >
                  {getValueOf("Plan Type")}:
                </p>
              )}
            </div>
            {layoutClickChanger ? (
              <p className="fs-xs fw-500  fs-sm-14">
                :{getValueOf("Description")}
              </p>
            ) : (
              <p className="fs-xs fw-500  fs-sm-14">
                {getValueOf("Description")}:
              </p>
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
          </>
        )}
      </section>
    </Col>
  );
};
export default OldPlanDetails;
