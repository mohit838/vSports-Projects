import { Button, TextField } from "@mui/material";
import React from "react";

const TeamEntry = () => {
  const handleFirstRound = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="groupsInTwo">
        <div className="sigleTeam">
          <form onClick={handleFirstRound}>
            <TextField
              required
              id="standard-basic"
              label="Team Name"
              name="teamOne"
              type="text"
              variant="standard"
            />
            <TextField
              required
              id="standard-basic"
              label="Point"
              name="teamPointOne"
              type="number"
              variant="standard"
            />
            <Button
              style={{ color: "black", textTransform: "capitalize" }}
              variant="text"
            >
              Update
            </Button>
          </form>
        </div>
        <div className="sigleTeam">
          <form onClick={handleFirstRound}>
            <TextField
              required
              id="standard-basic"
              label="Team Name"
              name="teamTwo"
              type="text"
              variant="standard"
            />
            <TextField
              required
              id="standard-basic"
              label="Point"
              name="teamPointTwo"
              type="number"
              variant="standard"
            />
            <Button
              style={{ color: "black", textTransform: "capitalize" }}
              variant="text"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TeamEntry;
