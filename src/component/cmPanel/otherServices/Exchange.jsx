import React, { useState } from "react";
import ExchangeTable from "./ExchangeTable";

function Exchange() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end align-items-center">
          {showInput ? (
            <div className="add-new-stock-field my-3 ms-3">
              <input
                type="text"
                placeholder="Add Exchange"
                className="py-1 px-3"
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <button
              className="px-3 py-1 add-button ms-3 my-3"
              onClick={() => setShowInput(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ExchangeTable />
    </div>
  );
}

export default Exchange;
