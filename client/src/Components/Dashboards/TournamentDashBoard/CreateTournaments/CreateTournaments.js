import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";

const CreateTournaments = () => {
  const handleRegSubmit = () => {};
  const handleOnBlur = () => {};

  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <form onSubmit={handleRegSubmit}>
              <TextField
                required
                sx={{ width: "75%", mt: 3 }}
                id="standard-basic"
                label="Tournament Name"
                variant="standard"
                name="gameName"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                required
                sx={{ width: "75%", mt: 5 }}
                id="standard-basic"
                label="Tournament Description"
                variant="standard"
                name="des"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                required
                sx={{ width: "75%", mt: 5 }}
                id="standard-basic"
                label="Start Date"
                variant="standard"
                name="date"
                type="date"
                onBlur={handleOnBlur}
              />

              <br></br>
              <Button
                sx={{ width: "75%", mt: 5 }}
                type="submit"
                variant="contained"
              >
                Create Tournament
              </Button>
            </form>
          </Grid>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <h1 style={{ textAlign: "center" }}>Tournaments List</h1>

            <div className="tableOfTournamentsList">
              <table>
                <tr>
                  <th>Tournament Name</th>
                  <th>Start Date</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                </tr>
              </table>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateTournaments;
