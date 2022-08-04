import React from "react";
import "./tournamentGameCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const GameCard = ({ games }) => {
  const { gameName, des, link } = games;

  return (
    <>
      <Grid item xs={12} md={4} sm={6}>
        <Paper elevation={3}>
          <Card sx={{ minWidth: 275 }}>
            <div className="gameCard">
              <CardContent>
                <Typography variant="h5" component="div" sx={{ m: 2 }}>
                  {gameName}
                </Typography>

                <Typography variant="body2">{des}</Typography>
              </CardContent>
              <Button variant="contained">
                <nav className="gameCardBtn">
                  <Link to={link}>Join Tournaments</Link>
                </nav>
              </Button>
            </div>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default GameCard;
