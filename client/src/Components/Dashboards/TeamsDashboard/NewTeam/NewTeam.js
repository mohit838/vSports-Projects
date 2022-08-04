import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

const initialTeamInfo = {
  teamName: "",
  sportsName: "",
};

const NewTeam = () => {
  const [newTeams, setNewTeams] = useState(initialTeamInfo);
  const [getTeams, setGetTeams] = useState([]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...newTeams };
    newInfo[field] = value;
    setNewTeams(newInfo);
  };

  const handleRegSubmit = (e) => {
    const procced = window.confirm("Wanna Create New Team???");

    if (procced) {
      ///Collect Data
      const newTeamData = {
        ...newTeams,
      };

      //Send to the server
      fetch("http://localhost:5000/api/new-team", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTeamData),
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
    fetch("http://localhost:5000/api/teams")
      .then((res) => res.json())
      .then((data) => {
        setGetTeams(data);
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
                  label="Team Name"
                  variant="standard"
                  name="teamName"
                  type="text"
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

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 5 }}
                  type="submit"
                  variant="contained"
                >
                  Create Team
                </Button>
              </form>
            </Grid>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
              <h1 style={{ textAlign: "center" }}>Teams List</h1>

              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Team Name</th>
                    <th>Moderator</th>
                    <th>Sports</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  {getTeams.map((team) => (
                    <tr key={team._id}>
                      <td>{team.teamName}</td>
                      <td>N/A</td>
                      <td>{team.sportsName}</td>
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

export default NewTeam;
