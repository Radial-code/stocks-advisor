import { useState } from "react";
import Category from "./Category";
import "../otherServices/OtherServices.css";
import Portfolio from "./Portfolio";
import Exchange from "./Exchange";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import Promocode from "./PromoCode";

const OtherServices = () => {
  const { getValueOf } = useLayoutChangerProvider();
  const [categoryTable, setCategoryTable] = useState(true);
  const [portfolioTable, setPortfolioTable] = useState(false);
  const [exchangeTable, setExchangeTable] = useState(false);
  const [promocodeTable, setPromoCodeTable] = useState(false);
  const showTable = (value) => {
    if (value === "category") {
      setCategoryTable(true);
      setExchangeTable(false);
      setPortfolioTable(false);
      setPromoCodeTable(false);
    } else if (value === "portfolio") {
      setPortfolioTable(true);
      setExchangeTable(false);
      setCategoryTable(false);
      setPromoCodeTable(false);
    } else if (value === "exchange") {
      setExchangeTable(true);
      setPortfolioTable(false);
      setCategoryTable(false);
      setPromoCodeTable(false);
    } else if (value === "promocode") {
      setExchangeTable(false);
      setPortfolioTable(false);
      setCategoryTable(false);
      setPromoCodeTable(true);
    }
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 ">
          <div className="other-services bg-white  p-sm-3 p-2">
            <div className="row justify-content-between flex-md-row flex-column align-items-center pt-4">
              <div className="col-xxl-3 col-12 pb-xxl-0 pb-sm-3 ">
                <p className="mb-0 text-md-end text-center other-services-text">
                  Other Services
                </p>
              </div>
              <div className="col-xxl-9 d-flex  justify-content-md-end flex-md-row flex-column">
                <button
                  className={`${
                    exchangeTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2 ms-xl-3 ms-1`}
                  onClick={() => showTable("exchange")}
                >
                  Exchange
                </button>
                <button
                  className={`${
                    portfolioTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2  ms-xl-3 ms-1`}
                  onClick={() => showTable("portfolio")}
                >
                  Portfolio
                </button>

                <button
                  className={`${
                    promocodeTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2  ms-xl-3 ms-1`}
                  onClick={() => showTable("promocode")}
                >
                  PromoCode
                </button>
                <button
                  className={`${
                    categoryTable ? "services-btn-active" : "services-btn"
                  } px-4 py-2 my-md-0 my-2  ms-xl-3 ms-1`}
                  onClick={() => showTable("category")}
                >
                  Category
                </button>
              </div>
            </div>

            {categoryTable ? <Category /> : ""}
            {portfolioTable ? <Portfolio /> : ""}
            {exchangeTable ? <Exchange /> : ""}
            {promocodeTable ? <Promocode /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
