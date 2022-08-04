import { Box } from "@mui/material";
import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProfileDashboard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <MDBTypography
          tag="div"
          className="display-6 pb-3 mb-3 border-bottom text-center"
        >
          Players
        </MDBTypography>
        <div className="gamesNameLists">
          <nav>
            <Link to="">Profile Details</Link>
            <Link to="add-role">Create Role</Link>
          </nav>
        </div>
        <div className="pb-3 mb-3 border-bottom"></div>
        <Outlet />
      </Box>
    </>
  );
};

export default ProfileDashboard;
