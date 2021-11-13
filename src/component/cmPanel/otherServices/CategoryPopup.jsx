import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addNewCategoryDetailsAction,
  updateCategoryDetailsAction,
} from "../../../redux/action/cmPanel/OurServices";
import Loader from "../../common/Loader";
import CloseIcon from "../../../assets/img/close-icon.png";

function CategoryPopup({ handleClose, show, edit, updateValue, getValueOf }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(
    !!updateValue ? updateValue.title : ""
  );
  const [acategory, setaCategory] = useState(
    !!updateValue ? updateValue.atitle : ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitCategoryDetails = () => {
    setError(true);
    if (category !== "") {
      const data = { title: category, atitle: acategory };
      dispatch(addNewCategoryDetailsAction(data, setLoading, handleClose));
    }
  };

  const updateCategory = () => {
    setError(true);
    if (category !== "") {
      const data = { title: category };
      dispatch(
        updateCategoryDetailsAction(
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
            {edit ? "Update Category" : "Add Category"}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            value={!!category ? category : updateValue.title}
            placeholder="English Category"
            className="py-2 px-3 w-100"
            onChange={(e) => setCategory(e.target.value)}
          />
          <span className="text-danger">
            {error && category === "" ? "Category is required" : null}
          </span>
          <input
            type="text"
            value={!!acategory ? acategory : updateValue.title}
            placeholder="Arabic Category"
            className="py-2 px-3 w-100 mt-2"
            onChange={(e) => setaCategory(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="d-block text-center">
        {edit ? (
          <button
            onClick={() => updateCategory()}
            disabled={loading}
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        ) : (
          <button
            onClick={() => submitCategoryDetails()}
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
export default CategoryPopup;
