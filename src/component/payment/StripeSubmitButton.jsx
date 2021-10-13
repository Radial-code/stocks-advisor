const StripeSubmitButton = ({ processing, children, disabled }) => (
  <button
    className=" mt-4 hover-ff3700 px-5 w-100 fs-18 fs-xs-15 bg-EA5B32  py-2  font-popins  text-white fw-500  border-0    rounded-5"
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);
export default StripeSubmitButton;
