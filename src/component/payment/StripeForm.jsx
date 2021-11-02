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
  getBuyPlanAction,
} from "../../redux/action/payment";
import { withRouter } from "react-router";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const StripeForm = ({ loader, match, history }) => {
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
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

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
    setErrorPayment(true);
    if (paymentMethod) {
      dispatch(AddStripePaymentId(paymentMethod.id));
    }
    if (stripeID && reCaptchaToken) {
      const data = {
        planId: id,
        id: stripeID,
        "recaptcha-token": reCaptchaToken,
      };
      dispatch(getBuyPlanAction(data, setLoading, history));
    }
  }, [paymentMethod, stripeID]);

  return (
    <div className="col-lg-5 ml-lg-5 col-12 pt-lg-5 mt-lg-5 pt-4">
      <section className="bg-white br-9_4 p-30 p-9 shadow-sm payment-container px-3 py-4">
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
          <div className="mt-3" style={{ maWidth: "100%" }}>
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
            disabled={!stripe}
          >
            {loader || loading ? <Loader /> : `${getValueOf("Payment")}`}
          </StripeSubmitButton>
        </form>
      </section>
    </div>
  );
};
export default withRouter(StripeForm);
