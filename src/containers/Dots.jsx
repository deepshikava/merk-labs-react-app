import React from "react";

//CSS Imports
import "./Dots.scss";

//Component Imports
import SingleDot from "../components/Dots/SingleDot";

function Dots() {
  const n = 8;

  const dotMatrixGenerator = (n) => {
    return [...Array(n)].map((i) => (
      <div key={i}>
        {[...Array(n)].map((i) => (
          <div key={i}>
            <SingleDot key={i} />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="dot-container-style">
      <div className="dot-matrix-style">{dotMatrixGenerator(n)}</div>
    </div>
  );
}

export default Dots;
