import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

const initialPlayerInfo = {
  playerName: "",
  gId: "",
  sportsName: "",
};

const NewPlayers = () => {
  const [newPlayers, setNewPlayers] = useState(initialPlayerInfo);

  const handleRegSubmit = (e) => {
    // Collect data

    // Send server

    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...newPlayers };
    newInfo[field] = value;
    setNewPlayers(newInfo);

    console.log(newPlayers);
  };

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
                  label="Player Name"
                  variant="standard"
                  name="playerName"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  required
                  sx={{ width: "75%", mt: 5 }}
                  id="standard-basic"
                  label="Player gID"
                  variant="standard"
                  name="gId"
                  type="number"
                  onBlur={handleOnBlur}
                />
                <TextField
                  required
                  sx={{ width: "75%", mt: 5 }}
                  id="standard-basic"
                  label="Sports"
                  variant="standard"
                  name="sportsName"
                  type="text"
                  onBlur={handleOnBlur}
                />
                {/* Choose sports */}
                {/* <FormControl>
                  <FormLabel
                    required
                    sx={{ width: "75%", mt: 5 }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Sports
                  </FormLabel>

                  <RadioGroup
                    required
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="valorant"
                      control={<Radio />}
                      label="Valorant"
                      name="sportsName"
                      onBlur={handleOnBlur}
                    />
                    <FormControlLabel
                      value="cricket"
                      control={<Radio />}
                      label="Cricket"
                      name="sportsName"
                      onBlur={handleOnBlur}
                    />
                    <FormControlLabel
                      value="football"
                      control={<Radio />}
                      label="Football"
                      name="sportsName"
                      onBlur={handleOnBlur}
                    />
                  </RadioGroup>
                </FormControl> */}

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 5 }}
                  type="submit"
                  variant="contained"
                >
                  Create Player
                </Button>
              </form>
            </Grid>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
              <h1 style={{ textAlign: "center" }}>Team Lists</h1>

              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Players Name</th>
                    <th>gID</th>
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

export default NewPlayers;
