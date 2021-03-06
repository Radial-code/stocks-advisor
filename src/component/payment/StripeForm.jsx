import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import StripeErrorMessage from "./StripeErrorMessage";
import StripeCardField from "./StripeCardField";
import { useDispatch, useSelector } from "react-redux";
import StripeSubmitButton from "./StripeSubmitButton";
import { useEffect } from "react";
import Loader from "../common/Loader";
import {
  AddStripePaymentId,
  confirmPlanByIdForStripe,
  getBuyPlanAction,
} from "../../redux/action/payment";
import { withRouter } from "react-router";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { verifyPromoCodeAction } from "../../redux/action/promoCode";
import StripePaymentModel from "./StripePaymentModel";
import { useSocket } from "../../redux/SocketProvider";

const StripeForm = ({
  loader,
  match,
  history,
  setPromoCodeData,
  promoCodeData,
  youHaveToPay,
}) => {
  const { getValueOf } = useLayoutChangerProvider();
  const { id } = match.params;
  const stripeID = useSelector((state) => state.list.stripeID);
  const paymentStatus = useSelector((state) => state.list.paymentStatus);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [errorPayment, setErrorPayment] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentId, setPaymentId] = useState("");
  const [promoCodeDetails, setPromoCodeDetails] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [stripeUrl, setStripeUrl] = useState("");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const socket = useSocket();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    if (error) {
      card.focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  useEffect(() => {
    if (paymentId) {
      if (Object.keys(paymentStatus).length === 0) {
        console.log("paymentStatus", paymentStatus);
        setTimeout(socket.emit("payment_status", { id: paymentId }), 10000);
      }
    }
    if (paymentStatus && paymentStatus.message === "Payment requires action") {
      console.log("paymentStatus", paymentStatus);
      setTimeout(socket.emit("payment_status", { id: paymentId }), 10000);
    }
  }, [dispatch, paymentId, paymentStatus]);

  useEffect(() => {
    if (paymentStatus && paymentStatus.message === "Payment confirmed") {
      setPaymentOpen(false);
      const data = {
        planId: id,
        id: paymentId,
        promoCode: promoCode ? promoCode : "",
      };
      dispatch(confirmPlanByIdForStripe(data, history));
    }
  }, [paymentStatus]);

  const handleSubmitPayment = async () => {
    setErrorPayment(true);
    if (paymentMethod) {
      await dispatch(AddStripePaymentId(paymentMethod.id));
    }
    if (stripeID && reCaptchaToken) {
      const data = {
        planId: id,
        id: stripeID,
        amount: youHaveToPay,
        "recaptcha-token": reCaptchaToken,
      };
      await dispatch(
        getBuyPlanAction(data, setLoading, setPaymentId, setStripeUrl)
      );
    }
  };

  useEffect(() => {
    handleSubmitPayment();
  }, [paymentMethod, stripeID]);

  const submitPromoCode = () => {
    const data = {
      code: promoCodeDetails,
      planId: id,
    };
    dispatch(
      verifyPromoCodeAction(
        data,
        setVerifyLoading,
        setPromoCodeData,
        setPromoCode
      )
    );
  };

  const removePromoCode = () => {
    setPromoCodeData("");
    setPromoCodeDetails("");
    setPromoCode("");
  };

  useEffect(() => {
    if (stripeUrl) {
      setPaymentOpen(true);
    }
  }, [stripeUrl]);

  return (
    <div className="col ml-lg-5 col-12">
      <section className="bg-white br-9_4 p-30 p-9 shadow-sm payment-container px-3 py-4 h-100 mt-lg-4 mt-5 ">
        <div>
          <p className="fs-24 payment-stripe-text">{getValueOf("Payment")}</p>
        </div>
        <div className="w-483 b-b-1"></div>
        <form className="Form" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <StripeCardField
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
            />
          </fieldset>
          {error && (
            <StripeErrorMessage>
              <span className="text-danger">{error.message}</span>
            </StripeErrorMessage>
          )}
          <div className="row mt-3 d-flex">
            <div className="col-12">
              <input
                type="text"
                className="form-control "
                placeholder="Promo Code"
                onChange={(e) => setPromoCodeDetails(e.target.value)}
              />
              {promoCodeDetails.length > 2 && (
                <>
                  {promoCodeData && promoCodeData.success ? (
                    <button
                      className="btn btn-primary mt-2"
                      type="button"
                      onClick={() => removePromoCode()}
                    >
                      {verifyLoading ? <Loader /> : "Remove Promo Code"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary mt-2"
                      type="button"
                      onClick={() => submitPromoCode()}
                    >
                      {verifyLoading ? <Loader /> : "Apply"}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="mt-3" style={{ maWidth: "20px" }}>
            <HCaptcha
              sitekey="340a426e-e981-47e6-8a61-6ae115ab23a2"
              onVerify={(token, ekey) => setReCaptchaToken(token, ekey)}
            />
          </div>

          <span className="text-danger">
            {errorPayment && !reCaptchaToken
              ? `${getValueOf("Please solved Captcha")}`
              : null}
          </span>
          <StripeSubmitButton
            getValueOf={getValueOf}
            processing={processing}
            error={error}
            disabled={promoCodeDetails.length > 2 && !stripe}
          >
            {loader || loading ? <Loader /> : `${getValueOf("Payment")}`}
          </StripeSubmitButton>
        </form>
      </section>

      <StripePaymentModel
        stripeUrl={stripeUrl}
        paymentOpen={paymentOpen}
        setPaymentOpen={setPaymentOpen}
      />
    </div>
  );
};
export default withRouter(StripeForm);
