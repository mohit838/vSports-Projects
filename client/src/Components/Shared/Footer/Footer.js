import React from "react";
import "./footer.css";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>gSports.
                </h6>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Tournaments</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Valorant
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Cricket
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Volleyball
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Batminton
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Teams
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Players
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tournaments
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Login
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> XYZ , XT 1001, XY
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          ?? 2022 Copyright:
          <a className="text-reset fw-bold" href="#!">
            gSports.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
