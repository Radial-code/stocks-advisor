import React, { useState } from "react";
import Swal from "sweetalert2";
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

const StripeForm = ({ loader, match, history }) => {
  const { id } = match.params;
  const stripeID = useSelector((state) => state.list.stripeID);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
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
    if (paymentMethod) {
      dispatch(AddStripePaymentId(paymentMethod.id));
    }
    if (stripeID) {
      const data = {
        planId: id,
        id: stripeID,
      };
      dispatch(getBuyPlanAction(data, setLoading, history));
    }
  }, [paymentMethod, stripeID]);

  return (
    <div className="col-lg-5 ml-lg-5 col-12 pt-lg-5 mt-lg-5 pt-4">
      <section className="bg-white br-9_4 p-30 p-9 shadow-sm payment-container px-3 py-4">
        <div>
          <p className="fs-24 payment-stripe-text">Payment</p>
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
          <StripeSubmitButton
            processing={processing}
            error={error}
            disabled={!stripe}
          >
            {loader || loading ? <Loader /> : "Payment"}
          </StripeSubmitButton>
        </form>
      </section>
    </div>
  );
};
export default withRouter(StripeForm);
