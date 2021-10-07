import React, { useState } from "react";
import PortfolioTable from "./PortfolioTable";
import { Modal } from "react-bootstrap";

function Portfolio() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex flex-sm-row flex-column justify-content-end align-items-center">
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
          <PortfolioTable setShow={setShow} show={show} />
        </div>
      </div>
      {/* Modal */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="d-block">
          <Modal.Title>
            <p className="mb-0 text-center fw-bold">Add Portfolio</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="add-new-stock-field my-3 ms-sm-3">
            <input
              type="text"
              placeholder=" Add Portfolio"
              className="py-2 px-3 w-100"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-block text-center">
          <button className="px-5 py-2 add-button ms-3 my-sm-3">Submit</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Portfolio;
