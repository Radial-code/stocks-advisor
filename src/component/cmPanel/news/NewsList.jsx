import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsTable from "./NewsTable";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const NewsList = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <Col className="d-flex justify-content-lg-end">
      <section className="user-panel-card w-xl-1000 p-4  pt-5">
        <div className="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column">
          <p className="heading-stock fs-sm-20 fs-sm-20">All News</p>
          <div>
            <Link to="/content/manager/news/add" className="add-new-btn">
              <button className="update-btn">Add New</button>
            </Link>
          </div>
        </div>
        <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
          <NewsTable />
        </div>
      </section>
    </Col>
  );
};
export default NewsList;
