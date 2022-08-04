import React, { useState } from "react";
import "./login.css";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import regImg from "./../../../assets/img/regImg.svg";
import useAuth from "./../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signIn, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    signIn(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };

  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <Typography variant="h2" gutterBottom component="div">
              LogIn
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLogin}>
                <TextField
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", mt: 3, mb: 3 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnBlur}
                />

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 1 }}
                  type="submit"
                  variant="contained"
                >
                  LogIn
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <>
                <Alert severity="success">
                  <AlertTitle>Login Successful!</AlertTitle>
                </Alert>
              </>
            )}
            {/* AuthError */}
            {authError && (
              <Alert severity="error">
                <AlertTitle>{authError}</AlertTitle>
              </Alert>
            )}

            <div className="xtraData">
              <p>
                Need account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Button
                    style={{ color: "black", textTransform: "capitalize" }}
                    variant="text"
                  >
                    Registration
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
              alt="login Img"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
