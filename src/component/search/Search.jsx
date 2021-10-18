import React from "react";
import SearchNews from "../../assets/img/searchnews.png";
function Search() {
  return (
    <div>
      <img className="searchnews mx-auto d-block" src={SearchNews} alt="" />
      <h4 className="text-center">Type to Search</h4>
    </div>
  );
}

export default Search;
