import { Box, Button, TextField } from "@mui/material";
import React from "react";

const AddRolePage = () => {
  return (
    <>
      <Box>
        <div className="roleContent">
          <div className="makeAdmin">
            <TextField
              required
              id="standard-basic"
              label="vID"
              name="makeAdmin"
              type="number"
              variant="standard"
            />
            <Button variant="contained">Make Admin</Button>
          </div>

          <div className="makeModerator">
            <TextField
              required
              id="standard-basic"
              label="vID"
              name="makeModerator"
              type="number"
              variant="standard"
            />
            <Button variant="contained">Make Moderator</Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddRolePage;
