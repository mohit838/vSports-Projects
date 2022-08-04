import React from "react";
import { Box } from "@mui/material";
import { MDBTypography } from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const TeamDashboard = () => {
  const { admin } = useAuth();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <div className="pb-3 mb-3 border-bottom"></div>
        <MDBTypography
          tag="div"
          className="display-6 pb-3 mb-3 border-bottom text-center"
        >
          Teams
        </MDBTypography>
        <div className="gamesNameLists">
          <nav>
            <Link to="">Team List</Link>
            {admin && (
              <>
                <Link to="create-team">Create Team</Link>
                <Link to="create-moderator">Create Moderator</Link>
              </>
            )}
          </nav>
        </div>
      </Box>
      <Outlet />
    </>
  );
};

export default TeamDashboard;
