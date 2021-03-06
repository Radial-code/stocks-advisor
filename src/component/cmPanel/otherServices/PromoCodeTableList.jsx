import React from "react";
import BubblesLoader from "../../common/BubblesLoader";
import { deletePromoCodeAction } from "../../../redux/action/promoCode";
import moment from "moment";
import Swal from "sweetalert2";

const PromoCodeTableList = ({
  layoutClickChanger,
  dispatch,
  loading,
  promoCodeList,
  editPortfolios,
}) => {
  const deletePromoCode = (id) => {
    if (id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-success",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: `${layoutClickChanger ? "? Are You Sure" : "Are You Sure ?"}`,
          text: `${
            layoutClickChanger
              ? ".You want to delete This Promo Code"
              : "You want to delete This Promo Code."
          }`,
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(deletePromoCodeAction(id));
          }
        });
    }
  };

  return (
    <table className="table table-borderless table-hover mb-3">
      <thead className="portfolio-sticky ">
        <tr className="current-stock-table-head table-border-bottom table-border-top">
          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            Start Date
          </th>
          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            End Date
          </th>

          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            Code
          </th>
          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            Type
          </th>

          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            Edit
          </th>
          <th scope="col" className="text-end position-sticky top-0 whitespace">
            {/* <span>
              <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            </span> */}
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <BubblesLoader />
        ) : promoCodeList && promoCodeList.length > 0 ? (
          promoCodeList.map((value, index) => {
            return (
              <tr
                key={index}
                className="current-stock-data table-border-bottom"
              >
                <td className="text-end whitespace Ellipse">
                  {moment(value.startDate).format("DD/MM/YY")}
                </td>
                <td className="text-end whitespace Ellipse">
                  {moment(value.endDate).format("DD/MM/YY")}
                </td>
                <td className="text-end whitespace Ellipse">{value.code}</td>
                <td className="text-end whitespace Ellipse">
                  {value.isGift ? "Gifted" : "Not Gifted"}
                </td>
                <td className="text-end whitespace Ellipse">
                  <button
                    type="button"
                    onClick={() => editPortfolios(value)}
                    className="px-3 py-1 edit-button "
                    type="button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-end whitespace Ellipse">
                  <button
                    type="button"
                    onClick={() => deletePromoCode(value._id)}
                    className="px-3 py-1 delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          ""
        )}
      </tbody>
    </table>
  );
};

export default PromoCodeTableList;
