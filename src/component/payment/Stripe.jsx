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
  "pk_test_51Ix50ySAXA6ohppa6sCSbgt2LbGnFl07UlO5v7HnRza0NT0idMwCYas5ouQBR8GEmv4l2SeR3lfwJXKzVUxmkghh00fs3EjdLI"
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
