import React from "react";
import "./Pagination.css";
const PagiNation = () => {
  return (
    <div className="mt-sm-4 mt-3">
      <div className="row">
        <div className="col-12">
          <ul className="d-flex pagination-number ">
            <li className="arrow-icon px-3 py-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </li>
            <li className="px-3 py-3">3</li>
            <li className="px-3 py-3">2</li>
            <li className="px-3 py-3">1</li>

            <li className="arrow-icon px-3 py-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PagiNation;
