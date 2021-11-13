import React, { useState } from "react";
import PortfolioTable from "./PortfolioTable";
import PortfoliosPopup from "./PortfoliosPopup";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

function Portfolio() {
  const { getValueOf } = useLayoutChangerProvider();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateValue, setUpdateValue] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setEdit(false);
    setUpdateValue("");
  };
  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex flex-sm-row flex-column justify-content-md-end justify-content-center align-items-center">
          <div>
            <button
              className="px-3 py-1 add-button ms-3 my-sm-3"
              onClick={() => handleShow(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
        <div className="table-responsive  current-stock-scrollbar h-100">
          <PortfolioTable
            show={show}
            setShow={setShow}
            setEdit={setEdit}
            setUpdateValue={setUpdateValue}
          />
        </div>
      </div>
      {/* Modal */}

      <PortfoliosPopup
        getValueOf={getValueOf}
        handleClose={handleClose}
        setShow={setShow}
        show={show}
        edit={edit}
        updateValue={updateValue}
      />
    </div>
  );
}
export default Portfolio;
