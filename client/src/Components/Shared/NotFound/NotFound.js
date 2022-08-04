import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ fontSize: "80px", textAlign: "center" }}>404</h1>
      <p style={{ fontSize: "25px", textAlign: "center" }}>Page Not Found.</p>

      <nav style={{ fontSize: "25px", textAlign: "center" }}>
        <Link to="/">Homepage</Link>
      </nav>
    </div>
  );
};

export default NotFound;
