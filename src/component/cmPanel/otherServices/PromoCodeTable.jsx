import React, { useEffect, useState } from "react";
import BubblesLoader from "../../common/BubblesLoader";
import NoData from "../../../assets/img/emptydata.jpg";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { getPromoCodeListAction } from "../../../redux/action/promoCode";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import PromoCodeTableList from "./PromoCodeTableList";

const PromoCodeTable = ({ setUpdateValue, setShow, setEdit }) => {
  const { getValueOf, layoutClickChanger } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const promoCodeList = useSelector((state) => state.list.promoCodeList);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPromoCode, setTotalPromoCode] = useState(0);

  const editPortfolios = (value) => {
    setShow(true);
    setEdit(true);
    setUpdateValue(value);
  };

  useEffect(() => {
    dispatch(getPromoCodeListAction(setLoading, setTotalPromoCode));
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <>
          {promoCodeList && promoCodeList.length !== 0 ? (
            <PromoCodeTableList
              getValueOf={getValueOf}
              layoutClickChanger={layoutClickChanger}
              dispatch={dispatch}
              loading={loading}
              promoCodeList={promoCodeList}
              editPortfolios={editPortfolios}
            />
          ) : (
            <div className="d-flex text-center flex-column">
              <img
                className="nodata-img d-inline-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <h4 className="fw-bold">
                {getValueOf("You don't have any Promo Code list.")}
              </h4>
            </div>
          )}
        </>
      )}
      {totalPromoCode <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalPromoCode / 10)}
              marginPagesDisplayed={3}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"activePage"}
              initialPage={page}
            />
          ) : (
            <div className="react-pagination">
              {totalPromoCode <= 10 ? (
                ""
              ) : (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalPromoCode / 10)}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"activePage"}
                  initialPage={page}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default PromoCodeTable;
