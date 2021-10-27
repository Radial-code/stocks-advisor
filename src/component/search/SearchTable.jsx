import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router";
import moment from "moment";
import Sortarrow from "../../assets/img/sortarrow.png";

const SearchTable = ({ history, searchNewsList, searchshow }) => {
  return (
    <>
      <Table hover className="mt-sm-0 mt-3">
        <thead className="portfolio-sticky">
          <tr className="user-list-panel">
            <th className="whitespace table-width">
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
              Date
            </th>
            <th className="whitespace table-width-header">
              <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Title
            </th>
          </tr>
        </thead>
        <tbody className="user-details">
          {searchNewsList && !!searchNewsList.length
            ? searchNewsList.map((value, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => history.push(`/news/details/${value._id}`)}
                  >
                    <td className="whitespace Ellipse cursor-pointer">
                      {moment(value.createdAt).format("MM/ddd")}
                    </td>
                    <td className="whitespace Ellipse cursor-pointer">
                      {value.description}
                    </td>
                  </tr>
                );
              })
            : "You don't have any news"}
        </tbody>
      </Table>
    </>
  );
};
export default withRouter(SearchTable);
