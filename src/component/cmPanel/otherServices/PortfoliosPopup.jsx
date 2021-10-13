import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addNewPortfolioDetailsAction,
  updatePortfolioDetailsAction,
} from "../../../redux/action/cmPanel/OurServices";
import Loader from "../../common/Loader";

function PortfoliosPopup({ handleClose, show, edit, updateValue }) {
  const dispatch = useDispatch();
  const [portfolios, setPortfolios] = useState(
    !!updateValue && !!updateValue.title ? updateValue.title : ""
  );
  const [loading, setLoading] = useState(false);

  const submitPortfoliosDetails = () => {
    if (portfolios !== "") {
      const data = { title: portfolios };
      dispatch(addNewPortfolioDetailsAction(data, setLoading, handleClose));
    }
  };

  const updatePortfolios = () => {
    if (updateValue._id) {
      if (portfolios !== "") {
        const data = { title: portfolios };
        dispatch(
          updatePortfolioDetailsAction(
            updateValue._id,
            data,
            setLoading,
            handleClose
          )
        );
      }
      setPortfolios("");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-block">
        <Modal.Title>
          <p className="mb-0 text-center fw-bold">
            {edit ? "Update Portfolio" : "Add Portfolio"}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            value={!!portfolios ? portfolios : updateValue.title}
            placeholder=" Add portfolios"
            className="py-2 px-3 w-100"
            onChange={(e) => setPortfolios(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="d-block text-center">
        {edit ? (
          <button
            onClick={() => updatePortfolios()}
            disabled={loading}
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        ) : (
          <button
            onClick={() => submitPortfoliosDetails()}
            disabled={loading}
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default PortfoliosPopup;