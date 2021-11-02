const StripeSubmitButton = ({ processing, children, disabled, getValueOf }) => (
  <button
    className=" mt-4 hover-ff3700 stripe-button w-100 fs-18 fs-xs-15  py-2  font-popins  text-white fw-500  border-0    rounded-5"
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? `${getValueOf("Processing")}...` : children}
  </button>
);
export default StripeSubmitButton;
