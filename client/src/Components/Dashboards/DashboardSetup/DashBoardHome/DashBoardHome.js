import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { MDBTypography } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";

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
              Overviews
            </MDBTypography>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashBoardHome;
