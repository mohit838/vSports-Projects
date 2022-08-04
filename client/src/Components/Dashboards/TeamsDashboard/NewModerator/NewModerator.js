import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

const NewModerator = () => {
  const [getGId, setGetGId] = useState();
  const [getMod, setGetMod] = useState([]);

  const handleOnBlur = (e) => {
    setGetGId(e.target.value);
  };

  const handleMakeModerator = (e) => {
    const user = { getGId };

    fetch("https://vsportsg.herokuapp.com/api/user/moderator", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          window.alert("Create moderator successfully.");
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://vsportsg.herokuapp.com/api/mod-list")
      .then((res) => res.json())
      .then((data) => {
        setGetMod(data);
      });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
              <form onSubmit={handleMakeModerator}>
                <TextField
                  required
                  id="standard-basic"
                  label="vID"
                  name="moderator"
                  type="number"
                  variant="standard"
                  onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">
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
                    <th>vID</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>

                  {getMod.map((mod) => (
                    <tr key={mod._id}>
                      <td>{mod.displayName}</td>
                      <td>{mod.vid}</td>
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

export default NewModerator;
