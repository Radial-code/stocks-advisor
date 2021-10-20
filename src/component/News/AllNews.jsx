import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsList from "./NewsList";

const AllNews = () => {
  const allNewsList = useSelector((state) => state.cmPanel.allNews);
  return (
    <div>
      <Row className="h-100">
        <Col
          xs={12}
          className="mt-sm-3   justify-content-center d-sm-block news-scroll"
        >
          {allNewsList && allNewsList.length
            ? allNewsList.map((value, index) => {
                return <NewsList value={value} index={index} />;
              })
            : null}
        </Col>
      </Row>
    </div>
  );
};
export default withRouter(AllNews);
