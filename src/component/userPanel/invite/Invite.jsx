import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const Invite = () => {
  const { getValueOf } = useLayoutChangerProvider();

  const copyReferalUrl = (url) => {
    var copyUrlText = document.createElement("textarea");
    copyUrlText.innerText = `${url}`;
    document.body.appendChild(copyUrlText);
    copyUrlText.select();
    document.execCommand("copy");
    copyUrlText.remove();
    Swal.fire("Success!", `URL copied successfully.`, "success");
    setTimeout(Swal.close, 2000);
  };

  return (
    <div className="px-xxl-5 px-2 py-4 form-box-shadow container h-100">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            {getValueOf("Invite Your Friends")}
          </p>
        </div>
      </div>
      <div className="border mt-3 p-3 message-box">
        <p>Hey</p>
        <p>
          Join this website{" "}
          <Link
            className="text-decoration-none fs-15 text-5CBD4C "
            to="https://stockadvisor-app.herokuapp.com"
          >
            {getValueOf("https://stockadvisor.com")}.
          </Link>
        </p>
        <p>
          and user promo code :<code></code>
        </p>
        <p>to get $50 when you sign up for a plan.</p>
      </div>
      <div className="my-4 row">
        <div className="col-md-9 col-sm-7 col-6 pe-0">
          <input
            type="text"
            placeholder="https://stockadvisor-app.herokuapp.com"
            disabled="disabled"
            className="form-control  input-border-16191e33 btn-disable  py-3 profile-input-placeholder"
            id="exampleFormControlInput12"
          />
        </div>
        <div className="col-md-3 col-sm-5 col-6 ps-0">
          <div className="add-new-btn h-100">
            <button
              className="update-btn w-100 h-100"
              type="button"
              onClick={() =>
                copyReferalUrl("https://stockadvisor-app.herokuapp.com")
              }
            >
              {`${getValueOf("Copy Link")}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invite;
