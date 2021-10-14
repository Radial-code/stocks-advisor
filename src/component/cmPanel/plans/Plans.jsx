import PlansTable from "./PlansTable";
import { Link } from "react-router-dom";

const Plans = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <div className="container mt-5">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row">
        <div className="col-12">
          <div className=" pb-4 content-manager mb-3">
            <div className="d-flex border-b-1 justify-content-between">
              <p className="heading-stock pr-15 fs-sm-20 mb-0">
                Content Manager
              </p>
              <span className="cursor-pointer" onClick={sideBarHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end current-stock-block ">
          <div className="current-stock-bg p-sm-3 p-2">
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <h1 className="current-stock-text ff-popins mb-0 fs-sm-20">
                Plans
              </h1>
              <Link to="/content/manager/plan/form">
                <button className="update-btn-2">Add New</button>
              </Link>
            </div>
            <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
              <div className="table-responsive  current-stock-scrollbar h-100">
                <PlansTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plans;
