import React, { useState } from "react";
import PromocodePopup from "./PromoCodePopup";
import PromoCodeTable from "./PromoCodeTable";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const Promocode = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setEdit(false);
  };
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-12 d-flex flex-sm-row flex-column justify-content-md-end justify-content-center align-items-center">
          <div>
            <button
              className="px-3 py-1 add-button ms-3 my-sm-3"
              onClick={() => handleShow(true)}
            >
              {getValueOf("Add")}
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
        <div className="table-responsive  current-stock-scrollbar h-100">
          <PromoCodeTable
            show={show}
            setShow={setShow}
            handleClose={handleClose}
          />
        </div>
      </div>
      <PromocodePopup
        setShow={setShow}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Promocode;
