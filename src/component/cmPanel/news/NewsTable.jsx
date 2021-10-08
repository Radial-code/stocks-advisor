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
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <Table hover>
          <thead className="portfolio-sticky">
            <tr className="user-list-panel">
              <th className="whitespace table-width">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Date
              </th>
              <th className="whitespace table-width-header">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Title
              </th>
              <th className="whitespace">
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
                      <td className="whitespace Ellipse">
                        {" "}
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td className="whitespace Ellipse">
                        {value.description}
                      </td>
                      <td className="whitespace Ellipse">{value.tags}</td>
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
