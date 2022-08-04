import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProfileDashboard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4">Profile DashBoard</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileDashboard;
