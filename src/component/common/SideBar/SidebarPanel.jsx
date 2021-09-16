import React from "react";

import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function SidebarPanel({ page, sidebarActive }) {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
        <div className=" mt-5 w-100  ">
          <p className=" mt-2 profile-heading pr-15 pb-2 border-b-1">
            Content Manager
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <Link href="#">
                <li
                  className={`pt-13 pb-13 mt-15  ${
                    page === "add" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Stocks</span>
                </li>
              </Link>

              <Link href="#">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span>News</span>
                </li>
              </Link>

              <Link href="#">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Users</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
