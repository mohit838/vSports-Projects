import React, { useState } from "react";
import "./navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" sticky light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <nav className="logo">
              <Link to="/">gSports.</Link>
            </nav>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 navBar">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <nav>
                    <Link to="dashboard/team">Team</Link>
                  </nav>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <nav>
                    <Link to="dashboard/player">Player</Link>
                  </nav>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <nav>
                    <Link to="dashboard/tournament">Tournament</Link>
                  </nav>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 navBar">
              {user?.email ? (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      <nav>
                        <Link to="/dashboard">Dashboard</Link>
                      </nav>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      <nav>
                        <Link to="" onClick={logOut}>
                          LogOut
                        </Link>
                      </nav>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              ) : (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      <nav>
                        <Link to="/login">LogIn</Link>
                      </nav>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      <nav>
                        <Link to="/signup">SignUp</Link>
                      </nav>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
