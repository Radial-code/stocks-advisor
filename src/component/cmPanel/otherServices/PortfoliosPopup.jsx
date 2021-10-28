import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addNewPortfolioDetailsAction,
  updatePortfolioDetailsAction,
} from "../../../redux/action/cmPanel/OurServices";
import Loader from "../../common/Loader";
import CloseIcon from "../../../assets/img/close-icon.png";

function PortfoliosPopup({ handleClose, show, edit, updateValue }) {
  const dispatch = useDispatch();
  const [portfolios, setPortfolios] = useState(
    !!updateValue ? updateValue.title : ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitPortfoliosDetails = () => {
    setError(true);
    if (portfolios !== "" && portfolios !== undefined) {
      const data = { title: portfolios };
      dispatch(addNewPortfolioDetailsAction(data, setLoading, handleClose));
    }
  };

  const updatePortfolios = () => {
    setError(true);
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
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className=" p-sm-3 p-2">
        {" "}
        <img
          className="close-popup-icon "
          onClick={handleClose}
          src={CloseIcon}
          alt=""
        />
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {edit ? "Update Portfolio" : "Add Portfolio"}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            value={!!portfolios ? portfolios : updateValue.title}
            placeholder=" Add portfolios"
            className="py-2 px-3 w-100"
            onChange={(e) => setPortfolios(e.target.value)}
          />
          <span className="text-danger">
            {error && portfolios === undefined
              ? "Portfolios is required"
              : null}
          </span>
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
