import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import moment from "moment";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import CloseIcon from "../../../assets/img/close-icon.png";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import { useDispatch, useSelector } from "react-redux";
import BubblesLoader from "../../common/BubblesLoader";
import {
  updatePromoCodeAction,
  uploadNewPromoCodeAction,
} from "../../../redux/action/promoCode";
import Loader from "../../common/Loader";
import GiftEditor from "./GiftEditor";

const initialState = {
  code: "",
  isReleatedToPlan: false,
  maximumUses: null,
  discount: "",
  isDiscount: false,
  isFixedAmount: false,
  amount: "",
  startDate: "",
  endDate: "",
  isGift: false,
  plans: [],
  userEmail: "",
  giftText: "",
};

const promoCodePlanDetails = [];
const promoCodePlanId = [];

const PromocodePopup = ({ show, handleClose, edit, updateValue }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const planList = useSelector((state) => state.list.planList);
  const [error, setError] = useState(false);
  const [promoCodeLoading, setPromoCodeLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [amount, setAmount] = useState(false);
  const [promroCodeDataId, setPromroCodeDataId] = useState([]);
  const [promoCodeData, setPromoCodeData] = useState(initialState);

  // Get plan list from redux store and set it to the state
  useEffect(() => {
    if (promoCodeData.isReleatedToPlan) {
      const limit = 10;
      const page = 0;
      dispatch(getPlansListAction(setLoading, page, limit));
    }
  }, [promoCodeData]);

  useEffect(() => {
    if (updateValue !== {} && edit) {
      setPromoCodeData(updateValue);
    } else {
      setPromoCodeData(initialState);
    }
  }, [updateValue, edit]);

  // set plan Id in array for promo code plan id array
  const selectPlanForPromoCode = (id) => {
    if (!promoCodePlanId.includes(id)) {
      promoCodePlanId.push(id);
      promoCodePlanDetails.push(id);
    } else {
      var index = promoCodePlanDetails.indexOf(id);
      promoCodePlanDetails.splice(index, 1);
      var indexcategoryId = promoCodePlanId.indexOf(id);
      promoCodePlanId.splice(indexcategoryId, 1);
    }
    setPromroCodeDataId(promoCodePlanDetails);
  };

  // Submit Promo Code Data to API and get response from API and set the response to state variable and close the modal
  const submitPromoCodeDetails = () => {
    setError(true);
    if (
      promoCodeData.code &&
      promoCodeData.startDate &&
      promoCodeData.endDate
    ) {
      const data = {
        code: promoCodeData.code,
        isReleatedToPlan: promoCodeData.isReleatedToPlan,
        maximumUses: promoCodeData.maximumUses,
        discount:
          promoCodeData.isDiscount === true ? promoCodeData.discount : null,
        isDiscount: amount ? false : promoCodeData.isDiscount,
        isFixedAmount: discount ? false : promoCodeData.isFixedAmount,
        amount:
          promoCodeData.isFixedAmount === true ? promoCodeData.amount : null,
        startDate: promoCodeData.startDate,
        endDate: promoCodeData.endDate,
        isGift: promoCodeData.isGift,
        plans: promroCodeDataId ? promroCodeDataId : [],
        userEmail: promoCodeData.isGift ? promoCodeData.userEmail : null,
        giftText: promoCodeData.isGift ? promoCodeData.giftText : null,
      };
      dispatch(
        uploadNewPromoCodeAction(
          data,
          setPromoCodeLoading,
          setError,
          handleClose
        )
      );
    }
  };

  const checkboxHandler = (value) => {
    if (value === "amount") {
      setAmount(!amount);
      setDiscount(false);
    } else if (value === "discount") {
      setDiscount(!discount);
      setAmount(false);
    }
  };

  const updatePromoCodeDetails = () => {
    const data = {
      code: promoCodeData.code,
      isReleatedToPlan: promoCodeData.isReleatedToPlan,
      maximumUses: promoCodeData.maximumUses,
      discount:
        promoCodeData.isDiscount === true ? promoCodeData.discount : null,
      isDiscount: amount ? false : promoCodeData.isDiscount,
      isFixedAmount: discount ? false : promoCodeData.isFixedAmount,
      amount:
        promoCodeData.isFixedAmount === true ? promoCodeData.amount : null,
      startDate: promoCodeData.startDate,
      endDate: promoCodeData.endDate,
      isGift: promoCodeData.isGift,
      plans: promroCodeDataId ? promroCodeDataId : [],
      userEmail: promoCodeData.isGift ? promoCodeData.userEmail : null,
      giftText: promoCodeData.isGift ? promoCodeData.giftText : null,
    };
    dispatch(
      updatePromoCodeAction(
        updateValue._id,
        data,
        setPromoCodeLoading,
        handleClose
      )
    );
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
            {edit
              ? `${getValueOf("Update PromoCode")}`
              : `${getValueOf("Create PromoCode")}`}
          </h4>
        </div>
      </div>

      <Modal.Body>
        {/** Promor code */}
        <div className="add-new-stock-field my-3 ms-sm-3">
          <label>{getValueOf("PromoCode")}</label>
          <input
            type="text"
            placeholder={getValueOf("PromoCode")}
            className="py-2 px-3 w-100"
            value={promoCodeData.code}
            onChange={(e) =>
              setPromoCodeData({
                ...promoCodeData,
                code: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && promoCodeData.code === "" ? (
              <span> {getValueOf("Promo code is required")}</span>
            ) : (
              ""
            )}
          </span>
        </div>
        {/** Maximum uses */}
        <div className="add-new-stock-field my-3 ms-sm-3">
          <label>{getValueOf("Maximum Uses")}</label>
          <input
            type="number"
            placeholder={getValueOf("Maximum Uses")}
            className="py-2 px-3 w-100"
            value={promoCodeData.maximumUses}
            onChange={(e) =>
              setPromoCodeData({
                ...promoCodeData,
                maximumUses: e.target.value,
              })
            }
          />
        </div>

        {/** Start Date */}
        <div className="row">
          <div className="col-md-6">
            <div className="add-new-stock-field  ms-sm-3">
              <label>{getValueOf("Start Date")}</label>
              <input
                type="date"
                value={moment(promoCodeData.startDate).format("YYYY-MM-DD")}
                placeholder={getValueOf("Start Date")}
                className="py-2 px-3 w-100 cursor-pointer"
                onChange={(e) =>
                  setPromoCodeData({
                    ...promoCodeData,
                    startDate: e.target.value,
                  })
                }
              />
              {error && promoCodeData.startDate === "" ? (
                <span className="text-danger">
                  {getValueOf("Start Date is required")}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

          {/** End Date */}
          <div className="col-md-6">
            <div className="add-new-stock-field my-md-0 my-3  ms-sm-3">
              <label>{getValueOf("End Date")}</label>
              <input
                type="date"
                placeholder={getValueOf("End Date")}
                className="py-2 px-3 w-100 cursor-pointer"
                value={moment(promoCodeData.endDate).format("YYYY-MM-DD")}
                onChange={(e) =>
                  setPromoCodeData({
                    ...promoCodeData,
                    endDate: e.target.value,
                  })
                }
              />
              {error && promoCodeData.endDate === "" ? (
                <span className="text-danger">
                  {getValueOf("End Date is required")}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/** Discount */}
        <div className="row">
          <div className="col">
            <input
              className="cursor-pointer my-3 ms-sm-3"
              type="checkbox"
              onClick={() => checkboxHandler("discount")}
              checked={amount ? false : promoCodeData.isDiscount}
              onChange={(e) =>
                setPromoCodeData({
                  ...promoCodeData,
                  isDiscount: e.target.checked,
                })
              }
            />
            <label
              className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
              for="flexCheckDefault"
            >
              {getValueOf(" Fix Discount")}
            </label>

            {promoCodeData.isDiscount && discount ? (
              <div className="add-new-stock-field my-1 ms-sm-3">
                <label>Discount %</label>
                <input
                  type="number"
                  placeholder={getValueOf("Discount %")}
                  className="py-2 px-3 w-100"
                  value={promoCodeData.discount}
                  onChange={(e) =>
                    setPromoCodeData({
                      ...promoCodeData,
                      discount: e.target.value,
                    })
                  }
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/**Fixed amount */}
        <div className="row">
          <div className="col">
            <input
              className="cursor-pointer my-3 ms-sm-3"
              type="checkbox"
              checked={discount ? false : promoCodeData.isFixedAmount}
              onClick={() => checkboxHandler("amount")}
              onChange={(e) =>
                setPromoCodeData({
                  ...promoCodeData,
                  isFixedAmount: e.target.checked,
                })
              }
            />
            <label
              className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
              for="flexCheckDefault"
            >
              {getValueOf("Fix Amount")}
            </label>

            {promoCodeData.isFixedAmount && amount ? (
              <div className="add-new-stock-field my-1 ms-sm-3">
                <label>Amount</label>
                <input
                  type="number"
                  value={promoCodeData.amount}
                  placeholder={getValueOf("Amount")}
                  className="py-2 px-3 w-100"
                  onChange={(e) =>
                    setPromoCodeData({
                      ...promoCodeData,
                      amount: e.target.value,
                    })
                  }
                />
                <span className="text-danger">
                  {error && promoCodeData.amount === "" ? (
                    <span> {getValueOf("Amount is required")}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/**Plan Gift */}
        <div className="row">
          <div className="col">
            <input
              className="cursor-pointer my-3 ms-sm-3"
              type="checkbox"
              checked={promoCodeData.isGift}
              onChange={(e) =>
                setPromoCodeData({
                  ...promoCodeData,
                  isGift: e.target.checked,
                })
              }
            />
            <label
              className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
              for="flexCheckDefault"
            >
              {getValueOf("Gift")}
            </label>

            {promoCodeData.isGift ? (
              <div className="add-new-stock-field my-3 ms-sm-3">
                <label>Email</label>
                <input
                  type="email"
                  value={promoCodeData.userEmail}
                  placeholder={getValueOf("Email")}
                  className="py-2 px-3 w-100"
                  onChange={(e) =>
                    setPromoCodeData({
                      ...promoCodeData,
                      userEmail: e.target.value,
                    })
                  }
                />
                {promoCodeData.isGift &&
                error &&
                promoCodeData.userEmail === "" ? (
                  <span className="text-danger">
                    {getValueOf("Email is required")}
                  </span>
                ) : (
                  ""
                )}
                <br></br>
                <label className="mt-3">Gift Message</label>
                <GiftEditor
                  setPromoCodeData={setPromoCodeData}
                  promoCodeData={promoCodeData}
                />
                {promoCodeData.isGift &&
                error &&
                promoCodeData.giftText === "" ? (
                  <span className="text-danger">
                    {getValueOf("Gift Message is required")}
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/**Related plans */}
        <div className="row">
          <div className="col">
            <input
              className="cursor-pointer my-3 ms-sm-3"
              type="checkbox"
              checked={promoCodeData.isReleatedToPlan}
              onChange={(e) =>
                setPromoCodeData({
                  ...promoCodeData,
                  isReleatedToPlan: e.target.checked,
                })
              }
            />
            <label
              className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
              for="flexCheckDefault"
            >
              {getValueOf("Is Related To Plan")}
            </label>

            {promoCodeData.isReleatedToPlan ? (
              <>
                {loading ? (
                  <BubblesLoader />
                ) : (
                  planList &&
                  planList.length > 0 &&
                  planList.map((plan, index) => {
                    return (
                      <div key={index} className="add-new-stock-field ms-sm-3">
                        <input
                          className="cursor-pointer my-3 ms-sm-3"
                          type="checkbox"
                          onClick={() =>
                            selectPlanForPromoCode(plan._id, plan.title)
                          }
                        />
                        <label
                          className=" cursor-pointer fw-bold ms-2 mt-1"
                          for="flexCheckDefault"
                        >
                          {getValueOf(`${plan.title}`)}
                        </label>
                      </div>
                    );
                  })
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="d-flex flex-sm-row flex-column  justify-content-center">
          {edit ? (
            <button
              className="px-5 py-2 add-button  my-sm-3"
              onClick={() => updatePromoCodeDetails()}
            >
              {promoCodeLoading ? <Loader /> : `${getValueOf("Update")}`}
            </button>
          ) : (
            <button
              className="px-5 py-2 add-button  my-sm-3"
              onClick={() => submitPromoCodeDetails()}
            >
              {promoCodeLoading ? <Loader /> : `${getValueOf("Submit")}`}
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PromocodePopup;
