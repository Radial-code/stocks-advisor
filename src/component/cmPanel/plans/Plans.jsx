import PlansTable from "./PlansTable";
import { Link } from "react-router-dom";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const Plans = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 d-flex justify-content-end current-stock-block ">
          <div className="current-stock-bg p-sm-3 p-2">
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <h1 className="current-stock-text ff-popins mb-0 fs-sm-20">
                Our Plans
              </h1>
              <Link to="/content/manager/our/plans/form">
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
