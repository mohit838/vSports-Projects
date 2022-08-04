import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddRolePage = () => {
  const [getGId, setGetGId] = useState();

  const handleOnBlur = (e) => {
    setGetGId(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
  };
  const handleMakeModerator = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box>
        <div className="roleContent">
          <div className="makeAdmin">
            <form onSubmit={handleMakeAdmin}>
              <TextField
                required
                id="standard-basic"
                label="vID"
                name="admin"
                type="number"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <Button variant="contained">Create Admin</Button>
            </form>
          </div>

          <div className="makeModerator">
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
              <Button variant="contained">Create Moderator</Button>
            </form>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddRolePage;
