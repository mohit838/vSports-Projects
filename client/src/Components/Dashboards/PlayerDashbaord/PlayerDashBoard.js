import React from "react";
import { Box } from "@mui/material";
import { MDBTypography } from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";

const PlayerDashBoard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <div className="pb-3 mb-3 border-bottom"></div>
        <MDBTypography
          tag="div"
          className="display-6 pb-3 mb-3 border-bottom text-center"
        >
          Players
        </MDBTypography>
        <div className="gamesNameLists">
          <nav>
            <Link to="">Player List</Link>
            <Link to="create-player">Create Player</Link>
          </nav>
        </div>
      </Box>
      <Outlet />
    </>
  );
};

export default PlayerDashBoard;
