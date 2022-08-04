import { Button } from "@mui/material";
import React, { useState } from "react";
import TeamEntry from "../TeamEntry/TeamEntry";
import "./../onlyBracketDesign.css";

const FourTeams = () => {
  const [numbers, setNumbers] = useState(null);
  const [nextRound, setNextRound] = useState(false);
  const [nextRoundTwo, setNextRoundTwo] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleNumber = (num) => {
    setNumbers(num);
  };

  const handleNextRound = () => {
    setNextRound(true);
  };

  const handleNextRoundTwo = () => {
    setNextRoundTwo(true);
  };

  const handleSetWinner = () => {
    setWinner(true);
  };

  const handleWinner = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button onClick={() => handleNumber(4)}>Four</Button>

      <div className="MatchMenu">
        <div className="nextRoundBtn">
          <button onClick={handleNextRound}>Next Round</button>
        </div>
        <div className="nextRoundBtn">
          <button onClick={handleNextRoundTwo}>Next Round Two</button>
        </div>
        <div className="nextRoundBtn">
          <button onClick={handleSetWinner}>Winner</button>
        </div>
      </div>

      <div className="graphDesign">
        <div className="firstRoundDesign">
          {numbers === 4 ? (
            <>
              <TeamEntry></TeamEntry>
              <br />
              <TeamEntry></TeamEntry>
              <br />
              <TeamEntry></TeamEntry>
              <br />
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="nextRoundDesign">
          {nextRound && numbers === 4 ? (
            <>
              <TeamEntry></TeamEntry>
              <br />
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="nextRoundDesign">
          {nextRoundTwo && numbers === 4 ? (
            <>
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="nextRoundDesign">
          {winner && numbers === 4 ? (
            <>
              <form onClick={handleWinner}>
                <input type="text" placeholder="Team Name" />
                <input type="text" placeholder="Team Point" />
                <button type="submit">Update</button>
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

export default FourTeams;
