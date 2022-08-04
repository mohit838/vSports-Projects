import React, { useEffect, useState } from "react";
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
  const [getPlayers, setGetPlayers] = useState([]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...newPlayers };
    newInfo[field] = value;
    setNewPlayers(newInfo);
  };

  const handleRegSubmit = (e) => {
    const procced = window.confirm("Wanna Create New Player???");

    if (procced) {
      ///Collect Data
      const newPlayersData = {
        ...newPlayers,
      };

      //Send to the server
      fetch("https://vsportsg.herokuapp.com/api/new-player", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPlayersData),
      })
        .then((res) => res.json())
        .then((data) => {
          // Get Acknoledge for data reciving and show
          if (data.insertedId) {
            window.alert("Inserted Successfully.");
          }
        });
    }

    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://vsportsg.herokuapp.com/api/players")
      .then((res) => res.json())
      .then((data) => {
        setGetPlayers(data);
      });
  }, []);

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
              <h1 style={{ textAlign: "center" }}>Players List</h1>

              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Players Name</th>
                    <th>gID</th>
                    <th>Sports</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>

                  {getPlayers.map((player) => (
                    <tr key={player._id}>
                      <td>{player.playerName}</td>
                      <td>{player.gId}</td>
                      <td>{player.sportsName}</td>
                      <td>Update</td>
                      <td>Delete</td>
                    </tr>
                  ))}
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
