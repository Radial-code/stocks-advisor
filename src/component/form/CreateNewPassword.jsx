import React from "react";

const CreateNewPassword = () => {
  return (
    <div>
      <div class="container container my-sm-5 my-3 min-h-576px-80vh pt-sm-5">
        <div class="row">
          <div class="col-xxl-5 col-lg-7 col-md-10 col-12 mx-auto form-box-shadow">
            <div class="py-4 px-xxl-5 px-3  ">
              <p class="mb-4 pb-1 pb-1 from-heading text-center">
                Create New Password
              </p>
              <div class="mb-3 mt-2 ">
                <input
                  type="text"
                  class="form-control  from-input-placeholder"
                  id="exampleFormControlInput1"
                  placeholder="New password"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control from-input-placeholder"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                />
              </div>
              <button class="border-0 w-100 mt-2 mb-4 from-btn">
                {" "}
                Create New Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
