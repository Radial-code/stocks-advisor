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
      await dispatch(getBuyPlanAction(data, setLoading, setPaymentId));
    }
    if (paymentId) {
      const data = {
        planId: id,
        id: paymentId,
        promoCode: promoCode ? promoCode : "",
      };
      setTimeout(await dispatch(confirmPlanByIdForStripe(data, history)), 7000);
    }
  };

  useEffect(() => {
    handleSubmitPayment();
  }, [paymentMethod, stripeID, paymentId]);

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

  return (
    <div className="col ml-lg-5 col-12">
      <section className="bg-white br-9_4 p-30 p-9 shadow-sm payment-container px-3 py-4 h-100 mt-lg-4 mt-5">
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
          {error && <StripeErrorMessage>{error.message}</StripeErrorMessage>}
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
    </div>
  );
};
export default withRouter(StripeForm);
