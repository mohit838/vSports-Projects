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
            <input type="text" placeholder="Team Name" />
            <input type="text" placeholder="Team Point" />
            <button type="submit">Update</button>
          </form>
        </div>
        <div className="sigleTeam">
          <form onClick={handleFirstRound}>
            <input type="text" placeholder="Team Name" />
            <input type="text" placeholder="Team Point" />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TeamEntry;
