import React from "react";
import "./home.css";
import Header from "./../../Shared/Header/Header";
import Navbar from "./../../Shared/Navbar/Navbar";
import Footer from "./../../Shared/Footer/Footer";
import { MDBTypography } from "mdb-react-ui-kit";
import TournamentHomeCard from "./../../Tournaments/TournamentCard/TournamentHomeCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="pb-6 mb-6 border-bottom"></div>
      <MDBTypography
        tag="div"
        className="display-4 pb-3 mb-3 border-bottom text-center"
      >
        Available Tournament
      </MDBTypography>
      <div className="homeCardDesign">
        <TournamentHomeCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
