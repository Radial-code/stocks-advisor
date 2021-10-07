import React, { useState } from "react";
import CategoryTable from "./CategoryTable";

function Category() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <div className="row">
        <div className="col-12 d-flex flex-sm-row flex-column justify-content-end align-items-center">
          {showInput ? (
            <div className="add-new-stock-field my-3 ms-sm-3">
              <input
                type="text"
                placeholder=" Add Category"
                className="py-1 px-3"
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <button
              className="px-3 py-1 add-button ms-3 my-sm-3"
              onClick={() => setShowInput(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
        <div className="table-responsive  current-stock-scrollbar h-100">
          <CategoryTable />
        </div>
      </div>
    </div>
  );
}
export default Category;
