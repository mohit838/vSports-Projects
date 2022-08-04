import { Button } from "@mui/material";
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
      <Button onClick={() => handleNumber(2)}>Two</Button>

      <div className="MatchMenu">
        <div className="nextRoundBtn">
          <button onClick={handleNextRound}>Next Round</button>
        </div>
        <div className="nextRoundBtn">
          <button onClick={handleSetWinner}>Winner</button>
        </div>
      </div>

      <div className="graphDesign">
        <div className="firstRoundDesign">
          {numbers === 2 ? (
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
          {nextRound && numbers === 2 ? (
            <>
              <TeamEntry></TeamEntry>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <div className="nextRoundDesign">
          {winner && numbers === 2 ? (
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

export default TwoTeams;
