import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";

const SecondaryBanner = (props) => {
  return (
    <>
      <div className="pb-6 mb-6 border-bottom"></div>
      <MDBTypography
        tag="div"
        className="display-4 pb-3 mb-3 border-bottom text-center"
      >
        {props.children}
      </MDBTypography>
    </>
  );
};

export default SecondaryBanner;
