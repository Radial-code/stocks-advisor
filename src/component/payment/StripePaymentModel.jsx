import { Modal } from "react-bootstrap";

const StripePaymentModel = ({ stripeUrl, paymentOpen, setPaymentOpen }) => {
  return (
    <>
      <Modal
        className=""
        show={paymentOpen}
        centered
        onHide={() => setPaymentOpen(false)}
        animation={false}
      >
        <Modal.Body className="border-0">
          <h1 className="App">Please Wait...</h1>
          <iframe src={`${stripeUrl}`} frameborder="0" width="100%"></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default StripePaymentModel;
