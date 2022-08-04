import React from "react";
import { Box, Container, Grid } from "@mui/material";

const AllTeams = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={12}>
              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Team Name</th>
                    <th>Moderator</th>
                    <th>Sports</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td>Alfreds</td>
                    <td>Maria Anders</td>
                    <td>Valorant</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Centro </td>
                    <td>Francisco Chang</td>
                    <td>Cricket</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Ernst</td>
                    <td>Roland Mendel</td>
                    <td>Football</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Island</td>
                    <td>Helen Bennett</td>
                    <td>Valorant</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Laughing</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Cricket</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Magazzini</td>
                    <td>Giovanni Rovelli</td>
                    <td>Football</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                </table>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllTeams;
