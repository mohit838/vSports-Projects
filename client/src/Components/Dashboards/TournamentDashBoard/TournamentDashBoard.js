import React from "react";
import { Box } from "@mui/material";
import { MDBTypography } from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const TournamentDashBoard = () => {
  const { admin } = useAuth();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <div className="pb-3 mb-3 border-bottom"></div>
        <MDBTypography
          tag="div"
          className="display-6 pb-3 mb-3 border-bottom text-center"
        >
          Tournaments
        </MDBTypography>
        <div className="gamesNameLists">
          <nav>
            {admin && (
              <>
                <Link to="">Create Tournament</Link>
                <Link to="add-team">Add Team</Link>
                <Link to="two-team">Two Team</Link>
                <Link to="four-team">Four Team</Link>
                <Link to="eight-team">Eight Team</Link>
              </>
            )}
            <Link to="">Your Tournament</Link>
          </nav>
        </div>

        <Outlet />
      </Box>
    </>
  );
};

export default TournamentDashBoard;
