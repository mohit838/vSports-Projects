import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      {/* Header Start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          // backgroundImage:
          //   "url('#!')",
          // backgroundColor: "#3fa72f",
          backgroundColor: "#323232",
          height: 400,
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">We organize gSports tournament</h1>
              <h4 className="mb-3">gSports Gaming</h4>
              <nav
                className="btn btn-outline-light btn-lg headerLinkColor"
                role="button"
              >
                <Link to="/dashboard/tournament">See Tournaments</Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Header End */}
      </div>
    </>
  );
};

export default Header;
