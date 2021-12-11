import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AddNewNews from "./AddNewNews";
import "../../cmPanelCss/News.css";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { getNewsDetailsAction } from "../../../redux/action/news";

const AddNews = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!!id) {
      setEdit(true);
      dispatch(getNewsDetailsAction(id, setLoading));
    }
  }, [id, dispatch]);

  return (
    <Container>
      <Row>
        <AddNewNews edit={edit} loading={loading} />
      </Row>
    </Container>
  );
};
export default withRouter(AddNews);
