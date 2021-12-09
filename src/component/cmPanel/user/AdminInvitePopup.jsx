import React, { useEffect, useState } from "react";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../assets/img/close-icon.png";
import { useDispatch } from "react-redux";
import {
  inviteFriendsMessageAction,
  updateInviteFriendMessageAction,
} from "../../../redux/action/inviteFriends";
import Loader from "../../common/Loader";
import GiftEditor from "../otherServices/GiftEditor";
import GiftInvite from "./GiftInvite";

const initialState = {
  isDiscount: false,
  discount: "",
  amount: "",
  isFixedAmount: false,
  message: "",
  isGift: false,
  userEmail: "",
  giftText: "",
};

const AdminInvitePopup = ({ handleClose, show, inviteMessageCode }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(false);
  const [error, setError] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [inviteFriendMessage, setInviteFriendMessage] = useState(false);
  const { getValueOf, layoutClickChanger } = useLayoutChangerProvider();

  const [inviteDetails, setInviteDetails] = useState(initialState);

  const checkboxHandler = (value) => {
    if (value === "amount") {
      setAmount(!amount);
      setDiscount(false);
    } else if (value === "discount") {
      setDiscount(!discount);
      setAmount(false);
    }
  };

  useEffect(() => {
    if (inviteMessageCode.length > 0) {
      setInviteDetails(inviteMessageCode[0]);
    } else {
      setInviteDetails(initialState);
    }
  }, [inviteMessageCode]);

  const saveInviteDetails = () => {
    setError(true);
    if (inviteDetails.message !== "") {
      const data = {
        isDiscount: amount ? false : inviteDetails.isDiscount,
        discount: !amount ? inviteDetails.discount : null,
        amount: inviteDetails.isFixedAmount ? inviteDetails.amount : null,
        isFixedAmount: discount ? false : inviteDetails.isFixedAmount,
        message: inviteDetails.message,

        isGift: inviteDetails.isGift,
        userEmail: inviteDetails.isGift ? inviteDetails.userEmail : null,
        giftText: inviteDetails.isGift ? inviteDetails.giftText : null,
      };
      dispatch(
        inviteFriendsMessageAction(data, setInviteFriendMessage, handleClose)
      );
    }
  };

  const updateInviteFriend = () => {
    setError(true);
    if (inviteDetails.message !== "") {
      const data = {
        isDiscount: amount ? false : inviteDetails.isDiscount,
        discount: !amount ? inviteDetails.discount : null,
        amount: inviteDetails.isFixedAmount ? inviteDetails.amount : null,
        isFixedAmount: discount ? false : inviteDetails.isFixedAmount,
        message: inviteDetails.message,
        isGift: inviteDetails.isGift,
        userEmail: inviteDetails.isGift ? inviteDetails.userEmail : null,
        giftText: inviteDetails.isGift ? inviteDetails.giftText : null,
      };
      dispatch(
        updateInviteFriendMessageAction(
          inviteMessageCode[0]._id,
          data,
          setInviteFriendMessage,
          handleClose
        )
      );
    }
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
            {inviteMessageCode.length > 0 ? "Update Message" : "Create Message"}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <div className=" mb-2">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              rows="6"
              placeholder={"Invite...."}
              value={inviteDetails.message}
              onChange={(e) => {
                setInviteDetails({ ...inviteDetails, message: e.target.value });
              }}
            ></textarea>
            {error && inviteDetails.message === "" && (
              <p className="text-danger">Please enter message</p>
            )}
          </div>

          <div className="row">
            <div className="col">
              <input
                className="cursor-pointer my-3 ms-sm-2"
                type="checkbox"
                checked={inviteDetails.isFixedAmount}
                onClick={() => checkboxHandler("amount")}
                onChange={(e) => {
                  setInviteDetails({
                    ...inviteDetails,
                    isFixedAmount: e.target.checked,
                  });
                }}
              />
              <label
                className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
                for="flexCheckDefault"
              >
                Fix Amount
              </label>
              {amount ? (
                <>
                  <div className="add-new-stock-field my-1 ms-sm-2">
                    <label>Amount</label>
                    <input
                      type="number"
                      value={inviteDetails.amount}
                      placeholder="Amount"
                      className="py-2 px-3 w-100"
                      onChange={(e) => {
                        setInviteDetails({
                          ...inviteDetails,
                          amount: e.target.value,
                        });
                      }}
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="cursor-pointer my-3 ms-sm-2"
                type="checkbox"
                checked={inviteDetails.isDiscount}
                onClick={() => checkboxHandler("discount")}
                onChange={(e) => {
                  setInviteDetails({
                    ...inviteDetails,
                    isDiscount: e.target.checked,
                  });
                }}
              />
              <label
                className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
                for="flexCheckDefault"
              >
                Fix Discount
              </label>
              {discount ? (
                <>
                  {" "}
                  <div className="add-new-stock-field my-1 ms-sm-2">
                    <label>Discount</label>
                    <input
                      type="number"
                      placeholder=" Discount %"
                      className="py-2 px-3 w-100"
                      value={inviteDetails.discount}
                      onChange={(e) => {
                        setInviteDetails({
                          ...inviteDetails,
                          discount: e.target.value,
                        });
                      }}
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="cursor-pointer my-3 ms-sm-3"
                type="checkbox"
                checked={inviteDetails.isGift}
                onChange={(e) =>
                  setInviteDetails({
                    ...inviteDetails,
                    isGift: e.target.checked,
                  })
                }
              />
              <label
                className={`${
                  layoutClickChanger ? "me-2" : "ms-2"
                } form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 `}
                for="flexCheckDefault"
              >
                {getValueOf("Gift")}
              </label>

              {inviteDetails.isGift ? (
                <div className="add-new-stock-field my-3 ms-sm-3">
                  <label>Email</label>
                  <input
                    type="email"
                    value={inviteDetails.userEmail}
                    placeholder={getValueOf("Email")}
                    className="py-2 px-3 w-100"
                    onChange={(e) =>
                      setInviteDetails({
                        ...inviteDetails,
                        userEmail: e.target.value,
                      })
                    }
                  />
                  {inviteDetails.isGift &&
                  error &&
                  inviteDetails.userEmail === "" ? (
                    <span className="text-danger">
                      {getValueOf("Email is required")}
                    </span>
                  ) : (
                    ""
                  )}
                  <br></br>
                  <label className="mt-3">Gift Message</label>
                  <GiftInvite
                    setInviteDetails={setInviteDetails}
                    inviteDetails={inviteDetails}
                  />
                  {inviteDetails.isGift &&
                  error &&
                  inviteDetails.giftText === "" ? (
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
          <div className="d-flex justify-content-sm-start align-items-center flex-sm-row flex-column my-4">
            <div className="add-new-btn w-100">
              {inviteMessageCode.length === 0 ? (
                <button
                  type="button"
                  onClick={() => saveInviteDetails()}
                  className="update-btn"
                >
                  {inviteFriendMessage ? <Loader /> : `${getValueOf("Submit")}`}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => updateInviteFriend()}
                  className="update-btn"
                >
                  {inviteFriendMessage ? <Loader /> : `${getValueOf("Update")}`}
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminInvitePopup;
