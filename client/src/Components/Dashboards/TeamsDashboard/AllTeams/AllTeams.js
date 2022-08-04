import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

const AllTeams = () => {
  const [getTeams, setGetTeams] = useState([]);

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
                  {getTeams.map((team) => (
                    <tr key={team._id}>
                      <td>{team.teamName}</td>
                      <td>{team.teamMod}</td>
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

export default AllTeams;
