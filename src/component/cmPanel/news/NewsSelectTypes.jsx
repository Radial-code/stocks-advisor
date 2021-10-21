import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryListAction,
  getPortfolioListAction,
} from "../../../redux/action/cmPanel/OurServices";
import BubblesLoader from "../../common/BubblesLoader";

const categorySelectValue = [];
const categoryId = [];
const data = [];
const valueId = [];
const NewsSelectTypes = ({
  error,
  newsDetails,
  newsDetailsList,
  setCategoryArray,
  categoryArray,
}) => {
  const dispatch = useDispatch();
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);
  const categoryList = useSelector((state) => state.cmPanel.categoryList);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPortfolioListAction(setPortfolioLoading));
    dispatch(getCategoryListAction(setLoading));
  }, []);

  const selectPortfolio = (id) => {
    if (!valueId.includes(id)) {
      valueId.push(id);
      data.push({ portfolioId: id });
    } else {
      var index = data.indexOf({ portfolioId: id });
      data.splice(index, 1);
      var indexvalueId = valueId.indexOf({ portfolioId: id });
      valueId.splice(indexvalueId, 1);
    }
    newsDetails.portfolios = data;
  };

  const selectCategory = (id, title) => {
    if (!categoryId.includes(id)) {
      categoryId.push(id);
      categorySelectValue.push(title);
    } else {
      var index = categorySelectValue.indexOf(title);
      categorySelectValue.splice(index, 1);
      var indexcategoryId = categoryId.indexOf(id);
      categoryId.splice(indexcategoryId, 1);
    }
    setCategoryArray(categorySelectValue);
  };

  return (
    <>
      <p className="fw-bold">Select portfolio list</p>
      {portfolioLoading ? (
        <BubblesLoader />
      ) : (
        <>
          {portfolioList && portfolioList.length
            ? portfolioList.map((value, index) => {
                return (
                  <div className="col-auto mb-3 d-flex align-items-center">
                    <label
                      className="form-check-label check-box-text Ellipse"
                      for="flexCheckDefault"
                    >
                      {value.title}
                    </label>
                    <input
                      key={index}
                      //   checked={
                      //     !!newsDetailsList &&
                      //     newsDetailsList.portfolios &&
                      //     newsDetailsList.portfolios.length > 0
                      //       ? newsDetailsList.portfolios.map((val) => {
                      //           return val._id === value._id ? true : false;
                      //         })
                      //       : null
                      //   }
                      type="checkbox"
                      onClick={() => selectPortfolio(value._id)}
                      className="cursor-pointer mx-2"
                    />
                  </div>
                );
              })
            : "You don't have any portfolio List"}
        </>
      )}
      <span className="text-danger">
        {error &&
        newsDetails &&
        newsDetails.portfolio &&
        !newsDetails.portfolio.length
          ? "Portfolio is required"
          : null}
      </span>
      <p className="fw-bold">Select Category List As Tag</p>
      {loading ? (
        <BubblesLoader />
      ) : (
        <>
          {categoryList && categoryList.length
            ? categoryList.map((value, index) => {
                return (
                  <div className="col-auto mb-3 d-flex align-items-center">
                    <label
                      className="form-check-label check-box-text Ellipse"
                      for="flexCheckDefault"
                    >
                      {value.title}
                    </label>
                    <input
                      key={index}
                      type="checkbox"
                      onClick={() => selectCategory(value._id, value.title)}
                      className="cursor-pointer mx-2"
                    />
                  </div>
                );
              })
            : "You don't have any portfolio List"}
        </>
      )}
      <span className="text-danger">
        {error && categoryArray && !categoryArray.length
          ? "Category is required"
          : null}
      </span>
    </>
  );
};
export default NewsSelectTypes;
