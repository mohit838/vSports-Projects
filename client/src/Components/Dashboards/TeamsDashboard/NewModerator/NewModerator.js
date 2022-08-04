import React from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

const NewModerator = () => {
  const handleRegSubmit = () => {};
  const handleOnBlur = () => {};

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
              <form onSubmit={handleRegSubmit}>
                <TextField
                  required
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Moderator ID"
                  variant="standard"
                  name="moderatorId"
                  type="number"
                  onBlur={handleOnBlur}
                />

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 5 }}
                  type="submit"
                  variant="contained"
                >
                  Create Moderator
                </Button>
              </form>
            </Grid>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
              <h1 style={{ textAlign: "center" }}>Moderators List</h1>

              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Moderator</th>
                    <th>Sports</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Valorant</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Francisco Chang</td>
                    <td>Cricket</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Roland Mendel</td>
                    <td>Football</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Helen Bennett</td>
                    <td>Valorant</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
                    <td>Yoshi Tannamuri</td>
                    <td>Cricket</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                  <tr>
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

export default NewModerator;
