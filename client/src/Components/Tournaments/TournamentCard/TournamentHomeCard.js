import React, { useState } from "react";
import { Grid } from "@mui/material";
import TournamentGameCard from "./tournamentGameCard/TournamentGameCard";

// Game List
const initialGameName = [
  {
    id: 1,
    gameName: "Cricket",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
  {
    id: 2,
    gameName: "Football",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
  {
    id: 3,
    gameName: "Basketball",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
  {
    id: 4,
    gameName: "Volleyball",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
  {
    id: 5,
    gameName: "Batminton",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
  {
    id: 6,
    gameName: "Valorant",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/dashboard",
  },
];

const HomeCard = () => {
  const [gamesName, setGamesName] = useState(initialGameName);

  return (
    <>
      <Grid container spacing={2}>
        {gamesName.map((games) => (
          <TournamentGameCard key={games.id} games={games}></TournamentGameCard>
        ))}
      </Grid>
    </>
  );
};

export default HomeCard;
