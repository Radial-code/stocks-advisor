import { NavLink, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "../common/SideBar/Sidebar.css";

const PortfoliosSidebar = ({ sidebarActive, setPortfoliosId }) => {
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );

  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-60vh p-4">
        <div className=" mt-5 w-100  ">
          <p className=" mt-2 profile-heading pr-15 ml-2 pb-2 border-b-1">
            Portfolios
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              {dashboardPortfoliosList && dashboardPortfoliosList.length
                ? dashboardPortfoliosList.map((value) => {
                    return (
                      <NavLink
                        to={`/protfolios/stock/${value._id}`}
                        activeClassName="active"
                        onClick={() => setPortfoliosId(value._id)}
                      >
                        <li className={`pt-13 pb-13 mt-15 `}>
                          <span>{value.title}</span>
                        </li>
                      </NavLink>
                    );
                  })
                : null}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(PortfoliosSidebar);
