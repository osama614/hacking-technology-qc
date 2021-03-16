import React from "react";
import { GreenLogo } from "../../assets";
const Spinner = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <img
        src={GreenLogo}
        alt="Hacking Technology qc"
        className="p-3"
        style={{ width: "100px" }}
      />
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
