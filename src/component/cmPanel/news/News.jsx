import { Container, Row } from "react-bootstrap";
import NewsList from "./NewsList";
import "../../cmPanelCss/News.css";

const News = () => {
  return (
    <Container>
      <Row>
        <NewsList />
      </Row>
    </Container>
  );
};
export default News;
