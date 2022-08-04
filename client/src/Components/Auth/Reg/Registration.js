import React, { useState } from "react";
import "./registration.css";
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import regImg from "./../../../assets/img/regImg.svg";
import useAuth from "./../../../Hooks/useAuth";

const Registration = () => {
  const [regData, setRegData] = useState({});
  const { createNewUser, isLoading, authError } = useAuth();

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegData = { ...regData };
    newRegData[field] = value;
    setRegData(newRegData);
  };
  const handleRegSubmit = (e) => {
    if (regData.password !== regData.passwordTwo) {
      window.alert("Not Matched Password!");
      return;
    }
    createNewUser(regData.name, regData.email, regData.password, navigate);

    e.preventDefault();
  };

  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <Typography variant="h2" gutterBottom component="div">
              Registration
            </Typography>
            {!isLoading && (
              <form onSubmit={handleRegSubmit}>
                <TextField
                  required
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  required
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  required
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <TextField
                  required
                  sx={{ width: "75%", mt: 3, mb: 3 }}
                  id="standard-basic"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  name="passwordTwo"
                  onBlur={handleOnBlur}
                />

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </form>
            )}

            {/* For Loading Progress */}
            {isLoading && <CircularProgress />}
            {/* AuthError */}
            {authError && (
              <Alert severity="error">
                <AlertTitle>{authError}</AlertTitle>
              </Alert>
            )}

            <div className="xtraData">
              <p>
                Have any account?{" "}
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Button
                    style={{ color: "black", textTransform: "capitalize" }}
                    variant="text"
                  >
                    Login
                  </Button>
                </Link>
              </p>
              <p>
                Wanna Go <Link to="/">Homepage?</Link>
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              style={{ marginTop: "25px", width: "auto", height: "91vh" }}
              src={regImg}
              alt="reg Img"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Registration;
