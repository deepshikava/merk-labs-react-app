import React from "react";

//CSS Imports
import "./Counting.scss";

//Component Imports
import CountImage from "../asserts/count.png";
import { staticContent } from "../staticContent";

export default function Counting() {
  const imgStyle = {
    height: "30vw",
    width: "fit-content",
  };

  return (
    <div>
      <div className="container-style">
        <div className="blur-style">
          <span className="medium-head ">
            {staticContent.section_1.headingText}
          </span>
          <p className="p-style">{staticContent.section_1.paragraphText}</p>
        </div>
        <img
          src={CountImage}
          alt="counting"
          className="img-style"
          style={imgStyle}
        />
      </div>
    </div>
  );
}
