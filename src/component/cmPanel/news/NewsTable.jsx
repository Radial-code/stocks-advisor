import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import BubblesLoader from "../../common/BubblesLoader";
import { getNewsListForAdminAction } from "../../../redux/action/news";

const NewsTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const adminNewsList = useSelector((state) => state.cmPanel.adminNewsList);

  useEffect(() => {
    dispatch(getNewsListForAdminAction(setLoading));
  }, []);

  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <Table responsive hover className="">
          <thead className="portfolio-sticky">
            <tr className="user-list-panel">
              <th>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Date
              </th>
              <th>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Title
              </th>
              <th>
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminNewsList && !!adminNewsList.length
              ? adminNewsList.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td> {moment(value.createdAt).format("MM/ddd")}</td>
                      <td>{value.description}</td>
                      <td>{value.tags}</td>
                    </tr>
                  );
                })
              : "You don't have any news"}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default NewsTable;
