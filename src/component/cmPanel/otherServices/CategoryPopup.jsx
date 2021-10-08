import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewCategoryDetailsAction } from "../../../redux/action/cmPanel/OurServices";
import Loader from "../../common/Loader";

function CategoryPopup({ handleClose, show, edit, updateValue }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(
    updateValue !== "" ? updateValue : ""
  );
  const [loading, setLoading] = useState(false);

  const submitCategoryDetails = () => {
    if (category !== "") {
      const data = { title: category };
      dispatch(addNewCategoryDetailsAction(data, setLoading, handleClose));
    }
  };

  const updateCategory = () => {
    if (category !== "") {
      const data = { title: category };
      // dispatch(updateCategoryDetails(data, setLoading, handleClose));
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-block">
        <Modal.Title>
          <p className="mb-0 text-center fw-bold">
            {edit ? "Update Category" : "Add Category"}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            value={category}
            placeholder=" Add Category"
            className="py-3 px-3 w-100"
            onChange={(e) => setCategory(e.target.value)}
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