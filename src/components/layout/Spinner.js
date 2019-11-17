import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style={{ width: "250px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
