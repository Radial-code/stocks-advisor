import React from "react";
import { useSelector } from "react-redux";
import SearchNews from "../../assets/img/searchnews.png";
import BubblesLoader from "../common/BubblesLoader";
import SearchTable from "./SearchTable";

function Search({ searchData, loading }) {
  const searchNewsList = useSelector((state) => state.list.searchNewsList);
  return (
    <div>
      {searchData === "" ? (
        <>
          <img className="searchnews mx-auto d-block" src={SearchNews} alt="" />
          <h4 className="text-center">...Type to Search News Result</h4>
        </>
      ) : (
        <>
          {loading ? (
            <BubblesLoader />
          ) : (
            <>
              {!!searchNewsList.length && searchData !== "" ? (
                <SearchTable searchNewsList={searchNewsList} />
              ) : (
                "No result found"
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Search;
