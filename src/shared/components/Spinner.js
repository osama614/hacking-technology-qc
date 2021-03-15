import React from "react";
const Spinner = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
