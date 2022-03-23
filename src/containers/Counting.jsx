import React from "react";

//CSS Imports
import "./Counting.scss";

//Static Data Imports
import { staticContent } from "../staticContent";
//Component Imports
import Count from "./Count";

export default function Counting() {
  return (
    <div>
      <div className="container-style">
        <div className="blur-style">
          <span className="medium-head ">
            {staticContent.section_1.headingText}
          </span>
          <p className="p-style">{staticContent.section_1.paragraphText}</p>
        </div>
        <Count />
      </div>
    </div>
  );
}
