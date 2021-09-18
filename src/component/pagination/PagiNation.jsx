import React from "react";
import "./Pagination.css";
const PagiNation = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5">
          <ul className="d-flex pagination-number">
            <li></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PagiNation;
