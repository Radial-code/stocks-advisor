import React from "react";
import ReactLoading from "react-loading";

function BubblesLoader() {
  return (
    <div>
      <ReactLoading
        className="preloader"
        type="spinningBubbles"
        color="#127cf9"
      />
    </div>
  );
}
export default BubblesLoader;
