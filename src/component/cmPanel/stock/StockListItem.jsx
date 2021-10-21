import React from "react";
import moment from "moment";

const StockListItem = ({ value, history, layoutClickChanger }) => {
  return (
    <>
      <tr
        onClick={() => history.push(`/content/manager/edit/stock/${value._id}`)}
        className="current-stock-data table-border-bottom"
      >
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {moment(value.createdAt).format("MM/ddd")}
        </td>
        <td
          className={`${
            value.profitOrLoss.status === 0
              ? "profitloss-text"
              : value.profitOrLoss.status === 1
              ? "text-dark"
              : "text-danger"
          } ${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          } `}
        >
          {/* {value &&
                        value.profitOrLoss &&
                        value.profitOrLoss.percentage
                          ? value.profitOrLoss.percentage
                          : "N/A"} */}
          {parseInt(
            value && value.profitOrLoss && value.profitOrLoss.percentage
              ? value.profitOrLoss.percentage
              : "N/A"
          ).toFixed(2)}
        </td>

        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value.isSold ? "Sold" : "No Sold"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          ${value.currentPrice}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          ${value.joinPrice}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value && value.category ? value.category.title : "N/A"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value.symbol ? value.symbol : "N/A"}
        </td>
        {/* <td
                        className={`${
                          layoutClickChanger
                            ? "text-end whitespace Ellipse"
                            : "text-start whitespace Ellipse"
                        }`}
                      >
                        {value && value.portfolio
                          ? value.portfolio.title
                          : "N/A"}
                      </td> */}
      </tr>
    </>
  );
};

export default StockListItem;
