import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const stripePromise = loadStripe(
  "pk_test_51JojDBSA6U9MBWzFtxmw0E1QxCkuXOW4qlOGhqtFPlS6Mo84Rsvbs65KVJ0JjSdC7HmYnSwgvu8zkM8lYpfF9RDt008ZkphiZj"
);

const Stripe = () => {
  return (
    <div className="AppWrapper">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <Payment />
      </Elements>
    </div>
  );
};
export default Stripe;
