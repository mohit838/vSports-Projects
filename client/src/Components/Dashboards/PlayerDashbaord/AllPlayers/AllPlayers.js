import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

const AllPlayers = () => {
  const [getPlayers, setGetPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/players")
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
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={12}>
              <div className="tableOfContents">
                <table>
                  <tr>
                    <th>Players Name</th>
                    <th>gID</th>
                    <th>Team</th>
                    <th>Sports</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                  {getPlayers.map((player) => (
                    <tr key={player._id}>
                      <td>{player.playerName}</td>
                      <td>{player.gId}</td>
                      <td>N/A</td>
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

export default AllPlayers;
