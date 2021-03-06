import React from "react";
import { useSelector } from "react-redux";
import SearchNews from "../../assets/img/searchnews.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import BubblesLoader from "../common/BubblesLoader";
import SearchTable from "./SearchTable";

function Search({ searchData, loading, searchshow }) {
  const { getValueOf } = useLayoutChangerProvider();
  const searchNewsList = useSelector((state) => state.list.searchNewsList);
  return (
    <div className="container mt-100">
      {searchData === "" ? (
        <>
          <img
            className="searchnews mx-auto d-block mt-5"
            src={SearchNews}
            alt=""
          />
          <h4 className="text-center">
            ...{getValueOf("Type to Search News Result")}
          </h4>
        </>
      ) : (
        <>
          {searchshow ? (
            <div className="row">
              <div className="col-12 current-stock-block">
                <div className="shadow rounded p-sm-3 p-2 my-4">
                  <div className="mt-4 d-flex justify-content-between align-items-center">
                    <h1 className="current-stock-text ff-popins mb-0 fs-sm-20">
                      {getValueOf("Search News")}
                    </h1>
                  </div>
                  <div className="overflow-auto h-calc-100vh-380 scroll-bar mt-3 ">
                    <div className="table-responsive  current-stock-scrollbar h-100">
                      {loading ? (
                        <div className="d-flex justify-content-center align-items-center">
                          <BubblesLoader />
                        </div>
                      ) : (
                        <>
                          <div>
                            {!!searchNewsList.length && searchData !== "" ? (
                              <SearchTable
                                getValueOf={getValueOf}
                                searchshow={searchshow}
                                searchNewsList={searchNewsList}
                              />
                            ) : (
                              `${getValueOf("No result found")}`
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <img
                className="searchnews mx-auto d-block"
                src={SearchNews}
                alt=""
              />
              <h4 className="text-center">
                ...{getValueOf("Type to Search News Result")}
              </h4>
            </>
          )}
        </>
      )}
    </div>
  );
}
export default Search;
