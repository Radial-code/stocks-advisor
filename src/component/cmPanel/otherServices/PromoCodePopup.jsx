import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import CloseIcon from "../../../assets/img/close-icon.png";
const PromocodePopup = ({ show, handleClose, setShow }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const [error, setError] = useState(false);
  const [promoCodeData, setPromoCodeData] = useState({
    email: "",
    discount: "",
    promocode: "",
    startdate: "",
    enddate: "",
  });
  const SubmitHandler = () => {
    setError(true);
    setPromoCodeData(promoCodeData);
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className=" p-sm-3 p-2">
        <img
          className="close-popup-icon cursor-pointer"
          onClick={handleClose}
          src={CloseIcon}
          alt=""
        />
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {getValueOf("Create PromoCode")}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <label>PromoCode</label>
          <input
            type="text"
            placeholder={getValueOf("PromoCode")}
            className="py-2 px-3 w-100"
            onChange={(e) =>
              setPromoCodeData({
                ...promoCodeData,
                promocode: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && promoCodeData.promocode === "" ? (
              <span> {getValueOf("PromoCode is required")}</span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <label>Discount</label>
          <input
            type="number"
            placeholder={getValueOf("Discount")}
            className="py-2 px-3 w-100"
            onChange={(e) =>
              setPromoCodeData({
                ...promoCodeData,
                discount: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && promoCodeData.discount === "" ? (
              <span> {getValueOf("Discount is required")}</span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <label>Email</label>
          <input
            type="email"
            placeholder={getValueOf("Email")}
            className="py-2 px-3 w-100"
            onChange={(e) =>
              setPromoCodeData({
                ...promoCodeData,
                email: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && promoCodeData.email === "" ? (
              <span> {getValueOf("Email is required")}</span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="add-new-stock-field  ms-sm-3">
              <label>Start Date</label>
              <input
                type="date"
                placeholder={getValueOf("Start Date")}
                className="py-2 px-3 w-100 cursor-pointer"
                onChange={(e) =>
                  setPromoCodeData({
                    ...promoCodeData,
                    startdate: e.target.value,
                  })
                }
              />
              {error && promoCodeData.startdate === "" ? (
                <span className="text-danger">
                  {" "}
                  {getValueOf("StartDate is required")}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="add-new-stock-field my-md-0 my-3  ms-sm-3">
              <label>End Date</label>
              <input
                type="date"
                placeholder={getValueOf("End Date")}
                className="py-2 px-3 w-100 cursor-pointer"
                onChange={(e) =>
                  setPromoCodeData({
                    ...promoCodeData,
                    enddate: e.target.value,
                  })
                }
              />
              {error && promoCodeData.enddate === "" ? (
                <span className="text-danger">
                  {" "}
                  {getValueOf("EndDate is required")}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="cursor-pointer my-3 ms-sm-3" type="checkbox" />
            <label
              className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
              for="flexCheckDefault"
            >
              {getValueOf("Is Plan")}
            </label>
          </div>
        </div>
        <div className="d-flex flex-sm-row flex-column  justify-content-center">
          <button
            className="px-5 py-2 add-button  my-sm-3"
            onClick={SubmitHandler}
          >
            {getValueOf("Submit")}
          </button>
        </div>
      </Modal.Body>

      {/* <button
          
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {getValueOf("Update")}
          </button> */}
    </Modal>
  );
};

export default PromocodePopup;
