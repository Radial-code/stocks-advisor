import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addNewExchangeDetailsAction,
  updateExchangeDetailsAction,
} from "../../../redux/action/cmPanel/OurServices";
import Loader from "../../common/Loader";
import CloseIcon from "../../../assets/img/close-icon.png";

function ExchangePopup({ handleClose, show, edit, updateValue }) {
  const dispatch = useDispatch();
  const [Exchange, setExchange] = useState(
    !!updateValue && !!updateValue.title ? updateValue.title : ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitExchangeDetails = () => {
    setError(true);
    if (Exchange !== "") {
      const data = { title: Exchange };
      dispatch(addNewExchangeDetailsAction(data, setLoading, handleClose));
    }
  };

  const updateExchange = () => {
    setError(true);
    if (Exchange !== "") {
      const data = { title: Exchange };
      dispatch(
        updateExchangeDetailsAction(
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
        <img
          className="close-popup-icon "
          onClick={handleClose}
          src={CloseIcon}
          alt=""
        />
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {edit ? "Update Exchange" : "Add Exchange"}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            value={!!Exchange ? Exchange : updateValue.title}
            placeholder="Add Exchange"
            className="py-2 px-3 w-100"
            onChange={(e) => setExchange(e.target.value)}
          />
          <span className="text-danger">
            {error && Exchange === "" ? "Exchange is required" : null}
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-block text-center">
        {edit ? (
          <button
            onClick={() => updateExchange()}
            disabled={loading}
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {loading ? <Loader /> : "Update"}
          </button>
        ) : (
          <button
            onClick={() => submitExchangeDetails()}
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
export default ExchangePopup;
