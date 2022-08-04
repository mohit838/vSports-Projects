import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { MDBTypography } from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";

const DashBoardHome = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <MDBTypography
              tag="div"
              className="display-6 pb-3 mb-3 border-bottom text-center"
            >
              Match Overview
            </MDBTypography>

            {/* Brackets Pair */}

            <div className="gamesNameLists">
              <nav>
                <Link to="">Add Team</Link>
                <Link to="two-team">Two Team</Link>
                <Link to="four-team">Four Team</Link>
                <Link to="eight-team">Eight Team</Link>
              </nav>
            </div>
            <div className="graphDesign">
              <div className="firstRoundDesign">
                <Outlet />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashBoardHome;
