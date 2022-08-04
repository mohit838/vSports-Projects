import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TeamEntry from "../TeamEntry/TeamEntry";
import "./../onlyBracketDesign.css";

const TwoTeams = () => {
  const [numbers, setNumbers] = useState(null);
  const [nextRound, setNextRound] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleNumber = (num) => {
    setNumbers(num);
  };

  const handleNextRound = () => {
    setNextRound(true);
  };

  const handleSetWinner = () => {
    setWinner(true);
  };

  const handleWinner = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="MatchMenu">
        <Button onClick={() => handleNumber(2)}>First Round</Button>
        <Button onClick={handleNextRound}>Final Round</Button>
        <Button onClick={handleSetWinner}>Winner</Button>
        <Button>Current Entry</Button>
        <Button>Delete</Button>
      </div>

      <div className="graphDesign">
        <div className="firstRoundDesign">
          {numbers === 2 ? (
            <>
              <Typography variant="h6" gutterBottom component="div">
                First Round
              </Typography>
              <TeamEntry></TeamEntry>
              <br />
              <br />
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="nextRoundDesign">
          {nextRound && numbers === 2 ? (
            <>
              <Typography variant="h6" gutterBottom component="div">
                Final Round
              </Typography>
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="winnerRoundDesign">
          {winner && numbers === 2 ? (
            <>
              <Typography variant="h6" gutterBottom component="div">
                Winner
              </Typography>
              <form onClick={handleWinner}>
                <TextField
                  required
                  id="standard-basic"
                  label="Team Name"
                  name="teamWinner"
                  type="text"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-basic"
                  label="Point"
                  name="teamPointWinner"
                  type="number"
                  variant="standard"
                />
                <Button
                  style={{ color: "black", textTransform: "capitalize" }}
                  variant="text"
                >
                  Winner
                </Button>
              </form>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default TwoTeams;
