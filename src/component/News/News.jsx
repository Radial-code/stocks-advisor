import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllNewsListAction } from "../../redux/action/news";
import Main from "./Main";

const News = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllNewsListAction(setLoading));
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

export default News;
